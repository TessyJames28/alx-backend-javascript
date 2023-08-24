/* function that accepts and calculate two numbers */
function calculateNumber(a, b) {
  const x = Math.round(a);
  const y = Math.round(b);
  return (x + y);
}

module.exports = calculateNumber;
