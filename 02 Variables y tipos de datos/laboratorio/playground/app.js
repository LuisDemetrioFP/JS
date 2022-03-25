
//Objeto Hoteles

var hoteles = {
    Balmoral: {
      name: "Balmoral",
      location: "Benalmadena",
      description: "Maravilloso hotel en Benalmadena, muy cerca del paseo marítimo y de los chiringuitos",
      img:
      "https://cdn.quierohotel.com/cdn-cgi/image/quality=85,format=auto,onerror=redirect/hotel-medplaya-balmoral-PF1864_2.jpg"
    },
    Onlyyou: {
      name: "Only you",
      location: "Malaga",
      description: "Ubicado en uno de los edificios más emblemáticos del centro de la ciudad, La Equitativa, frente al puerto y justo al comienzo de la popular calle Marqués de Larios",
      img:
        "https://v7n2u8v7.rocketcdn.me/wp-content/uploads/2022/01/OnlyYouL1.jpg",
    },
    Posada: {
      name: "vincci Seleccion Posada del patio",
      location: "Malaga",
      description: "Descubre por qué tantos viajeros ven Vincci Seleccion Posada del Patio como el hotel ideal cuando visitan Málaga.",
      img:
      "https://images.suntip.nl/378479/AL/378479_2.jpg",
    },
  };
  
  //Input/cuestionario para usuario sobre el hotel a elejir.

  var selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Balmoral, Onlyyou o Posada",
  );

//programa

  document.getElementById("name-hotel").innerHTML =
    "Hotel " + hoteles[selectedHotel].name;
  
  document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hoteles[selectedHotel].location;

  document.getElementById("Description-hotel").innerHTML =
    hoteles[selectedHotel].description;
  
  document.getElementById("img-hotel").src = hoteles[selectedHotel].img;


//Variables estrellas

  var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };
  
//puntuacion

  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

  document.getElementById("rating").innerHTML = stars[rating];

//Cuestionario sobre anonimato.

  var anonymous = confirm("¿Quiere que la reseña sea anónima?");

  document.getElementById("anonymous").checked = anonymous;

//Para checkear en consola el boolenao.

console.log(anonymous)