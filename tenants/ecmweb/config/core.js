module.exports = {
  dpm: {
    emailx: {
      enabled: true,
    },
    content: {
      enabled: true,
    },
  },
  optOut: {
    address: 'EC&M<br />Endeavor Business Media<br />331 54th Avenue N.<br />Nashville, TN 37209',
    safeSenders: 'enews.ecmweb.com and mail.ecmweb.com',
    privacyPolicyUrl: 'https://www.endeavorbusinessmedia.com/privacy-policy',
    phoneNumber: '800-547-7377',
    manageSubscriptions: 'https://endeavor.dragonforms.com/ECMPrefPage?r=@{encrypted_customer_id}@&pk=NLFooter',
    signUp: 'https://endeavor.dragonforms.com/loading.do?omedasite=ECMnewpref',
  },
  socialMediaLinks: [
    {
      provider: 'twitter',
      href: 'https://twitter.com/?elqTrack=true#1/ecmweb',
      title: 'Follow us on Twitter',
    },
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/pages/Electrical-Construction-Maintenance/46473364997?elqTrack=true',
      title: 'Follow us on Facebook',
    },
    {
      provider: 'linkedin',
      href: 'https://www.linkedin.com/groups?home=&gid=2685562&trk=anet_ug_hm&elqTrack=true',
      title: 'Follow us on LinkedIn',
    },
  ],
};
