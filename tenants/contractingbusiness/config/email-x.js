const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
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
  .setAdUnits('refrigerant-4-1-1', [
    {
      name: 'leaderboardPrimary',
      id: '5dea71cd76787af06711cb5b',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
