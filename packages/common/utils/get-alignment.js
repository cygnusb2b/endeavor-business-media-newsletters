module.exports = (index) => {
  return (index === 0 || (index % 2) === 0) ? 'left' : 'right';
};
