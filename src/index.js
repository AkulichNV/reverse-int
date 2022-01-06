module.exports = function reverse (n) {
    const str = n.toString().split('').reverse().join('');
    return parseInt(str);
}
