import prisma from '../../../lib/prisma.js';

export const GET = async ({ locals }) => {
	const user = await prisma.user.findFirst({
		where: {
			id: locals.user.id
		},
		include: {
			topics: {
				include: {
					entries: true
				}
			}
		}
	});

	if (!user) {
		return {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
			body: {
				message: 'Could not find data for user!'
			}
		};
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: user.topics
	};
};
