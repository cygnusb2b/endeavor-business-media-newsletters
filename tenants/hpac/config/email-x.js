const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('fastrack', [
    {
      name: 'leaderboardPrimary',
      id: '5de93a9076787ae73911b7eb',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('engineering-green-buildings', [
    {
      name: 'leaderboardPrimary',
      id: '5dea8c3b76787a3b7c11cd42',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
