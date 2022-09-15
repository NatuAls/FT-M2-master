var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child));
    //resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, child)];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  for (let i = 1; i < selector.length; i++) {
    if(selector[i] === '.') return 'tag.class';
  }
  //EXTRA - Selector de Jerarquia
  for (let i = 1; i < selector.length; i++) {
    if(selector[i] === '>') return 'child.combinator';
  }
  for (let i = 1; i < selector.length; i++) {
    if(selector[i] === ' ') return 'descendant.combinator';
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(el){
      return ('#' + el.id === selector);
    }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      for (let i = 0; i < el.classList.length; i++) {
        if('.' + el.classList[i] === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      let arr = selector.split('.');
      // OPCION SIN RECURSIVIDAD
      // if(el.tagName.toLowerCase() === arr[0].toLowerCase()){
      //   for (let i = 0; i < el.classList.length; i++) {
      //     if(el.classList[i] === arr[1]) return true;
      //   }
      // }
      // return false;
      // OPCION CON RECURSIVIDAD - OPTIMIZADA
      return (matchFunctionMaker(arr[0])(el) && matchFunctionMaker('.' + arr[1])(el));
      //"(arr[0])" retorna una funcion (clousure) y la ejecuto con "(el)". "el" es un elemento del DOM
    }
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return (el.tagName.toLowerCase() === selector.toLowerCase());
    }
  }
  //EXTRA - Selector de Jerarquia
  if (selectorType === 'child.combinator'){
    matchFunction = function (el) {
      let arr = selector.split(' > ');
      return (el.tagName.toLowerCase() === arr[1] && el.parentNode.tagName.toLowerCase() === arr[0])
    }
  }
  if (selectorType === 'descendant.combinator'){
    matchFunction = function (el) {
      let arr = selector.split(' ');
      if(el.tagName.toLowerCase() === arr[1]){
        let aux = el;
        while(aux.parentElement){
          if(aux.parentNode.tagName.toLowerCase() === arr[0]) return true;
          aux = aux.parentNode;
        }
      }
      return false;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
