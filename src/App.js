import logo from "./logo.svg";
import "./App.css";
import UseRef from "./UseRef";
import UseCallback from "./UseCallback";
import UseMemo from "./UseMemo";
import Parenet from "./Useimperativehandle/Parenet";

function App() {
  return (
    <div className="App">
      {/* <UseRef /> */}
        <Parenet/>
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
    </div>
  );
}

export default App;
