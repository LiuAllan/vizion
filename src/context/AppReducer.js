export default (state, action) => {
	switch(action.type) {
		case 'SET_SNACKBAR_OPEN':
			return { ...state, snackbarOpen: true }

		case 'SET_SNACKBAR_CLOSE':
			return { ...state, snackbarOpen: false }
		default:
			return state;
	}
}