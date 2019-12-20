const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('market-watch', [
    {
      name: 'leaderboardPrimary',
      id: '5defea3cd30077a846f2912c',
      width: 670,
      height: 90,
    },
    {
      name: 'skyscraperPrimary',
      id: '5dfb9343d3007766adf35ca2',
      width: 160,
      height: 600,
    },
  ]);

module.exports = config;
