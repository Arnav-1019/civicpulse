import { z } from 'zod';

export const createIssueSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title must be at least 5 characters long'),
    description: z.string().min(10, 'Provide more details about the issue'),
    category: z.enum(['LIGHTING', 'CLEANUP', 'BEAUTIFICATION', 'REPAIR', 'INFRASTRUCTURE']),
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    address: z.string().min(3, 'Address is required'),
    imageUrlBefore: z.string().url('Must be a valid image URL'),
    targetAmount: z.number().nonnegative().default(0),
    reporterId: z.string().uuid('Invalid reporter ID'),
  }),
});

export const getNearbyIssuesSchema = z.object({
  query: z.object({
    lat: z.string().transform((val) => parseFloat(val)),
    lng: z.string().transform((val) => parseFloat(val)),
    radiusKm: z.string().optional().transform((val) => (val ? parseFloat(val) : 5)),
    category: z.string().optional(),
    status: z.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'VERIFIED']).optional(),
  }),
});

export const createPledgeSchema = z.object({
  body: z.object({
    amount: z.number().positive('Pledge amount must be greater than zero'),
    userId: z.string().uuid('Invalid user ID'),
    issueId: z.string().uuid('Invalid issue ID'),
  }),
});
