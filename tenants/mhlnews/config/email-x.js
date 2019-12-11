const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('newsmakers', [
    {
      name: 'leaderboardPrimary',
      id: '5df1166bd30077b9daf2a572',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('products-of-the-week', [
    {
      name: 'leaderboardPrimary',
      id: '5df10b0876787a56f6121320',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
