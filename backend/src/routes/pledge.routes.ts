import { Router } from 'express';
import { createPledge } from '../controllers/pledge.controller';
import { validate } from '../middleware/validate';
import { createPledgeSchema } from '../schemas/issue.schema';

const router = Router();
router.post('/', validate(createPledgeSchema), createPledge);
export default router;
