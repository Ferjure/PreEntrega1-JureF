
function getAhora12(cantCuotas, monto) {
  let total = 0;

  switch (cantCuotas) {
    case '3':
    total = (monto * 15 / 100) + Number(monto);

      break;
    case '6':
    total = (monto * 30 / 100) + Number(monto);

      break;
    case '12':
    total = (monto * 55 / 100) + Number(monto);

      break;

    default:
      break;
  }
  return total/cantCuotas;
}

function getInteres(cantCuotas, monto) {
  let interes = 0;
  let total = 0;
  for (let i = 1; i <= cantCuotas; i++) {
    interes += (i * 2);
  }
  console.log((monto * interes / 100) + Number(monto ));
  total = ((monto * interes / 100) + Number(monto) ) / cantCuotas;
  return total;
}

//------------ Inicio

let monto = prompt("Monto del Artículo");

// validar entero
while (isNaN(monto)) {
    monto = prompt("Ingrese un valor entero");
}

let abonar = prompt("Para abonar en efectivo ingrese 1, para cuotas ingrese 2");

let total = 0;
if (abonar == 1) {
  total = monto - (monto * 0.10);
  console.log("El total es: $" + total);
  alert("El total es: $" + total);
} else {
  let cantCuotas = prompt("En cuantas cuotas desea pagar:");
  if (cantCuotas == 3 || cantCuotas == 6 || cantCuotas == 12 ) {
    total = getAhora12(cantCuotas, monto);
    alert("El total con Ahora" + cantCuotas + ": "+ cantCuotas + " cuotas de $" + total +". Interes: $" + (total * cantCuotas-monto));
  } else {
    total = getInteres(cantCuotas, monto);
    alert("El total es: " + cantCuotas + " cuotas de $" + total +". Interes: $" + (total * cantCuotas-monto));
  }
  console.log("El total es: " + cantCuotas + " cuotas de $" + total );
}

