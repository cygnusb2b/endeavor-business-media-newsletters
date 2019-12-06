const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('update', [
    {
      name: 'leaderboardPrimary',
      id: '5de7f1ddd3007738c2f2249b',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('product-alert', [
    {
      name: 'leaderboardPrimary',
      id: '5dea851376787acd8811cc8b',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('gbiz', [
    {
      name: 'leaderboardPrimary',
      id: '5dea86b176787a546411cd13',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
