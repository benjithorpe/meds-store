import prisma from '../../../lib/prisma.js';

export const POST = async ({ request }) => {
	const { topic, userId } = await request.json();

	// Search if topic already exists
	const topicExists = await prisma.topic.findFirst({
		where: {
			text: topic
		}
	});

	if (topicExists) {
		return {
			status: 404,
			body: {
				message: 'Topic already exists...'
			}
		};
	}

	// If topic does not exists, create new one.
	await prisma.topic.create({
		data: {
			userId: userId,
			text: topic
		}
	});

	return {
		status: 201,
		header: {
			'Content-Type': 'application/json'
		},
		body: {
			message: 'Created...'
		}
	};
};
