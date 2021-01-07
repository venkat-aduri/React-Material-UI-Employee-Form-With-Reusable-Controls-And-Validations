const initialState: any = {
    records : []
}

const reducer = (state=initialState,action: any):any=>{
    switch(action.type){
        case "ALL_EMPLOYEES":
            return{
                ...state,
                records : state.records.concat(action.value)
            }
        case "ADD_EMPLOYEE":
        case "UPDATE_EMPLOYEE":
        case "DELETE_EMPLOYEE":
            return{
                ...state,
                status : action.value
            }
    }

    return state;

};

export default reducer;