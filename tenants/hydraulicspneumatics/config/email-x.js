const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('fluid-power', [
    {
      name: 'leaderboardPrimary',
      id: '5ded50a576787a26fd11e3c3',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
