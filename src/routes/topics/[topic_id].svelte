<script context="module">
	export const load = async ({ params }) => {
		const topic = params.topic_id;

		return {
			props: {
				topic
			}
		};
	};
</script>

<script>
	import { topics } from '../../lib/store.js';
	export let topic;

	// The 2 is hardcoded for now, we will use a database later for more dynamic content
	let topicToDisplay = $topics.find((item) => item.id === 1);
</script>

<article>
	<h1 class="text-gray-700 text-3xl mb-5">Topic: {topic} &mdash; {topicToDisplay.name}</h1>

	<h2 class="text-gray-700 text-xl mb-3">Entries:</h2>

	<!-- Add new entry link -->
	<a href="/topics/entry/new-entry" class="underline">Add New Entry</a>

	<!-- list all entries for this topic -->
	<ul class="indent-10 grid gap-7">
		{#each topicToDisplay.entries as entry}
			<li class="border-b p-2">
				<h3 class="text-gray-500 font-light mb-2">&mdash; {entry.dateAdded}</h3>
				<p>{entry.text}</p>

				<!-- link to edit entry -->
				<a
					href="/topics/entry/edit-entry"
					class="underline mt-2 block text-sm text-blue-700 font-sans">Edit Entry</a
				>
			</li>
		{:else}
			<li>No entries for this topic yet...</li>
		{/each}
	</ul>
</article>
