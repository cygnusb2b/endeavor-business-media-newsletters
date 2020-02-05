const { get } = require('@base-cms/object-path');

module.exports = (node, fallbackValue = '') => {
  const { labels = [] } = node;
  const sponsored = labels.includes('Sponsored') || labels.includes('Sponsored By');
  if (!sponsored) return fallbackValue;
  const companyName = get(node, 'company.name');
  return companyName ? `${labels[0]} ${companyName}` : labels[0];
};
