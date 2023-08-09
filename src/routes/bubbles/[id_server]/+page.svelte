<script lang="ts">
	import { userUUID } from '../../../store.js';
	import type { channels } from '$lib/type.js';
	import { onMount } from 'svelte';
	export let data;
	const { channels } = data;
	const userId = $userUUID;

	async function subscribeToChannel(channels: channels[]) {
		const joinRoomData = {
			userId: userId,
			serverId: channels[0].ServerId,
			channelsId: channels.map((channel) => channel.ChannelId)
		};

		const response = await fetch(`http://localhost:8080/api/subscribe-channel`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(joinRoomData)
		});

		await response.text();
		return response.ok;
	}

	onMount(() => {
		subscribeToChannel(channels);
	});
</script>

<h1>Welcome to the Server</h1>
<p>Here's the channels you case use:</p>
<ul>
	{#each channels as channel}
		<li><a href={`${channel.ServerId}/${channel.ChannelId}`}>{channel.Name}</a></li>
	{/each}
</ul>
