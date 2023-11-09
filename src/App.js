import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import AllRoutes from './Routes/AllRoutes';
import Sidebar from './Components/Sidebar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { previouslyVisitedRoute } from './location';

function App() {
  const location = useLocation();

  useEffect(() => {
      const splittedArr = document.referrer.split('/');
      const previouslyVisitedRoute = `/${splittedArr[splittedArr.length - 1]}`;
      location.state = previouslyVisitedRoute;
  }, [])

  useEffect(() => {
      const splittedArr = document.referrer.split('/');
      const previouslyVisitedRoute = `/${splittedArr[splittedArr.length - 1]}`;
      location.state = previouslyVisitedRoute;
  }, [location])

  return (
    <div className="App">
      <Sidebar />
      <AllRoutes />
    </div>
  );
}

export default App;
