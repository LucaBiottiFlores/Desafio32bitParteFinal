/* Dentro del store vamos a tener toda la data que se va usar en el proyecto, 
  en este caso es un objeto state que contiene un valor de "busqueda", que será ingresado por el usuario
  en la vista de "Busquedas", además, dentro del state, tenemos un arreglo de juegos, y cada juego tiene
  datos específicos que los diferencian entre sí.

  Finalmente el store cuenta con un arreglo de ventas[], servirá para utilizarlo en conjunto con
  getters, mutaciones y acciones, para poder registrar y realizar ventas de los productos (videojuegos).
  Esta lógica permite además hacer modificaciones al stock de un producto y todo lo asociado a lo que ocurre
  cuando se realiza una  venta.

*/

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Se crea una funcion para asignar un delay diferente a las promesas

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
// El mismisimo store //
const store = new Vuex.Store({
  state: {
    search: "",
    games: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 1,
        precio: 30000,
        color: "red",
        destacado: true,
        url: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png'
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 0,
        precio: 25000,
        color: "blue",
        destacado: false,
        url: 'https://i.blogs.es/5fe30d/fifa-21-intros_1/1366_2000.jpeg'
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 5,
        precio: 15000,
        color: "green",
        destacado: true,
        url: 'https://i.blogs.es/fe973b/gearsofwar401/1366_2000.jpg'
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 5,
        precio: 35000,
        color: "yellow",
        destacado: false,
        url: 'https://i.ytimg.com/vi/7-6UBoyylNU/maxresdefault.jpg'
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 5,
        precio: 10000,
        color: "blue",
        destacado: false,
        url: 'https://depor.com/resizer/dRAIfiPQ387ThVu2opAvI_uvV-g=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HI653K7WA5EDBIYTNNNCKR7WIA.jpg'
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 5,
        precio: 20000,
        color: "red",
        destacado: true,
        url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/extras/FH4_Deluxe_TitledHero_HD_1920x1080.png?t=1622068013'
      },
    ],
    sales: [],
  },

 ////GETTERS////

  getters: {
    stockTotal(state) {
      return state.games.reduce((accumulator, game) => {
        accumulator = accumulator + game.stock;

        return accumulator;
      }, 0);
    },
    gamesBySearch(state) {
      /* El usuario ingresará su búsqueda en un input, entonces:
        state.busqueda = valor que ingresa el usuario.
        si este valor está en blanco, devolver arreglo vacío.

        Si no, retornar un juego filtrado del arreglo del state,
        el juego será devuelto en minusculas y con el booleando del includes
        true: lo ingresado por el usuario existe en el arreglo.  ==> esto significa que es igual a juego.nombre.toLowerCase
        false: lo ingresado por el usuario no existe en el arreglo.  ==> significa que lo ingresado es diferente del nombre que tiene el juego en el arreglo, es decir diferente de juego.nombre.toLowerCase
      */
      if (state.search === "") {
        return [];
      } else {
        return state.games.filter((game) =>
          game.nombre.toLowerCase().includes(state.search.toLowerCase())
        );
      }
    },
    stockedGames(state) {
      // Filtra juegos según si tienen o no stock, por eso juego.stock > 0  //
      return state.games.filter((game) => game.stock > 0);
    },
    totalStockedGames(state) {
      // Filtra un solo número que corresponde a todos los juegos con stock //
      return state.games.filter((game) => game.stock > 0).length;
    },
    // Obtiene con un 'reduce' del arreglo "ventas", el monto total de las ventas registradas //
    totalSalesAmount(state) {
      return state.sales.reduce((accumulator, sale) => {
        accumulator += sale.precio;
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    // Establece que 'state.search' tome el valor ingresado por el usuario.
    SET_SEARCH(state, newSearch) {
      state.search = newSearch;
    },
    // Realiza la resta de stock de los juegos usando el operador -=
    SUB_STOCK(state, gameIndex) {
      state.games[gameIndex].stock -= 1;
    },
    // Realiza la suma de stock de los juegos usando el operador +=
    ADD_STOCK(state, gameIndex) {
      state.games[gameIndex].stock += 1;
    },
    // Realiza un push al arreglo ventas del store, dejando registro de la venta
    ADD_SALE(state, sale) {
      state.sales.push(sale);
    },
  },
  actions: {
    /* 
     Desde el componente searchs.vue, se emite un dispatch asociado a un input en el que se ingresa
     la búsqueda del usuario.
     Este dispatch desata la acción "setsearch" en esta define que:
     si newsearch es una string, entonces se le realiza un commit a "SET_SEARCH",
     mutación que recive el valor de la string "newsearch", y se lo asigna a state.search,
     primer valor disponible en nuestra store.
    */
    setSearch(context, newSearch) {
      if (typeof newSearch === "string") {
        context.commit("SET_SEARCH", newSearch);
      } else {
        console.warn(
          `newSearch debiese de ser de tipo string y recibí un tipo ${typeof newSearch}`
        );
      }
    },
    /*
    En la primera promesa al generarse la venta de un juego, procesa de forma asincrona
    un dispatch para procesar la venta y otro para registrarla. 
    ----------
    El procesamiento de la venta
    entonces ocurre con la siguiente promesa, que establece que, con un delay de 2 segundos,
    se busque el indice del juego a vender para verificar que el código sea igual al de uno
    de los juegos de la store. Si esto es asi, se establece la condicion de que si el stock es > 0,
    entonces se debe restar el stock, realizando un commit a la mutación "SUB_STOCK".
    -------
    En la tercera promesa, se genera una constante que almacenará datos del juego vendido,
    para luego realizar un commit de dicha información a "ADD_SALE", mutación que
    se hace cargo de pushear al arreglo de ventas esta información, dejando registro
    de la venta realizada.
    */
    async sellGame(context, game) {
      await context.dispatch("processSale", game);
      await context.dispatch("registerSale", game);
    },
    async processSale(context, gameToSale) {
      await delay(2000);
      const gameIndex = context.state.games.findIndex(
        (game) => game.codigo === gameToSale.codigo
      );
      if (context.state.games[gameIndex].stock > 0) {
        context.commit("SUB_STOCK", gameIndex);
      }
    },
    async registerSale(context, game) {
      await delay(1000);
      // eslint-disable-next-line no-unused-vars
      const { stock, ...gameData } = game;
      context.commit("ADD_SALE", gameData);
    },
  },
});

export default store;