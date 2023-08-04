<script lang="ts">
	import { getSocket } from '$lib/socket';
	import { onMount } from 'svelte';

	onMount(() => {
		const socket = getSocket();
	});
</script>

<slot />
