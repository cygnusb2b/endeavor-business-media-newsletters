module.exports = (nodes, index) => { 
  return (nodes.length === 1 || (0 === index % 2 && index === nodes.length - 1)) ? true : false 
};