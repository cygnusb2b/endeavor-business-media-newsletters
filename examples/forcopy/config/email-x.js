const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('[replace]', [
    {
      name: 'leaderboardPrimary',
      id: '[replace]',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
