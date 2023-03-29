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
const express_1 = __importDefault(require("express"));
const empresa_1 = __importDefault(require("../routes/empresa"));
const empelado_1 = __importDefault(require("../routes/empelado"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            empresas: '/api/empresas',
            empleados: '/api/empleados'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('DB Connected');
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
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}!!!`);
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // LECTURA BODY
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.empresas, empresa_1.default);
        this.app.use(this.apiPaths.empleados, empelado_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map