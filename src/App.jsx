import Navbar from "./components/Navbar/Navbar";
import Cotizador from "./components/Cotizador/Cotizador";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Cotizador />
    </div>
  );
}
