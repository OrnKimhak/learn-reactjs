import type { CSSProperties } from "react";
import "./style.css"

const name = "React";
const greetingTitle = "java";

interface MyObject{
    id:number;
    name:string;
    position: string;
    salary:number;
    gender:number;

}

const myobject : MyObject = {
    name:"Kok",
    id:1,
    position:"Developer",
    salary:1000  ,  
     gender:10,
}
function TestJSX() {

    const myInternalCss:CSSProperties = {
        backgroundColor: "blue",
        color: "white",

    }
  return (
    
      <div>
        <h1>Hello react {name}</h1>
        <h1 title={greetingTitle}>Hello JavaScript </h1>

        <ul>Object Person:
            <li>ID: {myobject.id}</li>
            <li>Name: {myobject.name.toUpperCase()}</li>
            <li>Position: {myobject.position}</li>
            <li>Salary: {myobject.salary}</li>
            <li>Gender: {myobject.gender}</li>
        </ul>
        {/* inline css */}
        <h1
        style={{backgroundColor: "red", color: "white"}}
        >Hello CSS</h1>

        {/* internal css */}
        <h1 style={myInternalCss}>Hello Internal CSS</h1>

        {/* Ecternal Css */}
        <h1 id="external-css">Hello External Css</h1>
      </div>
    
  );
}
export default TestJSX;
