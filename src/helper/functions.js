export function getWords(str, NrOfwords) {
    return str.split(' ').slice(0, NrOfwords).join(' ')
}

//calculate the total of cart items
export function getTotal (products) {
    return products.reduce((a,b)=>a+b.price*b.qty, 0)
 }

 //find duplicates in cart