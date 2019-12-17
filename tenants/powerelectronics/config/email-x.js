const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('product-spotlights', [
    {
      name: 'leaderboardPrimary',
      id: '5df90a3e76787a3d2b128d98',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
