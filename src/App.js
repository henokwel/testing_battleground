import logo from './logo.svg';
import './App.css';
import { ItemList } from './components/ItemList'
 





function App() {
 
 


  return (
    <div className="App">
      <header>
        <input type="text" placeholder='Hello' />
      </header>

      <main>
        <div>
          <h4> Item list</h4>
        </div>
        <ItemList />
      </main>
    </div>
  );
}

export default App;
