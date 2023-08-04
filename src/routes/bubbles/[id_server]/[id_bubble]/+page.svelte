<script lang="ts">
	import { page } from '$app/stores';
	import { getSocket } from '$lib/socket';

	const bubbleId = $page.params.id_bubble;
	const serverId = $page.params.id_server;

	const socket = getSocket();
	socket.send(`Hey I'm in the server ${serverId} in the channel ${bubbleId}\n`);

	function onSubmit(e: Event) {
		e.preventDefault();
		const target = e.target as HTMLElement;
		const input = target.children[0] as HTMLInputElement;

		input.value = '';

		console.log(input);
	}
</script>

<h1>Welcome to this bubble {bubbleId} in server {serverId}</h1>

<ul>
	<li>hello</li>
	<li>hello</li>
</ul>

<form method="post" on:submit={onSubmit}>
	<input type="text" />
</form>
