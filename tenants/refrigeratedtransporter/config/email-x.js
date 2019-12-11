const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('business-picture', [
    {
      name: 'leaderboardPrimary',
      id: '5df10103d300773c97f2a342',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
