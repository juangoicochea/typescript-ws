function sumar(a: number | string, b: number | string): number {
    if(typeof a === 'string') {
        a = parseInt(a)
    }
    if(typeof b === 'string') {
        b = parseInt(b)
    }
    return a + b
} //que pasa si yo quisiera concatenar strings con esta funcion?