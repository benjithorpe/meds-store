<script>
	import { topics } from '../../lib/store.js';
</script>

<article>
	<h1 class="text-gray-700 text-2xl mb-3">Topics:</h1>

	<!-- Add new entry link -->
	<a href="/topics/new-topic" class="underline mb-3 block">Add New Topic</a>

	<ul class="indent-10 grid gap-3">
		{#each $topics as topic (topic.id)}
			<li class="text-gray-700 list-inside list-disc">
				<a href="/topics/{topic.id}" class="hover:underline hover:text-blue-900">{topic.name}</a>
			</li>
		{:else}
			<li class="text-gray-600">No topics has been added yet.</li>
		{/each}
	</ul>
</article>
