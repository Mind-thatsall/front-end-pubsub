<script lang="ts">
	import { userUUID } from '../store.js';

	export let data;
	const { servers } = data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{$userUUID}</p>

{#each servers as server}
	<a href={`bubbles/${server.ServerId}`}>Go to server {server.Name}</a>
{/each}
