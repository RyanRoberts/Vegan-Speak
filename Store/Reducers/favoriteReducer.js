const initState = { favoriteArgs: []}

const ADD_FAVORITE = 'ADD_FAVORITE'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

function toggleFavorite(state = initState, action){
	let nextState
	switch (action.type){
		case REMOVE_FAVORITE:
			nextState = {
				...state,
				favoriteArgs: state.favoriteArgs.filter( (item, index) => item !== action.value),
			}
			return nextState || state
		case ADD_FAVORITE:
			nextState = {
				...state,
				favoriteArgs: [...state.favoriteArgs, action.value],
			}
			return nextState || state
		default:
			return state
	}
}

export default toggleFavorite