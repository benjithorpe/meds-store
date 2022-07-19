import prisma from '../../../lib/prisma.js';

export const GET = async () => {
	console.log('inside topics');

	return {
		status: 200,
		body: ['a', 'v']
	};
};
