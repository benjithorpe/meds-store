<script>
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let errorMsg = '';

	const register = async () => {
		errorMsg = '';

		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});
		const data = await res.json();

		if (!res.ok) {
			errorMsg = data.message;
			// Reset the form inputs
			username = '';
			password = '';
			return;
		}

		goto('/topics');
	};
</script>

<div>
	<form action="" method="POST" on:submit|preventDefault={register}>
		<fieldset class="flex flex-col gap-5">
			<legend class="text-2xl text-gray-700 mb-3">Register</legend>
			<div>
				<label for="" class="block">Username</label>
				<input
					type="text"
					name="username"
					bind:value={username}
					class="block py-2 px-4 border"
					placeholder="Username"
				/>
			</div>

			<div>
				<label for="" class="block">Password</label>
				<input
					type="password"
					name="password"
					bind:value={password}
					class="block py-2 px-4 border"
					placeholder="Password"
				/>
			</div>

			{#if errorMsg}
				<p class="text-sm text-red-500">{errorMsg}</p>
			{/if}

			<button type="submit" class="bg-gray-800 rounded-md text-white w-fit px-4 py-2 block"
				>Register</button
			>
		</fieldset>
	</form>
</div>
