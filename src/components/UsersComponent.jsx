function UsersComponent(props) {
 

  return (
     <div className="image__conteiner">
       {props.data.map(person => 
         (<img className="image" 
         src={person.picture.medium} 
         key={person.name}/>)
         )}
    </div>
  );
}

export default UsersComponent;