import "./App.css";
import { Header } from "./components/header";
import { General } from "./components/general";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <General></General>
      <Footer></Footer>
    </div>
  );
}

export default App;
