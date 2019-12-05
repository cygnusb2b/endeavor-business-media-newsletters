const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('facilities-focus', [
    {
      name: 'leaderboardPrimary',
      id: '5de9322d76787a21f111b542',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('schoolhouse-beat', [
    {
      name: 'leaderboardPrimary',
      id: '5de931f4d30077aac6f23781',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('green-school-university', [
    {
      name: 'leaderboardPrimary',
      id: '5de9320576787a2cb811b50f',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('first-monday-product-news', [
    {
      name: 'leaderboardPrimary',
      id: '5de9321876787a1c6711b522',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
