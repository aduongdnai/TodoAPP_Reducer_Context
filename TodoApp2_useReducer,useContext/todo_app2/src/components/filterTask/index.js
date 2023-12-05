import React,{useContext} from 'react';
import TodoContext,{ACTIONS} from '../TodoContext';
import { Input, Center } from "@chakra-ui/react";
const FilterTask = () => {
  const {state, dispatch}=useContext(TodoContext)
    const filter=state.filter;
    const setFilter=(filter)=>{
      dispatch({type:ACTIONS.FILTER_TASK, payload:{ filter }})
    }
  return (
    <Center>
      <Input
      type="text"
      placeholder="Filter tasks by title"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      w="20%"
    />
    </Center>
   
  );
};

export default FilterTask;