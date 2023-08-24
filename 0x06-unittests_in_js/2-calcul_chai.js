/* function that accepts and calculate two numbers */
function calculateNumber(type, a, b) {
  const x = Math.round(a);
  const y = Math.round(b);
  let ans = 0;

  if (type === 'SUM') {
    ans = x + y;
  }
  if (type === 'SUBTRACT') {
    ans = x - y;
  }
  if (type === 'DIVIDE') {
    if (y === 0) {
      ans = 'Error';
    }
    ans = x / y;
  }
  return ans;
}

module.exports = calculateNumber;
