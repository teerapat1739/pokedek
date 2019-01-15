
export default (state = {  }, action) => {
  if(state.selectedDekData === undefined) {
    state.selectedDekData = []
  }
    console.log(action.type);
    switch (action.type) {
      case 'UNSELECTED_DEK':
        return { ...state,  unselectedDekData: action.payload }
      case 'SELECTED_DEK':        
        let index = state.unselectedDekData.indexOf(action.payload)
        state.unselectedDekData.splice(index, 1)        
        return { ...state,  selectedDekData: [...state.selectedDekData, action.payload] }
      case 'REMOVE_DEK':
        let index2 = state.selectedDekData.indexOf(action.payload)
        state.selectedDekData.splice(index2, 1)
        return { ...state,  unselectedDekData: [...state.unselectedDekData ,action.payload] }
      default:
        return {message: 'Loading...'};
    }
  };
  