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
  ]);
module.exports = config;
