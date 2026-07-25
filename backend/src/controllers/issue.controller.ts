import { Request, Response } from 'express';
import { prisma } from '../config/db';

export const createIssue = async (req: Request, res: Response) => {
  try {
    const { title, description, category, latitude, longitude, address, imageUrlBefore, targetAmount, reporterId } = req.body;

    const newIssue = await prisma.issue.create({
      data: { title, description, category, latitude, longitude, address, imageUrlBefore, targetAmount, reporterId },
      include: { reporter: { select: { id: true, name: true, email: true } } },
    });

    return res.status(201).json({ status: 'success', data: newIssue });
  } catch (error) {
    console.error('Error creating issue:', error);
    return res.status(500).json({ status: 'error', message: 'Failed to create issue' });
  }
};

// Haversine formula: great-circle distance between two lat/lng points in kilometers.
// Used in place of a PostGIS ST_DWithin/ST_Distance query so the app can run on
// SQLite (zero external DB server) with an identical distance-sorted result set.
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export const getNearbyIssues = async (req: Request, res: Response) => {
  try {
    const lat = Number(req.query.lat);
    const lng = Number(req.query.lng);
    const radiusKm = Number(req.query.radiusKm) || 5;
    const category = req.query.category as string | undefined;
    const status = req.query.status as string | undefined;

    const issues = await prisma.issue.findMany({
      where: {
        ...(category ? { category } : {}),
        ...(status ? { status: status as any } : {}),
      },
    });

    const nearbyIssues = issues
      .map((issue) => ({
        ...issue,
        distanceKm: haversineKm(lat, lng, issue.latitude, issue.longitude),
      }))
      .filter((issue) => issue.distanceKm <= radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 50);

    return res.status(200).json({ status: 'success', results: nearbyIssues.length, data: nearbyIssues });
  } catch (error) {
    console.error('Error fetching nearby issues:', error);
    return res.status(500).json({ status: 'error', message: 'Failed to fetch spatial query results' });
  }
};

