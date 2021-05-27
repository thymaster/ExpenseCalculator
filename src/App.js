import './App.css';
import Balance from './Components/Balance';
import { GlobalProvider } from './Components/Context/GlobalProvider';
import Header from './Components/Header';

function App() {
  return 
  <GlobalProvider>
  <Header />
  <Balance />
  </GlobalProvider>
}

export default App;
