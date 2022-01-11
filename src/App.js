import logo from './logo.svg';
import './App.css';
import { ItemList } from './components/ItemList'
import { useReducer } from 'react';

const data = [
  {
    id: 1,
    title: "One",
    done: false
  },
  {
    id: 2,
    title: "two",
    done: false
  },
  {
    id: 3,
    title: "three",
    done: false
  }
]


const todoReducer = (state, action) => {

  switch (action.type) {
    case "add":
      console.log("add");

      break;

    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(todoReducer, data)

  return (
    <div className="App">
      <header>
        <input type="text" placeholder='Hello' />
      </header>

      <main>
        <div>
          <h4> Item list</h4>
        </div>
        <ItemList data={state} />
      </main>
    </div>
  );
}

export default App;
