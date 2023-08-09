// src/socket.js
let socket: WebSocket;
let userId: string;
import { userUUID } from '../store';
import { socketStore } from '../store';

export function getSocket(): { socket: WebSocket } {
  if (!socket) {
    socket = new WebSocket('ws://localhost:8081/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socketStore.set(socket);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      if (message.type === 'initial') {
        userId = message.userId;
        userUUID.set(userId);
        console.log('Received user ID:', userId);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
      socketStore.set(null);
    };
  }

  return { socket };
}
