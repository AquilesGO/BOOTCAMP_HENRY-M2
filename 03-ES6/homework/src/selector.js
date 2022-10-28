var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if ( matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") return "id"
  if (selector[0] === ".") return "class"
  if (selector.includes(".")) return 'tag.class'
  return "tag"
  // if (selector.length != "." || "#") return "tag"

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // inicio--->
    // matchFunction=(elemento)=>{return "#"+elemento.id===selector} 
    // matchFunction=function(elementoHTML) {
    //   return "#"+ elementoHTML.id === selector;
    // };
    // <---fin código hecho en PP del 26-10-2022 


   //Solución clase con Jorge Vega------------------------------------------------------>
      matchFunction = (element) => "#" + element.id === selector;
   //<-------------------------------------------fin código hecho en clase con Jorge Vega


  } else if (selectorType === "class") {
    //inicio--->
    // matchFunction=function(elementoHTML){
    //   return elementoHTML.classList.contains(selector.substring(1));//heading
    // };
    //<---fin código hecho en PP del 26-10-2022
    

  //Solución clase con Jorge Vega------------------------------------------------------>
      matchFunction = (element) => {
        for (const cls of element.classList) {
          if ("." + cls === selector) return true;
        }
        return false;  
      };
  //<-------------------------------------------fin código hecho en clase con Jorge Vega


  } else if (selectorType === "tag.class") {
     //inicio--->
    //  matchFunction=function(elementoHTML){
    //   const [tag, clase] = selector.split("."); //divido en 2 array y le asigno el tag
    //   //a tag y clase a clase split me crea un array divide cuando llega al punto
    //   //y crea 2 arrays
    //   return(elementoHTML.tagName.toLowerCase() === tag.toLowerCase()) && (elementoHTML.classList.contains(clase))
    //  }
     //<---fin código hecho en PP del 26-10-2022

  //Solución clase con Jorge Vega------------------------------------------------------>
    matchFunction = (element) => {
      const [miTag, miClass] = selector.split(".");
      return (
        matchFunctionMaker (miTag)(element) && 
        matchFunctionMaker ("." + miClass)(element)
      );
    };
  //<-------------------------------------------fin código hecho en clase con Jorge Vega
    
  } else if (selectorType === "tag") {
    //inicio--->
    // matchFunction=function(elementoHTML){
    //   return elementoHTML.tagName.toLowerCase()===selector.toLowerCase();
    // }
    //<---fin código hecho en PP del 26-10-2022

  //Solución clase con Jorge Vega------------------------------------------------------>
    matchFunction = (element) => {
      if (element.tagName.toLowerCase() === selector) return true;
      return false;
    };
  //<-------------------------------------------fin código hecho en clase con Jorge Vega
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
