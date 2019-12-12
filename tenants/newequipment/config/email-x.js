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
  ])
  .setAdUnits('pipes-valves-and-fittings-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5df26f4ad300770b1ef2b75e',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('sensor-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5df26f86d30077438af2b7bd',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
