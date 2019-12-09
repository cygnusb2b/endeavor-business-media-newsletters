const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('source-today', [
    {
      name: 'leaderboardPrimary',
      id: '5dee7f1a76787a66ec11e79f',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
