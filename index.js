var max_busqueda = 10

function f_buscar_primos(max_busqueda) {
    let primos = [];
    let primos_temp = [];
    let primos_gemelos = [];

    primos.push()
    for (let i = 2; i <= max_busqueda; i++) { // index de 0 a 100  ____ numero que se validará si es primo o no

        let cont = 1
        for (let i2 =1;i2 <= i; i2++){ // verificar cuantas veces es posible dividir el numero i
            // console.log(i,i2)
            console.log(cont);
            if (i%i2 == 0 || i%i2 == 1 ){ // si i es divisible y el r
                cont++
            }
        }

        if (cont == 2){
            primos_temp.push(i)
        }
    }
    
    console.log(primos);
    console.log(primos_temp);
    console.log(primos_gemelos);
}

var x = f_buscar_primos(max_busqueda);
console.log(x)


