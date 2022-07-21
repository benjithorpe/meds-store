<script context="module">
	export const load = async ({ session, fetch }) => {
		// Redirect to login page, if user is not in the session
		if (!session.user) {
			return {
				status: 302,
				redirect: '/auth/login'
			};
		}

		const res = await fetch('/api/topics');
		const topics = await res.json();

		if (res.ok) {
			return {
				props: {
					topics
				}
			};
		}
	};
</script>

<script>
	export let topics;
</script>

<article>
	<h1 class="mb-3 text-2xl text-gray-700">Topics:</h1>

	<!-- Add new entry link -->
	<a href="/topics/new-topic" class="mb-5 block text-blue-800 underline" sveltekit:prefetch>
		Add New Topic
	</a>

	<ul class="grid gap-3 indent-10">
		{#each topics as topic (topic.id)}
			<li class="list-inside list-disc text-gray-700">
				<a href="/topics/{topic.id}" class="hover:text-blue-900 hover:underline" sveltekit:prefetch>
					{topic.text}
				</a>
			</li>
		{:else}
			<li class="text-gray-600">No topics has been added yet.</li>
		{/each}
	</ul>
</article>
