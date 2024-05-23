export function splitPrice(
    price: number | string | string[]
) {
    let priceArr = price.toString().split("").map(String)
    priceArr = priceArr.slice(0, priceArr.indexOf('.'))

    if (priceArr.length == 4) {
        priceArr.splice(1, 0, ".");
        return priceArr.join("");

    } 

    return priceArr
}