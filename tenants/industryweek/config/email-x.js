const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('daily-headlines-afternoon-edition', [
    {
      name: 'leaderboardPrimary',
      id: '5defddae76787a32b611fff9',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('daily-headlines-morning-edition', [
    {
      name: 'leaderboardPrimary',
      id: '5defdd6a76787a484b11ffe6',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('supply-chain-insights', [
    {
      name: 'leaderboardPrimary',
      id: '5defddea76787a9deb12000c',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('workforce-watch', [
    {
      name: 'leaderboardPrimary',
      id: '5df15a9576787af7fe121e77',
      width: 670,
      height: 90,
    },
  ]);

module.exports = config;
