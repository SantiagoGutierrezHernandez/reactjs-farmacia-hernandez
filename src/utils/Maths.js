//Funcion de utilidad para hacer que el numero se mantenga entre dos valores
export const clamp = (number, min, max) => {
    if(number > max) return max;
        if(number < min) return min;
    return number;
}