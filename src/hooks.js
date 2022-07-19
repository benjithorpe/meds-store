import * as cookie from 'cookie';
import prisma from './lib/prisma.js';

export const handle = async ({ event, resolve }) => {
	const cookieHeader = event.request.headers.get('cookie');
	const cookies = cookie.parse(cookieHeader || '');

	// Return if no session for user exists
	if (!cookies.session) {
		return await resolve(event);
	}

	// Find the user with the unique id (which also is the session)
	const user = await prisma.user.findUnique({
		where: {
			id: cookies.session
		}
	});

	if (user) {
		event.locals.user = { username: user.username };
	}

	return await resolve(event);
};

export const getSession = ({ locals }) => {
	// Return if user does not exists
	if (!locals.user) return {};

	return {
		user: {
			username: locals.user.username
		}
	};
};
