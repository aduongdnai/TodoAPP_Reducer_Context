import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import TodoApp from './components/TodoApp';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './components/NotFound';
import { AuthProvider } from './components/AuthContext';

//import { TodoProvider } from './components/TodoContext';

function App() {

  return (


    <ChakraProvider>
      <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<TodoApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </AuthProvider>

      </div>
    </ChakraProvider>
  )
}

export default App;
