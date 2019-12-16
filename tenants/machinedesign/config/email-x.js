const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('3d-printing-cad', [
    {
      name: 'leaderboardPrimary',
      id: '5deeaa1ed300775c7cf282e1',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('daily', [
    {
      name: 'leaderboardPrimary',
      id: '5df7ca76d3007719d2f2efe4',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('medical-design', [
    {
      name: 'leaderboardPrimary',
      id: '5deeb1f1d300774019f28319',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('motion', [
    {
      name: 'leaderboardPrimary',
      id: '5df3bf7376787a5822124f44',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-spotlight', [
    {
      name: 'leaderboardPrimary',
      id: '5df7ad53d30077bbfcf2e928',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('robotics-automation', [
    {
      name: 'leaderboardPrimary',
      id: '5df3bf8ad30077083af2e125',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
