import { Request, Response } from 'express';
import { prisma } from '../config/db';

export const createPledge = async (req: Request, res: Response) => {
  try {
    const { amount, userId, issueId } = req.body;

    const issue = await prisma.issue.findUnique({ where: { id: issueId } });
    if (!issue) return res.status(404).json({ status: 'error', message: 'Target issue not found' });

    if (issue.status === 'RESOLVED' || issue.status === 'VERIFIED') {
      return res.status(400).json({ status: 'error', message: 'Cannot pledge to an already resolved issue' });
    }

    const result = await prisma.$transaction(async (tx) => {
      const pledge = await tx.pledge.create({ data: { amount, userId, issueId } });

      const updatedIssue = await tx.issue.update({
        where: { id: issueId },
        data: {
          raisedAmount: { increment: amount },
          status: issue.raisedAmount + amount >= issue.targetAmount && issue.targetAmount > 0 ? 'IN_PROGRESS' : issue.status,
        },
      });

      const pointsToAward = Math.floor(amount);
      await tx.user.update({ where: { id: userId }, data: { impactPoints: { increment: pointsToAward } } });

      return { pledge, updatedIssue };
    });

    return res.status(201).json({ status: 'success', message: 'Pledge recorded successfully!', data: result });
  } catch (error) {
    console.error('Error processing pledge:', error);
    return res.status(500).json({ status: 'error', message: 'Failed to record pledge' });
  }
};
