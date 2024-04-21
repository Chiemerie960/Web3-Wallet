import './App.css';
// import SeedPhrase from './components/seedPhrase/SeedPhrase';
// import PrivateKey from "./components/privateKey/PrivateKey"
function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <h3>Connect your Web3 Wallet</h3>
        <div className='form-container'>
          <div className='buttons'>
            <button>PRIVATE KEY</button>
            <button className='active'>SEED PHRASE</button>
          </div>
          {/* <SeedPhrase/> */}
          {/* <PrivateKey /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
