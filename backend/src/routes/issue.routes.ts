import { Router } from 'express';
import { createIssue, getNearbyIssues } from '../controllers/issue.controller';
import { validate } from '../middleware/validate';
import { createIssueSchema, getNearbyIssuesSchema } from '../schemas/issue.schema';

const router = Router();
router.post('/', validate(createIssueSchema), createIssue);
router.get('/nearby', validate(getNearbyIssuesSchema), getNearbyIssues);
export default router;
