module.exports = (nodes, index) => { 
  return !!((nodes.length === 1 || (index % 2 === 0 && index === nodes.length - 1)));
};
