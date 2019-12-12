const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('daily', [
    {
      name: 'leaderboardPrimary',
      id: '5ded36dbd30077d1dff275b3',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('marketplace', [
    {
      name: 'leaderboardPrimary',
      id: '5df1506d76787a2ba6121c97',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
