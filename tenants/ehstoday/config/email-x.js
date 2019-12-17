const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('construction-safety', [
    {
      name: 'leaderboardPrimary',
      id: '5df8465d76787a6baf12836c',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('management', [
    {
      name: 'leaderboardPrimary',
      id: '5df90f3276787a2334128e76',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('safety-tech-analytics-news', [
    {
      name: 'leaderboardPrimary',
      id: '5df14f2c76787ad053121a2d',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('weekly-update', [
    {
      name: 'leaderboardPrimary',
      id: '5df00cd176787a4c3f120a30',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
