const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('fastrack', [
    {
      name: 'leaderboardPrimary',
      id: '5de93a9076787ae73911b7eb',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
