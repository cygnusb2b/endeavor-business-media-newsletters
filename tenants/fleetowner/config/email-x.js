const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('equipment-weekly', [
    {
      name: 'leaderboardPrimary',
      id: '5df1578dd30077fa36f2ae8d',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('fleet-owner-newsline', [
    {
      name: 'leaderboardPrimary',
      id: '5ded47c676787ab38911e38b',
      width: 670,
      height: 90,
    },
    {
      name: 'leaderboardSecondary',
      id: '5df79fd7d300772175f2e724',
      width: 670,
      height: 90,
    },
    {
      name: 'leaderboardTertiary',
      id: '5df7a020d3007739f2f2e747',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('commercial-work-truck', [
    {
      name: 'leaderboardPrimary',
      id: '5df24f36d30077482ef2b38a',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('info-tech', [
    {
      name: 'leaderboardPrimary',
      id: '5df7d0e076787a5327126a80',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
