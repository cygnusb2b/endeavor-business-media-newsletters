const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('rer-product-wire', [
    {
      name: 'leaderboardPrimary',
      id: '5de91461d30077f95ff22f21',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('rer-reports', [
    {
      name: 'leaderboardPrimary',
      id: '5de7e9f8d300770b38f221de',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
