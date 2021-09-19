"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketService = void 0;
const socket_io_1 = __importDefault(require("socket.io"));
class SocketService {
    initWsService(server) {
        if (!this.io) {
            this.io = socket_io_1.default(server);
            this.io.on('connection', (socket) => {
                console.log('Nueva conexión');
            });
        }
        return this.io;
    }
    getServer() {
        return this.io;
    }
}
exports.socketService = new SocketService();
