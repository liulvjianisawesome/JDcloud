function reducer(state={
  shuttersState: [1, 0, 0, 0]
}, action) {
  switch (action.type) {
  	case 'change':
  	  return {
  	  	shuttersState: state.shuttersState.map((val, index)=>{
  	  	  if (index === action.payload) {
  	  	  	return 1
  	  	  } else {
  	  	  	return 0
  	  	  }
  	  	})
  	  }
  	default:
  	  return state
  }
}

export default reducer