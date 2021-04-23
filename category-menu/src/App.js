import {useState} from "react"
import Menu from "./Menu"
import items from "./data"


function App() {
    const [menuItems, setMenuItems] = useState(items)
  return (
    <section className="menu section">
      <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"/>
      </div>
        <Menu menuItems={menuItems}/>
    </section>
  );
}

export default App;
