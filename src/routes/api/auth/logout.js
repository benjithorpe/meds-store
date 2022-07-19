import * as cookie from 'cookie';

export const GET = async () => {
	return {
		status: 302,
		headers: {
			'Set-Cookie': cookie.serialize('session', '', {
				path: '/',
				sameSite: 'strict',
				expires: new Date(0)
			}),
			location: '/'
		}
	};
};
