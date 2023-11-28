import { ACTIONS } from "."
 const todoReducer=(state, action)=> {
    const {type, payload } = action
    switch(type){
        case ACTIONS.ADD_TASK:
            return{
                ...state,
                tasks:[...state.tasks,{id:state.tasks.length+1, title: payload.newTask, completed:false}]
            }
        case ACTIONS.TOGGLE_TASK:
            
            return{
                ...state,
                tasks: state.tasks.map(task=>{
                    return task.id === payload.id ? {...task, completed:!task.completed} : task
                })
            }
        case ACTIONS.FILTER_TASK:
            return{
                ...state,
                filter: payload.filter
            }
        default:
            return state;
    }
    
}
export const initialState={
    tasks: [
        { id:1, title: 'Read Book', completed: false},
        { id:2, title: 'Do Exercise', completed: false},
        { id:3, title: 'Do Homework', completed: false}],
    filter:''
}

export default todoReducer;