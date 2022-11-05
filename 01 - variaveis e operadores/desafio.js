/*let Distancia = 100;
let gastoMedio = 12;
let preco = 5.79;
    var resultado = (Distancia/gastoMedio) * preco;
   console.log(`Resultado foi ${resultado}`)  
*/

   const precoCombustivel = 5.79;
   const kmPorLitros = 12;
   const distanciaEmKm = 100;
   
   const litrosConsumidos = distanciaEmKm / kmPorLitros;
   const valorGasto = litrosConsumidos * precoCombustivel;
   console.log(valorGasto.toFixed(2));