const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('e-newsletter', [
    {
      name: 'leaderboardPrimary',
      id: '5df8e92dd300774ac9f31a68',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
