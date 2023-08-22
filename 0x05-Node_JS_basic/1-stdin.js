/* Using Process stdin */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  if (process.stdin.isTTY) {
    process.exit(0);
  } else {
    process.stdin.on('close', () => {
      process.stdout.write('This important software is now closing\n');
      process.exit(0);
    });
  }
});
