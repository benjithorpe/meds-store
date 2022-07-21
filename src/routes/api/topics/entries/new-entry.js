import prisma from '../../../../lib/prisma.js';

export const POST = async ({ request }) => {
	const { entry, topicId } = await request.json();

	const newEntry = await prisma.entry.create({
		data: {
			text: entry,
			topicId: topicId
		}
	});

	if (!newEntry) {
		return {
			status: 404,
			body: {
				message: `Could not add an entry for the topic`
			}
		};
	}

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			message: 'Created Entry successfully...'
		}
	};
};
