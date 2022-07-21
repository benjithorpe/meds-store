<script>
	let entry = '';

	const addNewEntry = async () => {};
</script>

<div>
	<form action="" method="POST" on:submit|preventDefault={addNewEntry}>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-5 text-gray-700">Create New Topic</legend>

			<!-- textarea for current entry -->
			<textarea
				name="entry"
				bind:value={entry}
				placeholder="Write some messages about your entry"
				class="block min-h-[100px] rounded-md border py-2 px-4"
				required
			/>

			<button
				type="submit"
				class="block w-fit rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
			>
				Add Topic
			</button>
		</fieldset>
	</form>
</div>
