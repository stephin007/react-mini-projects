import {useState} from "react"
import List from "./List"
import data from "./data"


function App() {
  const [people,setPeople] = useState(data)

  return (
    <main>
      <section class="container">
        <h3>
          {people.length} Birthdays Today
        </h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>
          Clear all
        </button>
        <button onClick={() => setPeople(data)}>
          Add all
        </button>
      </section>
    </main>
  );
}

export default App;
