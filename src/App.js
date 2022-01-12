import logo from './logo.svg';
import './App.css';
import { ItemList } from './components/ItemList'
import { useContext, useState } from 'react';
import { Context } from './context/MyContext';






function App() {
  const [currentTitle, setCurrentTitle] = useState("")

  const { dispatch } = useContext(Context)

  const handleEdit_Title = () => {
    // if current is false, toggle
    if (currentTitle.trim() === "") return

    dispatch({
      type: "add",
      payload: { id: `${Math.floor(Math.random() * 300)}`, title: currentTitle, done: false }
    })

    setCurrentTitle("")
  }



  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    console.log(value);

    // if (!value || value === title) return
    setCurrentTitle(value)
  }


  return (
    <div className="App">
      <header onSubmit={e => e.preventDefault()}>
        <input type="text" value={currentTitle} placeholder='Hello' onChange={e => handleChange(e)} />
        <input type="submit" title='Submit' onClick={handleEdit_Title} />
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
