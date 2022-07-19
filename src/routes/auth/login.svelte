<script context="module">
	export const load = async ({ session }) => {
		// If user is in the session, redirect to menu page
		if (session.user) {
			return {
				status: 302,
				redirect: '/topics'
			};
		}
	};
</script>

<script>
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let errorMsg = '';

	const login = async () => {
		errorMsg = '';
		const res = await fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});
		const data = await res.json();

		if (res.ok) goto('/topics');

		errorMsg = data.message;
		// reset form element
		username = '';
		password = '';
	};
</script>

<div>
	<form action="" method="POST" on:submit|preventDefault={login}>
		<fieldset class="flex flex-col gap-5">
			<legend class="mb-3 text-3xl text-gray-700">Login</legend>
			<div>
				<label for="" class="block text-gray-500">Username</label>
				<input
					type="text"
					name="username"
					class="block py-2 px-4 border"
					placeholder="john"
					bind:value={username}
				/>
			</div>

			<div>
				<label for="" class="block text-gray-500">Password</label>
				<input
					type="password"
					name="password"
					class="block py-2 px-4 border"
					placeholder="password"
					bind:value={password}
				/>
			</div>

			{#if errorMsg}
				<p class="text-sm text-red-500">{errorMsg}</p>
			{/if}

			<button type="submit" class="bg-gray-800 rounded-md block w-fit px-4 py-2 text-white">
				Login
			</button>
		</fieldset>
	</form>
</div>
