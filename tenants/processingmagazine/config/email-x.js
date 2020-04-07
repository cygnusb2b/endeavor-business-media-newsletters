const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('processing-weekly-update', [
    {
      name: 'leaderboardPrimary',
      id: '5e8c95aa8a13ab55db38acd4',
      width: 670,
      height: 90,
    },
    {
      name: 'mrPrimary',
      id: '5e8c95d1d3e701dcb9b9a523',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5e8c960fd3e7014b81b9a536',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
