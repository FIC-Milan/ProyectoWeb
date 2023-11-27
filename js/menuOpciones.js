
// Menu Opciones


import { insertaEnDOMContenidoInicial, suprimeDelDOMContenidoInicial } from "./contenidoPaginaInicial.js";
import { insertaEnDOMListaDentistas, suprimeDelDOMListaDentistas } from "./listaDentistas.js";
import { suprimeDelDOMDatosDentista } from "./datosDentista.js";
import { insertaEnDOMListaTratamientos, suprimeDelDOMListaTratamientos } from "./listaTratamientos.js";

export { insertaEnDOMOpcionesMenu, actualizaVistaActual };


let vistaActual = "contenidoInicial";

// Funciones para la gestión del DOM

function insertaEnDOMOpcionesMenu() {
  insertaContenedorOpcionesMenu();
  insertaOpcionesMenu();

  const menuNode = document.getElementById("opcionesMenu");
  menuNode.addEventListener("click", (e) => respuestaPulsarEnMenu(e));
}

// Funciones auxiliares de gestion del DOM

function insertaContenedorOpcionesMenu() {
  const opcionesMenuNode = document.createElement("ul");
  opcionesMenuNode.id = "opcionesMenu";
  opcionesMenuNode.classList = "opcionesMenu";
  const menuNode = document.getElementById("menu");
  menuNode.appendChild(opcionesMenuNode);
}

function insertaOpcionesMenu() {
  const opcionesHTML =
    '<li data-vista="contenidoInicial" class="itemOpcionesMenu">Inicio</li>' +
    '<li data-vista="listaDentistas" class="itemOpcionesMenu">Dentistas</li>' +
    '<li data-vista="listaTratamientos" class="itemOpcionesMenu">Tratamientos</li>';

  const opcionesMenuNode = document.getElementById("opcionesMenu");
  opcionesMenuNode.innerHTML = opcionesHTML;
}

// Función de respuesta al evento de Pulsar en las opciones del menú

function respuestaPulsarEnMenu(e) {
  const vistaOpcionPulsada = e.target.dataset.vista;

  if (vistaActual == vistaOpcionPulsada) return;

  eliminaDelDOMVistaActual();
  actualizaVistaActual(vistaOpcionPulsada);
  switch (vistaActual) {
    case "contenidoInicial":
      insertaEnDOMContenidoInicial();
      break;
    case "listaDentistas":
      insertaEnDOMListaDentistas();
      break;
    case "listaTratamientos":
      insertaEnDOMListaTratamientos();
      break;
  }
}

// Funcion auxiliar para gestionar el evento

function eliminaDelDOMVistaActual() {
  switch (vistaActual) {
    case "contenidoInicial":
      suprimeDelDOMContenidoInicial();
      break;
    case "listaDentistas":
      suprimeDelDOMListaDentistas();
      break;
    case "listaTratamientos":
      suprimeDelDOMListaTratamientos();
      break;
    case "datosDentista":
      suprimeDelDOMDatosDentista();
      break;
  }
}

function actualizaVistaActual(vista) {
  vistaActual = vista;
}
