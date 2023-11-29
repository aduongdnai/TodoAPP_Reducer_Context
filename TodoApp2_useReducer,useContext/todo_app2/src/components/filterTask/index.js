import React,{useContext} from 'react';
import TodoContext,{ACTIONS} from '../TodoContext';
const FilterTask = () => {
  const {state, dispatch}=useContext(TodoContext)
    const filter=state.filter;
    const setFilter=(filter)=>{
      dispatch({type:ACTIONS.FILTER_TASK, payload:{ filter }})
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Filter tasks by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterTask;