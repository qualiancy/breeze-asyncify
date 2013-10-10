
/*!
 * Module dependencies
 */

var nextTick = require('breeze-nexttick');

/*!
 * Primary export
 */

module.exports = asyncify;

/**
 * #### asyncify(fn[, cb])
 *
 * Turn a function asyncronous. Throws errors
 * will be in callback as first argument. Returned
 * result will be in callback as second argument.
 *
 * @param {Function} syncronous function
 * @param {Function} callback
 * @cb {Error|null} if error
 * @cb {Mixed} result
 * @api public
 */

function asyncify(fn, cb) {
  if (!cb) return asyncify.bind(this, fn);
  nextTick(function() {
    try { var res = fn(); }
    catch(err) { return cb(err); }
    if (undefined === res) return cb();
    return cb(null, res);
  });
}
