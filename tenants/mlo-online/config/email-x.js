const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('daily', [
    {
      name: 'leaderboardPrimary',
      id: '5ea9a1f28a13ab21de3a54b6',
      width: 600,
      height: 100,
    },
    {
      name: 'leaderboardSecondary',
      id: '5ea9a20e8a13abf62e3a54c9',
      width: 600,
      height: 100,
    },
    {
      name: 'mrPrimary',
      id: '5ea9a22d8a13abcbc13a54dc',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5ea9a2508a13ab66a83a54e6',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
