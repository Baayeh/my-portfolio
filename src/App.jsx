import { Analytics } from '@vercel/analytics/react';
import 'animate.css';
import { Outlet } from 'react-router-dom';
import './css/hamburgers.css';

function App() {
  return (
    <section>
      <Outlet />
      <Analytics />
    </section>
  );
}

export default App;
