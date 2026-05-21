import { users } from './data.js';

const findUserById = (givenID) => {
  const foundUser = users.find((user) => user.id === givenID);

  if (foundUser) {
    const { id, name, email } = foundUser;
    const message = `Found user with ID ${id}!\nName: ${name}\nEmail: ${email}`;

    return message;
  } else {
    const errorMessage = 'Error: User not found';

    return errorMessage;
  }
};

console.log(findUserById(2));
console.log(`\n${findUserById(10)}`);
