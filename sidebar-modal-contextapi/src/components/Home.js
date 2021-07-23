import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show Modal</button>
    </main>
  );
};

export default Home;
