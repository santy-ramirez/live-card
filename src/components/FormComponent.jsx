function FormComponent(props) {
   

  return (
      <div className="form__conteiner">
          <h1 className="titulo__form">Create a Cart</h1>
          <form action="">
            <input
            placeholder = " Igresa tu nombre"
            ref = {props.inpu} 
            onChange = {props.changef} 
            type="text"/>
            <br/>
            <input
            placeholder = " Igresa tu profesion"
            ref = {props.profesion} 
            onChange = {props.changef} 
            type="text"/>
            <br/>
            <input
            placeholder = " Igresa unadescripcion"
            ref = {props.descripcion} 
            onChange = {props.changef} 
            type="text"/>

          </form>
        
    </div>
  );
}

export default FormComponent;
  