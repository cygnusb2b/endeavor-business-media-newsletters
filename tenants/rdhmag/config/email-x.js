const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('rdh-graduate', [
    {
      name: 'leaderboardPrimary',
      id: '5d76c315bc9959557779e81c',
      width: 600,
      height: 100,
    },
    {
      name: 'leaderboardSecondary',
      id: '5d76c3483b35881c634bccf3',
      width: 600,
      height: 100,
    },
    {
      name: 'mrPrimary',
      id: '5d9373efbe2c333c2d88481e',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5d9374156055c55e30053881',
      width: 300,
      height: 250,
    },
    {
      name: 'mrTertiary',
      id: '5d937427be2c33672a88483a',
      width: 300,
      height: 250,
    },
    {
      name: 'mrQuaternary',
      id: '5d9374556055c53df405389d',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('rdh-e-village', [
    {
      name: 'leaderboardPrimary',
      id: '5d9374a06055c5f1fc0538b9',
      width: 600,
      height: 100,
    },
    {
      name: 'leaderboardSecondary',
      id: '5d9374c2be2c33423c88487b',
      width: 600,
      height: 100,
    },
    {
      name: 'mrPrimary',
      id: '5d778fdd3b3588776c4bcd66',
      width: 300,
      height: 250,
    },
    {
      name: 'mrSecondary',
      id: '5d77906a3b3588a0794bcd79',
      width: 300,
      height: 250,
    },
    {
      name: 'mrTertiary',
      id: '5d779089bc9959a42679e912',
      width: 300,
      height: 250,
    },
    {
      name: 'mrQuaternary',
      id: '5d7790a63b358809584bcd95',
      width: 300,
      height: 250,
    },
  ]);
module.exports = config;
