module.exports = process.env.asyncify_COV
  ? require('./lib-cov/asyncify')
  : require('./lib/asyncify');
