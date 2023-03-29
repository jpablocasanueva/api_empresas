"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_1 = require("../controllers/empleados");
const router = (0, express_1.Router)();
router.get('/', empleados_1.getEmpleados);
router.get('/:id', empleados_1.getEmpleadosByEmpresa);
router.post('/', empleados_1.postEmmpleado);
exports.default = router;
//# sourceMappingURL=empelado.js.map