const gql = require('graphql-tag');

module.exports = gql`

fragment EmailConfigurationFragment on EmailNewsletter {
  id
  name
  alphaThemeConfigs {
    edges {
      node {
        id
        status
        accentFontColor
        headerLink
        socialIcons
        facebook
        linkedin
        twitter
        youtube
        instagram
        pinterest
        headerBgColor
        headerTextColor
        headerTemplate
        dateToggle
        footerColor
        footerTextColor
        manageSubscriptions
        contactUs
        advertise
        headerLeft {
          id
          src
        }
        headerRight {
          id
          src
        }
      }
    }
  }
}

`;
