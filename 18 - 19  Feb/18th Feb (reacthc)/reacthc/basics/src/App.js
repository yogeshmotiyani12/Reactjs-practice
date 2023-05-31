import {useState} from 'react'

function SuperHeros(){
  const [hero, setHero] = useState(["Superman", "Spiderman", "Ironman"])
  const [name, setName] = useState(() => "antman")

  const onAddName = () => {
    setHero([...hero, name])
    setName("")
  }
  return(
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
      type="text"
      value={name}
          onChange={(e) => setName(e.target.value)}
      />
      <button
      onClick={onAddName}
      >Add value</button>
    </div>
  )
}


function Counter(){
  let [count, setCount] = useState(100)

  function oneUp(){
     setCount(count + 1)
  }

  return(
    <div>
      <button
      onClick={oneUp}
      >Count : {count}</button>
      <SuperHeros/>
    </div>
  )
}

function App() {
  

  return (
    <>
    <h1>Hello to react</h1>
    <Counter />
    
    </>
  );
}

export default App;
