import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from './Components/Button';

function App() {
  const addIcon = <FontAwesomeIcon icon={faPlus} />;

  return <Button size={{ width: '4em', height: '4em' }} color="green" round icon={addIcon} />;
}

export default App;
