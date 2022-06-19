  fetch ('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then ( response => response.json())
    .then ((json) => {
        console.log(json);
        localStorage.setItem("valoresDolar", JSON.stringify(json)); 
        }
    )
    function upDolarBlueLs () {
        return JSON.parse(localStorage.getItem("valoresDolar"));
    }

    upDolarBlueLs();
    let valorDolarPago = " ";
 
    function blue () {
        let valor = upDolarBlueLs();
        let dolarBlue = document.getElementById("dolarBlue");
        let resultBlue = valor.filter (x => x.casa.nombre === "Dolar Blue");
        console.log(resultBlue);
        let resultadoBlue = " ";
        for (const variable of resultBlue) {
          resultadoBlue +=
          `<a>Dolar Blue: Venta: $${variable.casa.venta} , Compra: $${variable.casa.compra}</a>`;
          }
        dolarBlue.innerHTML = resultadoBlue;
    }

    function oficial () {
      let valor = upDolarBlueLs();
      let dolarOficial = document.getElementById("dolarOficial");
      let resultOficial = valor.filter (x => x.casa.nombre === "Dolar Oficial");
      console.log(resultOficial);
      let rOficial = " "
      for (const variable of resultOficial) {
        rOficial +=
        `<a>Dolar Oficial: Venta: $${variable.casa.venta} , Compra: $${variable.casa.compra}</a>`
        }
      dolarOficial.innerHTML = rOficial;
    }

    function bluePagos () {
      let valor = upDolarBlueLs();
      let resultBlue = valor.filter (x => x.casa.nombre === "Dolar Blue");
      let resultadoBlue = " ";
      for (const variable of resultBlue) {
        resultadoBlue +=
        `${variable.casa.venta}`;
        }
      let precioSimulador = resultadoBlue;
      return precioSimulador;
    }
  

   let precioBLueSimulador = bluePagos();
   function dolarBlueSs  () {
    sessionStorage.setItem("dolarSimulador", JSON.stringify(precioBLueSimulador));
  }
  dolarBlueSs();
   oficial();
   blue ();