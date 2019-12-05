const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('contractor-newsletter', [
    {
      name: 'leaderboardPrimary',
      id: '5de92a29d30077523df2358d',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
