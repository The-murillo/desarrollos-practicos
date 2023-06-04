// generaremos datos random

var generarId = function (length) {
  var id = "";
  var charts = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    id = charts.charAt(Math.floor(Math.random() * charts * length));
  }
  return id;
};

var getStorage = function () {
  var locStorage = JSON.parse(localStorage.getItem("to-storage"));
  if (!locStorage) {
    locStorage = {
      categoria: [
        {
          name: "Comida",
          slug: "comida",
          id: generarId(10),
        },

        {
          name: "Servicios",
          slug: "servicios",
          id: generarId(10),
        },

        {
          name: "Salidas",
          slug: "salidas",
          id: generarId(10),
        },

        {
          name: "Transporte",
          slug: "transporte",
          id: generarId(10),
        },

        {
          name: "Educacion",
          slug: "educacion",
          id: generarId(10),
        },

        {
          name: "Trabajo",
          slug: "trabajo",
          id: generarId(10),
        },
      ],
    };
  }
  return locStorage;
};
