import prisma from '../../../lib/prisma.js';
import * as cookie from 'cookie';

export const POST = async ({ request }) => {
	const { username, password } = await request.json();

	const user = await prisma.user.findFirst({
		where: {
			username: username,
			AND: {
				password: password
			}
		}
	});

	if (!user) {
		return {
			status: 401,
			body: {
				message: 'Invalid email or password.'
			}
		};
	}

	// Set a new cookie if user exists
	const cookieId = user.id;
	return {
		status: 200,
		headers: {
			'Set-Cookie': cookie.serialize('session', cookieId, {
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 1,
				sameSite: 'strict',
				path: '/'
			})
		},
		body: {
			message: 'Login Successfull...'
		}
	};
};
