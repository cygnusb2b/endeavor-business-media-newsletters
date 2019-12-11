const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('bulk-logistics-trend', [
    {
      name: 'leaderboardPrimary',
      id: '5df0126676787aaebb120a68',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
