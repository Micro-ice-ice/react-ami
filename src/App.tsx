import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three'
import {stackHelperFactory} from 'ami.js';



function App() {

  const v = new THREE.Vector3(1, 1, 1);
  console.log(v);

  const StackHelper = stackHelperFactory(THREE);
  // const stackHelper = new StackHelper();

  return (
    <div className="App">

    </div>
  );
}

export default App;
