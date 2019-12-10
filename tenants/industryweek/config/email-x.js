const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('quick-manufacturing-news', [
    {
      name: 'leaderboardPrimary',
      id: '5defc9f276787a1ee611fd13',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
