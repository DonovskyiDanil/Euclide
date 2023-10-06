function euclideanAlgoritm(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
const num1 = 48;
const num2 = 18;
const gcd = euclideanAlgoritm(num1, num2);
console.log(`Наибольший общий делитель чисел ${num1} и ${num2} равен ${gcd}`);