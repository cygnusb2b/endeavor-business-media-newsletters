const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('weekly-update', [
    {
      name: 'leaderboardPrimary',
      id: '5df00cd176787a4c3f120a30',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
