import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('');

  function onChange(e){
    setCity(e.target.value);
  }

  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        onChange={onChange}
      />
      <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Agregar" />
    </form>
  );
}

//---------------------------------------------------------------------------------------------
// CON COMPONENTE DE CLASE

// export default class SearchBar extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       city: ''
//     }
//   }

//   onChange = e => {
//     this.setState({
//       city: e.target.value
//     });
//   }

//   render(){
//     return(
//       <form className="form-inline" onSubmit={(e) => {
//         e.preventDefault();
//         this.props.onSearch(this.state.city);
//       }}>
//         <input
//           className="form-control mr-sm-2"
//           type="text"
//           placeholder="Ciudad..."
//           onChange={this.onChange}
//         />
//         <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Agregar" />
//       </form>
//     )
//   }
// }