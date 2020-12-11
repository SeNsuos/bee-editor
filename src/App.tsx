import React, {useState, useEffect} from 'react';
import './App.css';
import Preview from './preview/preview';
import Setting from './settingsPanel/settings'
import ToolBar from './toolBar/toolBar'

function App() {
  const defaultState = {
    bgColor: '#ffffff'
  };
  const [state, setState] = useState(defaultState)
  useEffect(() => {
    console.log(state)
  },[state])
  return (
    <div className="App">
        <ToolBar />
        <div className='con_wrapper'>
          <Preview key={state.bgColor} sendState = {state} />
          <Setting setParent={(bgColor: any) => setState({bgColor: bgColor})} />
        </div>   
    </div>
  );
}

export default App;
