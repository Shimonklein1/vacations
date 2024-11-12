import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


const App: React.FC = props => {

  return (
    <div className="App">
      {/* <Login /> */}
      <Registration />
    </div>
  );
}

export default App;
