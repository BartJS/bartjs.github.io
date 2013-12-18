module.exports.members = function (data) {
  if (!data.results) return [];
  return data.results;
};

module.exports.events = module.exports.members;