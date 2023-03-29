"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEmmpleado = exports.getEmpleadosByEmpresa = exports.getEmpleados = void 0;
const empleado_1 = __importDefault(require("../models/empleado"));
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empleados = yield empleado_1.default.findAll();
    res.json(empleados);
});
exports.getEmpleados = getEmpleados;
const getEmpleadosByEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empleados = yield empleado_1.default.findAll({
        where: {
            rut_empresa: id
        }
    });
    res.json(empleados);
});
exports.getEmpleadosByEmpresa = getEmpleadosByEmpresa;
const postEmmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const empleado = yield empleado_1.default.create(body);
        res.json(empleado);
    }
    catch (error) {
        if (error instanceof Error) {
            const message = error.message;
            throw new Error(message);
        }
        else {
            const message = String(error);
            throw new Error(message);
        }
    }
});
exports.postEmmpleado = postEmmpleado;
//# sourceMappingURL=empleados.js.map