module.exports = (node, fallbackValue) => {
  const { labels = [] } = node;
  const sponsored = labels.includes('Sponsored');
  if (sponsored) {
    return node.company ? `Sponsored by ${node.company.name}` : 'Sponsored';
  }
  return fallbackValue;
};
