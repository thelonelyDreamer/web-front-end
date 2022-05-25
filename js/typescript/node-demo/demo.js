var chalk = require('chalk');
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
];
function logPerson(user) {
    console.log(" - ".concat(chalk.green(user.name), ", ").concat(user.age));
}
console.log(chalk.yellow('Users:'));
users.forEach(logPerson);
