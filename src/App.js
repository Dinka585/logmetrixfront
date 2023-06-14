import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Lang from './components/Lang';

function App() {
  const [currentForm, setCurrentForm] = useState ('login');

  const toggleform = (formName) => {
        setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Lang/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform} />
      }
    </div>
  );
}

export default App;
