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

		if (res.ok) {
			window.location.href = '/topics';
			return;
		}

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
					class="block border py-2 px-4"
					placeholder="john"
					bind:value={username}
				/>
			</div>

			<div>
				<label for="" class="block text-gray-500">Password</label>
				<input
					type="password"
					name="password"
					class="block border py-2 px-4"
					placeholder="password"
					bind:value={password}
				/>
			</div>

			{#if errorMsg}
				<p class="text-sm text-red-500">{errorMsg}</p>
			{/if}

			<button type="submit" class="block w-fit rounded-md bg-gray-800 px-4 py-2 text-white">
				Login
			</button>
		</fieldset>
	</form>
</div>
