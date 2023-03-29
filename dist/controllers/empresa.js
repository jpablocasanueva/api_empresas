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
exports.postEmpresa = exports.getEmpresas = void 0;
const empresa_1 = __importDefault(require("../models/empresa"));
const getEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresas = yield empresa_1.default.findAll();
    res.json(empresas);
});
exports.getEmpresas = getEmpresas;
const postEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const empresa = yield empresa_1.default.create(body);
        res.json(empresa);
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
exports.postEmpresa = postEmpresa;
//# sourceMappingURL=empresa.js.map