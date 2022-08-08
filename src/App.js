import './App.css';
import Connection from './Components/Connection';
import Messages from './Components/Messages';

function App() {
  return (
    <div className='App'>
    <div className='container'>
      <Connection/>
      <Messages/>
    </div>
    </div>
  );
}

export default App;
