import './App.css';
import TodoApp from './components/TodoApp';

import { TodoProvider } from './components/TodoContext';

function App() {
  
  return (
    <TodoProvider>
      <div className="App">
        <TodoApp/>
      </div>
    </TodoProvider>
  );
}

export default App;
