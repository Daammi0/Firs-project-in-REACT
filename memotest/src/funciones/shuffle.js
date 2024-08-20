//funcion que desordena el array

export function shuffle(arr){
    let arr2= []
    while (arr.length > 0){
        const posicionRandom = Math.round(Math.random()* arr.length)
        const elemento = arr.splice(posicionRandom,  + 1)
        arr2 = arr2.concat(elemento)
    }


    return arr2
}