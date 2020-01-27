const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('ahr-show-daily', [
    {
      name: 'leaderboardPrimary',
      id: '5e2f3c5722429729267268c1',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('hvac-talk', [
    {
      name: 'leaderboardPrimary',
      id: '5dea7156d300774ccaf24d3c',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('hvacr-hotmail', [
    {
      name: 'leaderboardPrimary',
      id: '5dea7198d3007741d5f24d7c',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('hvacr-hydronics-distribution-bus', [
    {
      name: 'leaderboardPrimary',
      id: '5df7b3c0d30077c037f2e9d6',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('refrigerant-4-1-1', [
    {
      name: 'leaderboardPrimary',
      id: '5dea71cd76787af06711cb5b',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
