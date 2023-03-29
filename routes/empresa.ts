import { Router } from 'express';
import { getEmpresas, postEmpresa } from '../controllers/empresa';
const router = Router();

router.get('/', getEmpresas);
router.post('/', postEmpresa);

export default router;
