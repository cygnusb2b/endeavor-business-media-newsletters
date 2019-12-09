const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('analog-power-source', [
    {
      name: 'leaderboardPrimary',
      id: '5ded409dd300776c6af275f4',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('electronic-design-daily', [
    {
      name: 'leaderboardPrimary',
      id: '5ded40d076787ae65c11e341',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
