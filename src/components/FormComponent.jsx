function FormComponent(props) {
   

  return (
      <div className="form__conteiner">
          <h1 className="titulo__form">Create a Cart</h1>
          <form action="">
            <input
            placeholder = " igresa tu nombre"
            ref = {props.inpu} 
            onChange = {props.changef} 
            type="text"/>
            <br/>
            <input
            placeholder = " igresa tu profesion"
            ref = {props.profesion} 
            onChange = {props.changef} 
            type="text"/>
            <br/>
            <input
            placeholder = " igresa unadescripcion"
            ref = {props.descripcion} 
            onChange = {props.changef} 
            type="text"/>

          </form>
        
    </div>
  );
}

export default FormComponent;
  