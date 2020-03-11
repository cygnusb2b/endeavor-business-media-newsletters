const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('energizing', [
    {
      name: 'leaderboardPrimary',
      id: '5de588b1d30077baaef1e89f',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('europe-insights', [
    {
      name: 'leaderboardPrimary',
      id: '5de58977d300776ad4f1e8ce',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('grid-innovations', [
    {
      name: 'leaderboardPrimary',
      id: '5ddbfb17ec515565e49a82d3',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('ieee-pes-show-update', [
    {
      name: 'leaderboardPrimary',
      id: '5de59009d300773218f1eb00',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('lineman-life', [
    {
      name: 'leaderboardPrimary',
      id: '5de58be6d3007766def1e921',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('international-linemans-rodeo', [
    {
      name: 'leaderboardPrimary',
      id: '5de58cca76787a0248115422',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('projects-in-progress', [
    {
      name: 'mrPrimary',
      id: '5de58d5576787a748b115451',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5de58e4476787a72b51154cf',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('smart-utility', [
    {
      name: 'leaderboardPrimary',
      id: '5de58ed4d30077e405f1ea87',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('test-monitor-control', [
    {
      name: 'leaderboardPrimary',
      id: '5de58f2dd300774199f1eabf',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('vegetation-management-insights', [
    {
      name: 'leaderboardPrimary',
      id: '5de5647376787a064e115293',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('ieee-pes-show-update', [
    {
      name: 'leaderboardPrimary',
      id: '5de59009d300773218f1eb00',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('careers', [
    {
      name: 'leaderboardPrimary',
      id: '5dea688bd30077bff8f24700',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
