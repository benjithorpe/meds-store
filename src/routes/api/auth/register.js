import prisma from '../../../lib/prisma.js';
import * as cookie from 'cookie';

export const POST = async ({ request }) => {
	const { username, password } = await request.json();

	const checkUser = await prisma.user.findFirst({
		where: {
			username: username,
			AND: {
				password: password
			}
		}
	});

	if (checkUser) {
		return {
			status: 401,
			body: {
				message: 'User already exists...'
			}
		};
	}

	const user = await prisma.user.create({
		data: {
			username: username,
			password: password
		}
	});

	// Set a unique cookie id to use
	const cookieId = user.id;
	console.log(user);
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
			message: 'Register Successfull...'
		}
	};
};
