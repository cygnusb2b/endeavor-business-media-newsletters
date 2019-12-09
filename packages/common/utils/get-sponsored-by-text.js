const { get } = require('@base-cms/object-path');

module.exports = (node, fallbackValue = '') => {
  const { labels = [] } = node;
  const sponsored = labels.includes('Sponsored');
  const companyName = get(node, 'company.name');
  if (!sponsored) return fallbackValue;
  return companyName ? `Sponsored by ${node.company.name}` : 'Sponsored';
};
