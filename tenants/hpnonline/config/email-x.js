const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('daily', [
    {
      name: 'leaderboardPrimary',
      id: '5ea06bbad3e7016fc7bae465',
      width: 600,
      height: 100,
    },
    {
      name: 'leaderboardSecondary',
      id: '5ea06c8f8a13ab859139eb7b',
      width: 600,
      height: 100,
    },
    {
      name: 'mrPrimary',
      id: '5ea06cf58a13ab84d439eb97',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5ea06d198a13abd33b39ebaa',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
