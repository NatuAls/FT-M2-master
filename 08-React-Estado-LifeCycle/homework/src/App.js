import React, { useState }  from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import './App.css';

// CON COMPONENTE DE FUNCION

export default function App() {

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}

//--------------------------------------------------------------------------------
// CON COMPONENTE DE CLASE

// export default class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       cities: [],
//     }
//     this.onSearch = this.onSearch.bind(this);
//     this.onClose = this.onClose.bind(this);
//   }

//   onSearch(ciudad) {
//     const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
//       .then(r => r.json())
//       .then((recurso) => {
//         if(recurso.main !== undefined){
//           const ciudad = {
//             min: Math.round(recurso.main.temp_min),
//             max: Math.round(recurso.main.temp_max),
//             img: recurso.weather[0].icon,
//             id: recurso.id,
//             wind: recurso.wind.speed,
//             temp: recurso.main.temp,
//             name: recurso.name,
//             weather: recurso.weather[0].main,
//             clouds: recurso.clouds.all,
//             latitud: recurso.coord.lat,
//             longitud: recurso.coord.lon
//           };
//           this.setState({
//             cities: [...this.state.cities, ciudad]
//           });
//         } else {
//           alert("Ciudad no encontrada");
//         }
//       });
//   }

//   onClose(id){
//     this.setState({
//       cities: this.state.cities.filter(c => c.id != id)
//     });
//   }
  
//   render(){
//     return (
//       <div className="App">
//         { /* Tu código acá: */ }
//         <Nav onSearch={this.onSearch}/>
//         <Cards cities={this.state.cities} onClose={this.onClose}/>
//       </div>
//     );
//   }
// }