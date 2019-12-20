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
    {
      name: 'skyscraperPrimary',
      id: '5dfbac67d300775529f36170',
      width: 160,
      height: 600,
    },
  ]);
module.exports = config;
