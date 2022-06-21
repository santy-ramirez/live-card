import { useState,useEffect,useRef} from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import ResultComponent from "./components/ResultComponent";
import UsersComponent from "./components/UsersComponent";




function App() {
    const [count, setCount] = useState("");
    const [profesion, setProfesion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dataUser, getdataUser] = useState([]);

    const input = useRef(null);
    const inputProfesion = useRef(null);
    const inputDescripcion = useRef(null);


useEffect(() => {

    fetch("https://randomuser.me/api/?results=6")
    .then((response) => response.json())
    .then((data) => getdataUser(data.results));

},[]);


const handleChange = () => {
      setCount(input.current.value);
      setProfesion(inputProfesion.current.value);
      setDescripcion(inputDescripcion.current.value);
    };


  return (
    <div>

      <div className="App">
        
          <FormComponent 
          descripcion = {inputDescripcion} 
          profesion ={inputProfesion} 
          inpu={input} 
          changef={handleChange}> 
          </FormComponent>

          <ResultComponent 
          profesion = {profesion} 
          coun={count} 
          descripcion = {descripcion}>
          </ResultComponent>
        </div>

        <div>
        <UsersComponent data={dataUser}></UsersComponent>
        </div>
        <hr/>
        <a href="">@santy ramirez</a>
      </div>
     
  );
}

export default App;
  