import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.cyan('¿Cómo te llamas? '), (nombre) => {
  console.log(chalk.green(`¡Hola, ${nombre}! Bienvenido a tu proyecto con npm.`));
  rl.close();
});
