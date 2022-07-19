import prisma from '../../../lib/prisma.js';

export const GET = async ({ params }) => {
	const entries = await prisma.topic.findFirst({
		where: {
			id: params.topic_id
		},
		include: {
			entries: true
		}
	});

	if (!entries) {
		return {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
			body: {
				message: 'Could not find entries for this topic!'
			}
		};
	}

	return {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
		body: entries
	};
};
