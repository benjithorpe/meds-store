<script context="module">
	export const load = async ({ fetch, params }) => {
		const res = await fetch(`/api/topics/${params.topic_id}`);
		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					topic: data
				}
			};
		}
	};
</script>

<script>
	export let topic;
</script>

<article>
	<h1 class="mb-5 text-3xl text-gray-700">Topic: {topic.text}</h1>

	<h2 class="mb-3 text-xl text-gray-700">Entries:</h2>

	<!-- Add new entry link -->
	<a href="/topics/entry/new-entry" class="underline">Add New Entry</a>

	<!-- list all entries for this topic -->
	<ul class="grid gap-7 indent-10">
		{#each topic.entries as entry}
			<li class="border-b p-2">
				<h3 class="mb-2 font-light text-gray-500">&mdash; {entry.dateAdded}</h3>
				<p>{entry.text}</p>

				<!-- link to edit entry -->
				<a
					href="/topics/entry/edit-entry"
					class="mt-2 block font-sans text-sm text-blue-700 underline">Edit Entry</a
				>
			</li>
		{:else}
			<li>No entries for this topic yet...</li>
		{/each}
	</ul>
</article>
