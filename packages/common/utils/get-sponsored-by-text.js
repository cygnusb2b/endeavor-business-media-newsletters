const { get } = require('@base-cms/object-path');

module.exports = (node, fallbackValue = '') => {
  const { labels = [] } = node;
  const sponsored = labels.includes('Sponsored');
  if (!sponsored) return fallbackValue;
  const companyName = get(node, 'company.name');
  return companyName ? `Sponsored by ${companyName}` : 'Sponsored';
};
