import { Home } from "./pages/Home"
import './css/hamburgers.css'
import 'animate.css';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <section>
      <Outlet />
    </section>
  )
}

export default App
