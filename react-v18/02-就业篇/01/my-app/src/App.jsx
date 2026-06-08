import ChildCom from "./components/ChildCom"

function App() {
  return (
    <div className="App">
      Hello React
      <ChildCom name="xiejie" age={18}/>
      <ChildCom name="xiejie" age="18"/>
    </div>
  );
}

export default App;