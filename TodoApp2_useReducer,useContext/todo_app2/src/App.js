import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import TodoApp from './components/TodoApp';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './components/NotFound';
import AuthContext, { ACTIONS } from './components/AuthContext';
import { useContext, useEffect } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { TodoProvider } from './components/TodoContext';
function App() {
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      if (parsedUserData.user_id) {
        console.log("cc");
        dispatch({ type: ACTIONS.LOGIN, payload: { data: parsedUserData.user_id } });
      }
      // Dispatch an action to set the user data in your context

    }
  }, [dispatch])
  useEffect(() => {
    console.log(state);
    localStorage.setItem('userData', JSON.stringify(state));
  }, [state])
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <TodoProvider>
                  <TodoApp />
                </TodoProvider>

              </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  )
}

export default App;
