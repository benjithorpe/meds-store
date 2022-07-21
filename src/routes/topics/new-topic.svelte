<script>
	import { session } from '$app/stores';

	let topic = '';
	let error = '';

	export const addNewTopic = async () => {
		error = '';

		const res = await fetch('/api/topics/new-topic', {
			method: 'POST',
			body: JSON.stringify({ topic, userId: $session.user.username.id })
		});
		const data = await res.json();

		if (!res.ok) {
			error = data.message;
			topic = '';
			return;
		}

		window.location.href = '/topics';
	};
</script>

<div>
	<form action="" method="POST" on:submit|preventDefault={addNewTopic}>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-5 text-gray-700">Create New Topic</legend>

			<div>
				<input
					required
					type="text"
					name="topic"
					class="block rounded-md border py-2 px-4"
					placeholder="Topic Name"
					bind:value={topic}
				/>
			</div>

			{#if error}
				<p class="text-sm italic text-red-500">{error}</p>
			{/if}

			<button
				type="submit"
				class="block w-fit rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
			>
				Add Topic
			</button>
		</fieldset>
	</form>
</div>
