import { getServers } from 'dns';
import socketIo from 'socket.io';


class SocketService {
    io: any;
    initWsService(server: any) {
        
        if (!this.io){
            this.io = socketIo(server);
            this.io.on('connection', (socket: any) => {
                console.log('Nueva conexión');
            })
        }
        return this.io;
    }

    getServer() {
        return this.io;
    }
}

export const socketService = new SocketService();

