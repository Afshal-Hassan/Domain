import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          fontFamily:"Averta, sans-serif"
        }}>
          NexaLab
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
          fontFamily:"Averta, sans-serif"
        }}
        >
           Coming Soon
        </a>
      </header>
    </div>
  );
}

export default App;
