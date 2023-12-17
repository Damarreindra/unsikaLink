import { GET_THREADS } from "../../actions/threadsAction"

const initialState = {
    getThreadResult: false,
    getThreadLoading: false,
    getThreadError: false,

    
}

const user = (state = initialState, action) =>{
    switch(action.type){

        case GET_THREADS:
           
            return{
                ...state,
                getThreadResult: action.payload.data,
                getThreadLoading: action.payload.loading,
                getThreadError: action.payload.errorMessage,
            }
            case 'UPDATE_COMMENTS':
                return {
                  ...state,
                  threads: state.threads.map((thread) =>
                    thread.id === action.payload.threadId
                      ? { ...thread, comments: action.payload.comments }
                      : thread
                  ),
                };
        default : 
        return state
    }
}

export default user