function FormComponent(props) {

   const image = "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800051/61010844-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-ilustraci%C3%B3n-vectorial-persona-glifo.jpg?ver=6" ;
   const style = {
    "width": "100px",
    "minHeight": "100px",
    "borderRadius": "180px",
   };

  return (
     <div className="result__conteiner">
        <img src={image} style={style}/>
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