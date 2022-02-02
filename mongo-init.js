db.createUser({
  user: 'midety',
  pwd: '1234567890',
  roles: [
    {
      role: 'readWrite',
      db: 'application',
    },
  ],
});
