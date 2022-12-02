import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import styles from "./App.module.css";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [ciudades, setCiudades] = React.useState([]); //ciudades=es donde va a estar la informacion setCiudades=el seteador del estado.

  function onSearch(ciudad) {
    if (ciudades.length > 2) {
      alert("No puedes agregar mas ciudades");
    } else {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
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
              longitud: recurso.coord.lon,
            };
            setCiudades((oldCities) => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }
  }

  function handleOnClose(id) {
    setCiudades((prevCiudades) => {
      return prevCiudades.filter((ciudad) => ciudad.id !== id);
    });
  }

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.citiesContainer}>
          {ciudades.length > 0 && (
            <Card
              primary
              max={ciudades[ciudades.length - 1].max}
              min={ciudades[ciudades.length - 1].min}
              name={ciudades[ciudades.length - 1].name}
              img={ciudades[ciudades.length - 1].img}
            />
          )}
          <Cards cities={ciudades} onClose={handleOnClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
