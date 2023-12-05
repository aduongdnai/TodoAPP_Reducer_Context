import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import TodoApp from './components/TodoApp';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './components/NotFound';
import AuthContext from './components/AuthContext';
import { useContext } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state.isAuth);
  return (


    <ChakraProvider>
      <div className="App">

        <Router>
          <Routes>

            <Route path="/login" element={<LoginScreen />} />

            <Route path="/home" element={
              <ProtectedRoute>
                <TodoApp />
              </ProtectedRoute>} />






            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>


      </div>
    </ChakraProvider>
  )
}

export default App;
