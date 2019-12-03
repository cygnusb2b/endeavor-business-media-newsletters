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
      name: 'mr_primary',
      id: '5de58977d300776ad4f1e8ce',
      width: 300,
      height: 250,
    },
    {
      name: 'mr_secondary',
      id: '5de589a876787a01ce1153a1',
      width: 300,
      height: 250,
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
  .setAdUnits('lineman-life', [
    {
      name: 'mr_primary',
      id: '5de58be6d3007766def1e921',
      width: 300,
      height: 250,
    },
    {
      name: 'mr_secondary',
      id: '5de58bf876787a36371153f3',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('international-linemans-rodeo', [
    {
      name: 'mr_primary',
      id: '5de58cca76787a0248115422',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('projects-in-progress', [
    {
      name: 'mr_primary',
      id: '5de58d5576787a748b115451',
      width: 300,
      height: 250,
    },
    {
      name: 'mr_secondary',
      id: '5de58e4476787a72b51154cf',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('smart-utility', [
    {
      name: 'mr_primary',
      id: '5de58ed4d30077e405f1ea87',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('test-monitor-control', [
    {
      name: 'mr_primary',
      id: '5de58f2dd300774199f1eabf',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('vegetation-management-insights', [
    {
      name: 'leaderboardPrimary',
      id: '5de5647376787a064e115293',
      width: 670,
      height: 90,
    },
    {
      name: 'mr_primary',
      id: '5de564ffd30077f59ef1e7e5',
      width: 300,
      height: 250,
    },
    {
      name: 'mr_secondary',
      id: '5de5654ad30077c545f1e825',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ieee-pes-show-update', [
    {
      name: 'leaderboardPrimary',
      id: '5de59009d300773218f1eb00',
      width: 670,
      height: 90,
    },
    {
      name: 'mr_primary',
      id: '5de5902676787a107811562f',
      width: 300,
      height: 250,
    },
    {
      name: 'mr_secondary',
      id: '5de59036d300774a5bf1eb1c',
      width: 300,
      height: 250,
    },
  ]);
module.exports = config;
