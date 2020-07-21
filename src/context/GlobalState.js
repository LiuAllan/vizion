import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	snackbarOpen: false
}

// Create my store
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions here that will dispatch to reducers
	const setSnackbarOpen = () => {
		dispatch({
			type: 'SET_SNACKBAR_OPEN'
		});
	}

	const setSnackbarClose = () => {
		dispatch({
			type: 'SET_SNACKBAR_CLOSE'
		});
	}

	return(
		<GlobalContext.Provider value={{
			...state,
			setSnackbarOpen,
			setSnackbarClose,
		}}
		>
			{ children }
		</GlobalContext.Provider>
	);
}