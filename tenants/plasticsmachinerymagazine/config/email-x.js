const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');

config
  .setAdUnits('journal-of-blow-molding-update', [
    {
      name: 'leaderboardPrimary',
      id: '5fa55a3ff994cd366353e024',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
