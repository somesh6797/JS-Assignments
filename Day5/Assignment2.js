class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.coins = 0;
    this.course = [];
  }

  login = () => {
    console.log(this.name, " Logged in");
  };
  logout = () => {
    console.log(this.name, " Logged out");
  };
}

class Moderator extends User {
  constructor(name, age, email) {
    super(name, age, email);
  }
  addCoins = user => {
    user.coins++;
    console.log(
      `Moderator given coins to ${user.name} now he has ${user.coins} coins`
    );
  };
  removeCoins = user => {
    user.coins--;
    console.log(
      `MOderator removed coin from ${user.name} now he  has ${user.coins} coins`
    );
  };
}

class Admin extends User {
  constructor(name, age, email) {
    super(name, age, email);
  }

  addCourse = (user, courseName) => {
    user.course.push(courseName);
    console.log(`${user.name} has given ${user.course} course`);
  };
  removeCourse = user => {
    console.log(`${user.name} has removed from ${user.course} course`);
    user.course.pop();
  };
}

usr = new User("Somesh", 21, "@gmail");
usr.login();
usr.logout();

Mod1 = new Moderator("sam", 67, "$masl.com");
Mod1.addCoins(usr);

Adm1 = new Admin("Gosling", 34, "@python.com");
Adm1.addCourse(usr, "NodeJS");
Adm1.removeCourse(usr);
