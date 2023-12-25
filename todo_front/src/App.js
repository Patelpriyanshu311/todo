import React, {Fragment} from 'react';
import './App.css';
import Input from './components/Input';
import Delete from './components/Delete';

function App() {

  return (
    <Fragment className="container text-center">
      <Input/>
      <Delete/>
    </Fragment>
  );
}

export default App;
