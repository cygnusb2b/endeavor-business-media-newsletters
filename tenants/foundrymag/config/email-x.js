const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('metalcasting-weekly', [
    {
      name: 'leaderboardPrimary',
      id: '5df8e97376787a14ad128939',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
