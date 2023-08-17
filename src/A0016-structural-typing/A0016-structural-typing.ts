// "tipagem estruturada" - a identidade do tipo nao importa muito, somente as restricoes que estao naquele tipo

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: '123456' };
const sentUser = { username: 'Joao', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

// a funcao precisa de um user do tipo User, ou seja, precisa de um objeto que cumpra as regras desse tipo User.
