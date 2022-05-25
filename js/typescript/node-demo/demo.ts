
interface item {
  name: string;
  age: number;
  occupation: string;
}
const chalk = require('chalk')
const users: item[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
];
 
function logPerson(user: item) {
  console.log(` - ${chalk.green(user.name)}, ${user.age}`);
}
 
console.log(chalk.yellow('Users:'));
users.forEach(logPerson);
