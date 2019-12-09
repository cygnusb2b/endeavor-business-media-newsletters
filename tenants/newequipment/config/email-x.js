const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('industry-insider', [
    {
      name: 'leaderboardPrimary',
      id: '5dee736c76787a7d5511e6c5',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('motion-control-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dee7b1ad300779475f2798a',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
