const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('connected-contractor', [
    {
      name: 'leaderboardPrimary',
      id: '5de97701d30077a825f23f66',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-spotlight', [
    {
      name: 'leaderboardPrimary',
      id: '5de9771c76787ab20411bd86',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('contractor-newsletter', [
    {
      name: 'leaderboardPrimary',
      id: '5de92a29d30077523df2358d',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
