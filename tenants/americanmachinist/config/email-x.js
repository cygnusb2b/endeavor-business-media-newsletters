const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://ebm.serve.email-x.io');
config
  .setAdUnits('highlights', [
    {
      name: 'leaderboardPrimary',
      id: '5df92eebd3007707eef3284b',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('imts-preview', [
    {
      name: 'leaderboardPrimary',
      id: '5df92f5fd300779553f328ff',
      width: 670,
      height: 90,
    },
  ])
  .setAdUnits('weekly-update', [
    {
      name: 'leaderboardPrimary',
      id: '5df8ed74d300778063f31be7',
      width: 670,
      height: 90,
    },
  ]);
module.exports = config;
