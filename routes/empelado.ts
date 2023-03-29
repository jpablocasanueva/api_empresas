import { Router } from 'express';
import { getEmpleados, getEmpleadosByEmpresa, postEmmpleado } from '../controllers/empleados';
const router = Router();

router.get('/', getEmpleados);
router.get('/:id',getEmpleadosByEmpresa)
router.post('/', postEmmpleado);

export default router;
