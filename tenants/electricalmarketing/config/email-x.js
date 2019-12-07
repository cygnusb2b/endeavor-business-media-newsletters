const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('electrical-marketing-update', [
    {
      name: 'leaderboardPrimary',
      id: '5dec0f3e76787a351111e2b3',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
