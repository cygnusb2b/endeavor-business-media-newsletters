const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('bulk-logistics-trends', [
    {
      name: 'leaderboardPrimary',
      id: '5df0126676787aaebb120a68',
      width: 670,
      height: 90,
    },
    {
      name: 'skyscraperPrimary',
      id: '5dfbad79d30077924bf361d0',
      width: 160,
      height: 600,
    },
    {
      name: 'skyscraperSecondary',
      id: '5e371b65b45bc586db27e9ef',
      width: 160,
      height: 600,
    },
    {
      name: 'skyscraperTertiary',
      id: '5e371b7cb45bc546b027e9f9',
      width: 160,
      height: 600,
    },
  ]);
module.exports = config;
