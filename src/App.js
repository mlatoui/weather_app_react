import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <main>
          <Header />
          <Body />
        </main>
      </div>
    </AppContextProvider>
  );
}

export default App;
