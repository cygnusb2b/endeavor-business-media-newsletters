const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('adhesive-lubricants-sealants-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa509d76787ae57112a7a1',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('electrical-electronics-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa515b76787a147412a7d9',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('facilities-maintenance-plant-operation-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa525f76787adcd712a808',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('fluid-power-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa52ec76787a5bba12a837',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('industry-insider', [
    {
      name: 'leaderboardPrimary',
      id: '5dee736c76787a7d5511e6c5',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('maintenance-operations', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa537c76787aa58612a866',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('material-handling-packaging-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa542276787ae39b12a8a0',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('material-handling-robotics', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa55df76787ad38612a9ba',
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
  .setAdUnits('robotics-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa566876787a6ccd12a9e9',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('safety-security-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa56e176787a1e5e12aa18',
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
  ])
  .setAdUnits('smart-manufacturing-iot', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa572d76787a66ea12aa47',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('tool-monthly', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa57ba76787a566412aa76',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('tools-ppe', [
    {
      name: 'leaderboardPrimary',
      id: '5dfa584f76787a0dd212aaa5',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('week-in-review', [
    {
      name: 'leaderboardPrimary',
      id: '5df840d476787a8050128334',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
