const DPMContentComponent = require('../../components/dpm/content.marko');
const extractUrls = require('../extract-urls');

/**
 *
 * @param {object} params
 * @param {string[]} fieldsToProcess Acceptable field keys to do processing on
 * @param {string} currentField The current field to process
 * @param {object} node The content object node
 * @param {object} $global The Marko global object - needed for rendering the DPM comment string
 */
module.exports = ({
  fieldsToProcess = [],
  currentField,
  node,
  $global,
} = {}) => {
  // do not process if the current field is not marked for processing.
  if (!fieldsToProcess.includes(currentField)) return node;

  // retrieve the field value from the node.
  let value = node[currentField];
  // extract all <a> elements from the value.
  const urls = extractUrls(value);
  // render the DPM comment
  const dpm = DPMContentComponent.renderToString({ node, $global });
  // if no comments could be rendered, return the node as-is.
  if (!dpm) return node;
  // otherwise, insert the dpm comment right after the link.
  urls.forEach((url) => {
    const { element } = url;
    value = value.replace(element, `${element}${dpm}`);
  });
  // update the node value with the injected comments
  return { ...node, [currentField]: value };
};
