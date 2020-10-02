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
    address: 'Forging Magazine<br />Endeavor Business Media<br />331 54th Avenue N.<br />Nashville, TN 37209',
    safeSenders: 'news.endeavorb2b.com and mail.endeavorb2b.com',
    privacyPolicyUrl: 'https://www.endeavorbusinessmedia.com/privacy-policy',
    phoneNumber: '800-547-7377',
    manageSubscriptions: 'https://endeavor.dragonforms.com/FRGPrefPage?r=@{encrypted_customer_id}@&pk=NLFooter',
    signUp: 'https://endeavor.dragonforms.com/loading.do?omedasite=FRGnewpref',
  },
  socialMediaLinks: [
    {
      provider: 'twitter',
      href: 'https://twitter.com/forgingmag?elqTrack=true',
      title: 'Follow us on Twitter',
    },
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/ForgingMagazine?elqTrack=true',
      title: 'Follow us on Facebook',
    },
    {
      provider: 'linkedin',
      href: 'https://www.linkedin.com/groups?home=&gid=2880425&trk=anet_ug_hm&elqTrack=true',
      title: 'Follow us on LinkedIn',
    },
  ],
};
