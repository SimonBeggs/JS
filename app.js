let users = [
  {
    username: "Simon",
    email: "simondbeggs@gmail.com",
    password: 'test123',
    subscriptionStatus: "VIP",
    discordId: "SimonBeggs#001",
    lessonsCompleted: [0, 1]
  },
  {
    username: "mitri",
    email: "mitri@gmail.com",
    password: 'mitri123',
    subscriptionStatus: "VIP",
    discordId: "Mitri#001",
    lessonsCompleted: [0, 1]
  },
];

function login(email, password) {
  for (let i = 0; i < users.length ++i){
  console.log(users[i]);
  }
}

// login('simondbeggs@gmail.com', test123);
