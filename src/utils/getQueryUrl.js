const URL_QUERY_SYMBOL = "?";

const getQueryUrl = url => {
  const idx = url.indexOf(URL_QUERY_SYMBOL);

  return idx === -1 ? url : url.substring(0, idx);
};

module.exports = getQueryUrl;
