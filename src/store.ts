import { writable } from 'svelte/store';

export const userUUID = writable('');
export const socketStore = writable<WebSocket | null>(null);
