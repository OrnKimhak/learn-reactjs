import Greeting, { Greeting1, Greeting2 } from "./components/Greeting";
import TestJSX from "./components/TestJSX";
import TestProps from "./components/TestProps";
function App() {
  return(
    <div>
    <Greeting/>
    <Greeting/>
    <Greeting/>
    <Greeting1/>
    <Greeting2/>
    <TestJSX/>
    <TestProps Description="Test"/>
    <TestProps Description="Test Data"/>
</div>
  )
}

export default App
