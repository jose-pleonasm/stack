
export const initialState = [
	{
		id: 'c0b88c4f-8877-4890-9f85-09fab245956d',
		title: 'Article A',
	},
	{
		id: '1a38404c-3e8a-44ea-801e-8e6fad755f16',
		title: 'Article B',
	},
];

export const articles = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
