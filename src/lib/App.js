import { useState } from "react";

import "../css/styles.css";
import Navbar from "./components/Navbar";
import HiddenNav from "./components/HiddenNav";
import Body from "./components/Body";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {!navOpen ? <Body /> : <HiddenNav />}
    </main>
  );
}

export default App;
