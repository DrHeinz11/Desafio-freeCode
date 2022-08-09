//* 1. hacer una funcin llamada "producto" que reciba dos numeros enteros y que devuelva el producto de ambor. luego hacer un programa que pida el precio de un articulo la cantidad vendida y muestre por pantalla el monto total a pagar.(usar funciones ) */
//*2. haceer una funcion llamada "mayor" que reciba dos numero enteros y devuelva el mayor de ellos o cero si son iguales */
/* 3. hacer una funcion llamada "par" que reciba un numero entero que devuelva 1 si es par o cero si no es . hacer un programa para ingresar 20 numeros y mostrar por pantalla cuantos son pares.*/
/*4. hacer una funcion llama "primo" que reciba un numero entero y devuelva 1 si el numero es primo o cero si no lo es. hacer un programa para ingresar numeros. el lote corta cuando se ingresa el numero cero. informar el promedio teniendo en cuenta solo los numeros primos. */
/* 5. hacer una funciona llamada "pagos" que reciba un monto (float) y una cantidad de pagos (enteros) y devuelva el monto de cada pago. hacer un programa para ingresar 10 ventas. para cada venta se conoce el monto y la cantidad de pagos. el programa debera mostrar la cantidad de pagos y el monto del pago para cada una de las ventas.*/
/* 6. hacer una funcion que se llame "sumaresta" que reciba dos numeros y que devuelva la suma y la resta del primer numero con el segundo. NOTA: recordemos que una cuncion solo puede devolver un valor por return.
/* 7. hacer una funcion de tipo void(no tiene return) llama "positivoNegativoCero" que reciba un numero po valor y una variable por referenecia. que analice el numero y escriba variable recibida por referencia con |A: 1 si el numero es positivo |B: -1 si el numero es negativo |C: 0 si el numero es cero*/

{
  //1
  const producto = (articulo, cantidad) => articulo * cantidad;
  const priceSell = (artPrice, cantArt) => {
    const totalSell = producto(artPrice, cantArt);
    console.log(totalSell);
  };
  priceSell(322, 50);
}

{
  const mayor = (int1, int2) => (int1 === 0 ? 0 : int1 > int2 ? int1 : int2);
  mayor(22, 12);
}

{
  //2/3
  const par = (int1) => (int1 % 2 === 0 ? 1 : 0);
  const verificacionPares = (arr) => {
    const arrMap = arr.map((e) => par(e));
    let result = 0;
    arrMap.filter((x) => (x === 1 ? (result += x) : ""));
    console.log(result);
  };

  const arr = [];

  const obtenerNumeros = () => {
    let number = 1;
    while (number !== 0) {
      const ingreso = Number(prompt());
      number = ingreso;
      ingreso !== 0 ? arr.push(ingreso) : "";
    }
  };

  const metodoParaPares = (arr) => verificacionPares(arr);
  metodoParaPares(arr);
  console.log(arr);
}

{
  const primo = (int) => {
    let result = 0;
    const arrPromedio = [];
    if (int !== 0 && int !== 1) {
      for (let index = 1; index <= int; index++) {
        int % index === 0 ? result++ : "";
      }
      result > 2 ? "" : arrPromedio.push(int);
      /* result > 2
        ? console.log(`El numero ${int} no es un numero primo`)
        : console.log(`El numero ${int} es un numero primo`);
    */
    }
    return arrPromedio;
  };

  const primoFunctions = (int) => {
    const result = int.map((element) => primo(element));
    const flatten = result.flat();
    const reducer = flatten.reduce(
      (intValue, curValue) => intValue + curValue,
      0
    );
    console.log(flatten);
    console.log(reducer);
    const promedios = (total, divisor) => total / divisor;

    const resultadoPromedio = promedios(reducer, flatten.length);
    console.log(resultadoPromedio);
  };

  primoFunctions([1, 2, 3, 4, 5, 6, 7]);
}

{
  const funcPagos = () => {
    class Pagos {
      constructor(monto, articulo, cuotas) {
        this.articulo = articulo;
        this.monto = monto;
        this.cuotas = cuotas;
      }
    }
    const arrayPagos = [];
    let articulo = 1;
    while (articulo !== 0) {
      const numArticulo = Number(prompt("Ingrese el numero de articulo"));

      if (numArticulo !== 0) {
        const articulos = prompt("Nombre del articulo");
        const monto = Number(prompt("Ingrese el monto"));
        const cuotas = Number(prompt("Ingrese las cuotas"));
        const resume = new Pagos(monto, articulos, cuotas);
        arrayPagos.push(resume);
      }
      articulo = numArticulo;
    }
    return arrayPagos;
  };

  const pago = (monto) => {
    const total = monto.map((e) => {
      const cuotasMensuales = Math.round(e.monto / e.cuotas);
      return {
        articulo: e.articulo,
        montoTotal: e.monto,
        cuotasMensuales,
      };
    });

    total.map((e) => console.log(e));
  };
  pago(funcPagos());
}

{
  const sumaResta = (int1, int2) => {
    return { suma: int1 + int2, resta: int1 - int2 };
  };
  console.log(sumaResta(2, 12));
}

{
  const positivoNegativoCero = (int) => {
    if (int === 0) return;
    if (int < 0) return "es un numero negativo";
    else {
      return "es un numero positivo";
    }
  };
  const resultado = positivoNegativoCero(22);

  console.log(resultado);
}
