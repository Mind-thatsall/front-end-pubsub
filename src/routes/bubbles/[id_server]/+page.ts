import type { LoadEvent } from '@sveltejs/kit';

export const load = async (loadEvent: LoadEvent) => {
  const { fetch } = loadEvent;
  const { params } = loadEvent;

  const response = await fetch(
    `http://localhost:8080/api/fetch-channels?serverId=${params.id_server}`,
    {
      method: 'GET',
      mode: 'cors'
    }
  );
  const channels = await response.json();

  return { channels };
};
