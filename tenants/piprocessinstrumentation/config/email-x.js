const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('weekly-update', [
    {
      name: 'leaderboardPrimary',
      id: '5ea9d8138a13ab029e3a6aac',
      width: 600,
      height: 100,
    },
    {
      name: 'mrPrimary',
      id: '5ea9d5878a13ab49cd3a6a09',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5ea9d5a6d3e701116bbb555a',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
