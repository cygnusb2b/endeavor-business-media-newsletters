const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('today', [
    {
      name: 'leaderboardPrimary',
      id: '5df96a54d30077d912f3303c',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('defense-electronics', [
    {
      name: 'leaderboardPrimary',
      id: '5dee672ed300774863f27718',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-spotlight', [
    {
      name: 'leaderboardPrimary',
      id: '5df7a50cd300776355f2e89b',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('update', [
    {
      name: 'leaderboardPrimary',
      id: '5e53db2cda238ea3a0deaca0',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
