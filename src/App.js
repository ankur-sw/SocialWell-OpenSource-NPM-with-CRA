import "./App.css";

//---------------------------------------------------
// Custom Components coming from codatrix-react-sw
//---------------------------------------------------
import ButtonComponent from "./components/Button";
import InputComponent from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent />
        <br />
        <InputComponent />
      </header>
    </div>
  );
}

export default App;
