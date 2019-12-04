const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('electrical-zone', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ada1d30077b217f20f05',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('code-watch', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ad8576787a1862118f6d',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('illumination-insider', [
    {
      name: 'leaderboardPrimary',
      id: '5de6add1d300770677f20f3d',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('lightfare-show-coverage', [
    {
      name: 'leaderboardPrimary',
      id: '5de6adb9d300771606f20f21',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('mro-insider', [
    {
      name: 'leaderboardPrimary',
      id: '5de6adf1d30077076ef20f50',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('neca-show-coverage', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ae0276787a4549118fd1',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('pq-news-beat', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ae1876787a2ef8118fe4',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-news-wire', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ae2e76787a4523118ff7',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('safety-matters', [
    {
      name: 'leaderboardPrimary',
      id: '5de6ae3ed300776bd0f20f90',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
