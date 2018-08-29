const initState = { favoriteArgs: [] }

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

function toggleFavorite(state = initState, action){
	let nextState
	switch (action.type){
		case 'TOGGLE_FAVORITE':
			const argIndex = state.favoriteArgs.findIndex(item => item === action.value)
			if(argIndex !== -1){
				nextState = {
					...state,
					favoriteArgs: state.favoriteArgs.filter( (item, index) => index !== argIndex)
				}
			}
			else{
				nextState = {
					...state,
					favoriteArgs: [...state.favoriteArgs, action.value]
				}
			}
			return nextState || state
		default:
			return state
	}
}

export default toggleFavorite