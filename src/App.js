import { Design } from "./components/Design";
import { Footer } from "./components/Footer";
import { Frankie } from "./components/Frankie";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Subscription } from "./components/Subscription";

function App() {
  return (
    <div>
      <Navbar />
      <Design />
      <Frankie />
      <Introduction />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
