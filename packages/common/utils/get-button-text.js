module.exports = (node) => {
  let buttonText = '';
  const { type } = node;
  switch (type) {
    case 'video':
      buttonText = 'Watch Video';
      break;
    case 'whitepaper':
      buttonText = 'Read More';
      break;
    case 'media-gallery':
      buttonText = 'View Gallery';
      break;
    case 'product':
      buttonText = 'Learn More';
      break;
    default:
      buttonText = `Full ${type}`;
      break;
  }
  return buttonText;
};
