import type { LoadEvent } from '@sveltejs/kit';

export const load = async (loadEvent: LoadEvent) => {
  const { fetch } = loadEvent;

  const response = await fetch('http://localhost:8080/api/fetch-servers');
  const servers = await response.json();

  return { servers };
};
