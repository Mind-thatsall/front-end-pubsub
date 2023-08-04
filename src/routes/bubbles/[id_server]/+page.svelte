<script lang="ts">
	export let data;
	const { channels } = data;
</script>

<h1>Welcome to the Server</h1>
<p>Here's the channels you case use:</p>
<ul>
	{#each channels as channel}
		<li><a href={`${channel.ServerId}/${channel.ChannelId}`}>{channel.Name}</a></li>
	{/each}
</ul>
