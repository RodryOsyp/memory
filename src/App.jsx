import logo from './logo.svg';
import './App.css';
import Status from './Components/StatusBar/Status';
import Upload from './Components/Upload/Upload';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Status/>
      <Upload/>
      </div>
    </div>
  );
}

export default App;
