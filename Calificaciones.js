function getMinimum(calificaciones) {
    let temporal = 1;
    calificaciones.forEach(calif => {
        temporal = temporal * calif[1];
    });
    return temporal;
}

function calculate(fraction, common) {
    return (common / fraction[1]) * fraction[0];
}

function isPrime(number) {
  for(let iterator = 2; iterator < number; iterator++) {
    return number % iterator !== 0;
  }
  return true;
}

function getPrimes(quantity) {
  if(quantity < 2) {
    return [];
  }
  let primes = [2];
  for(let pairIterator = 3; pairIterator <= quantity; pairIterator += 2) {
    if(isPrime(pairIterator)) {
      primes.push(pairIterator);
    }
  }
  return primes;
}

function simplify(toValue, value) {
  if(!Array.isArray(value)) {
    return value;
  }
  if(value[1] % toValue == 0 && value[0] % toValue == 0) {
    return simplify(toValue, [value[0] / toValue, value[1] / toValue]);
  }
  value = value[0] == value[1] ? value[0] : value;
  value = value[1] == 1 ? value[0] : value;
  return value;
}

function nonPrimeSimplify(dividend, divisor, value) {
  if(!Array.isArray(value)) {
    return value;
  }
  if(dividend % divisor != 0 && divisor != value[1]) {
    return nonPrimeSimplify(divisor, dividend, value);
  }
  value = dividend % divisor == 0 ? [value[0] / divisor, value[1] / divisor] : value;
  return value[1] == 1 ? value[0] : value;
}

function getCalificaciones(calificaciones) {
    if(calificaciones.length == 0) {
        return 0;
    }
    let minimumCom = getMinimum(calificaciones);
    let result = 0;
    calificaciones.forEach(calif => {
        result += calculate(calif, minimumCom);
    });
    result = [result, minimumCom];
    getPrimes(15).forEach(prime => {
      result = simplify(prime, result);
    });
    result = nonPrimeSimplify(result[0], result[1], result);
    return result;
}


console.log(getCalificaciones([[1, 2], [1, 3], [1, 4]]));
console.log(getCalificaciones([[1, 3], [5, 3]]));
console.log(getCalificaciones([[12, 3], [15, 3]]));
console.log(getCalificaciones([[2, 7], [1, 3], [1, 12]]));
console.log(getCalificaciones([]));
console.log(getCalificaciones([[200,201], [100, 52]]));