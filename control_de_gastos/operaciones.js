//Estableceremos las variables de las operaciones.

var newOperation = {
  descrition: "",
  amount: 0,
  type: "Gasto",
  category: "",
  date: "",
  id: "",
};

var newOpForm = document.getElementById("newOp-form");
var newOpDescrition = document.getElementById("newOp-descrition");
var newAmount = document.getElementById("newOp-amount");
var newType = document.getElementById("newOp-type");
var newOpDate = document.getElementById("newOp-date");
var newCategory = document.getElementById("newOp-category");
var subminewOp = document.getElementById("submit-newOp");

//Crear operaciones a imngresar
newOpForm.addEventListener("submit", fuction(e));
e.preventDefault();

var storage = getStorage();
newOperation.descrition = newDescrition.Value;
newOperation.amount = newAmount.Value;
newOperation.type = newType.Value;
newOperation.category = newCategory.Value;
newOperation.date = newDate.Value;
newOperation.id = generarId(10);

storage.operations.push(newOperation);
localStorage.setItem("to-storage", JSON.stringify(storage));
newOpForm.reset();
window.location.href = ".index.html";

//Actualizar categorias de nuevas operaciones
var updateOperationes = function () {
  var storage = getStorage();
  for (var i = 0, a = storage.category; i < a.length; i++) {
    var category = a[i];
    var optionCategory = document.createElement("option");
    optionCategory.setAttribute("value", "" + category.name);
    var optionCategoryText = document.createTextNode("" + category.name);
    optionCategoryText.appendChild(optionCategoryText);
    newCategory.appendChild("option");
  }
};

//Iniciar las funciones

var initOperations = function () {
  getStorage();
  updateOperationes();
};

initOperations();
