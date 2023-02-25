import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';



function App() {
  const state ='Hello';
  return (
    <div className="App">
      <Icon/>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
          fontFamily:"Averta, sans-serif",
          color:"#0D1625",
          fontWeight:600,
          fontSize:30.5
        }}

        >
           Coming Soon
        </a>
    </div>
  );
}

export default App;
