<script>
	import { page } from '$app/stores';
	let entry = '';

	const addNewEntry = async () => {
		const topicId = $page.url.search.split('=')[1];

		const res = await fetch('/api/topics/entries/new-entry', {
			method: 'POST',
			body: JSON.stringify({ entry, topicId })
		});
		// const data = await res.json();

		if (res.ok) {
			window.location.href = `/topics/${topicId}`;
		}
	};
</script>

<div>
	<form action="" method="POST" on:submit|preventDefault={addNewEntry}>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-5 text-gray-700">Create New Entry</legend>

			<!-- textarea for new entry -->
			<textarea
				name="entry"
				bind:value={entry}
				placeholder="Write some messages about your entry"
				class="block min-h-[100px] rounded-md border p-2"
				required
			/>

			<button
				type="submit"
				class="block w-fit rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
			>
				Add Entry
			</button>
		</fieldset>
	</form>
</div>
