// src/socket.js
let socket: WebSocket;
let userId: string;
import { userUUID } from '../store';

export function getSocket(): { socket: WebSocket; userId: string } {
  if (!socket) {
    socket = new WebSocket('ws://localhost:8080/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send('Hello server');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'initial') {
        userId = message.userId;
        userUUID.set(userId);
        console.log('Received user ID:', userId);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  return { socket, userId };
}
