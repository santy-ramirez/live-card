function FormComponent(props) {
   const style = {
    "width": "100px",
    "min-height": "100px",
    "border-radius": "180px",
   };

  return (
     <div className="result__conteiner">
        <img src="https://avatars.githubusercontent.com/u/66737901?v=4" alt="foto de perfil" style={style}/>
        <h2>Name:</h2>
         <p className="datos">{props.coun}</p>
         <h2>Profesion:</h2>
         <p className="datos">{props.profesion}</p>
         <h2 >Descripcion:</h2>
         <p className="datos">{props.descripcion}</p>
    </div>
  );
}

export default FormComponent;