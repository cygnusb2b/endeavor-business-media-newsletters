const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('distributed-energy-weekly', [
    {
      name: 'leaderboardPrimary',
      id: '5e61702ee8f0a365d398ba9f',
      width: 600,
      height: 100,
    },
    {
      name: 'hpPrimary',
      id: '5e6170851e226774e4185d19',
      width: 300,
      height: 600,
    },
    {
      name: 'mrPrimary',
      id: '5e61705f1e2267074a185d0f',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
