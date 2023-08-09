<script lang="ts">
	import { page } from '$app/stores';
	import { userUUID } from '../../../../store';
	import { socketStore } from '../../../../store';
	import type { message } from '$lib/type';
	import { onMount } from 'svelte';

	const bubbleId = $page.params.id_bubble;
	const serverId = $page.params.id_server;
	const userSocket = $socketStore;
	const userId = $userUUID;
	let messages: message[] = [];

	async function onSubmit(e: Event) {
		e.preventDefault();
		const target = e.target as HTMLElement;
		const input = target.children[0] as HTMLInputElement;

		const messageData = {
			type: 'message',
			channelId: bubbleId,
			serverId: serverId,
			content: input.value,
			senderId: userId
		};

		const response = await fetch(`http://localhost:8080/api/post-messages`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(messageData)
		});

		input.value = '';

		await response.text();
		return response.ok;
	}

	onMount(() => {
		if (userSocket) {
			userSocket.onmessage = (event) => {
				const message = JSON.parse(event.data);
				messages = [...messages, message];
				console.log(message, messages);
			};
		}
	});
</script>

<h1>Welcome to this bubble {bubbleId} in server {serverId}</h1>

<ul>
	Messages:

	{#each messages as message}
		<li>{message.Content}</li>
	{/each}
</ul>

<form method="post" on:submit={onSubmit}>
	<input type="text" />
</form>
