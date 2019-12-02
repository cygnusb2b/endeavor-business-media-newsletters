const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');

config
  .setAdUnits('grid-innovations', [
    {
      name: 'leaderboard_primary',
      id: '5ddbfb17ec515565e49a82d3',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('vegetation-management-insights', [
    {
      name: 'leaderboard_primary',
      id: '5de5647376787a064e115293',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
