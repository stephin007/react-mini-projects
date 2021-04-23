import {useState} from "react"
import Menu from "./Menu"
import Categories from "./Categories";
import items from "./data"

const allCategories = ["all", ...new Set(items.map((item) => item.category))]

function App() {
    const [menuItems, setMenuItems] = useState(items)
    const[categories, setcategories] = useState(allCategories)
    const filterItems = (category) => {
        if(category === "all"){
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
  return (
    <section className="menu section">
      <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"/>
      </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/>
    </section>
  );
}

export default App;
