
describe('asyncify(fn)', function() {
  it('invokes syncronously', function() {
    var called = false;

    asyncify(function() {
      called = true;
    });

    called.should.equal.true;
  });
});

describe('asyncify(fn, cb)', function() {
  it('invokes asyncronously', function(done) {
    var called = false;

    asyncify(function() {
      called = true;
    }, done);

    called.should.equal.false;
  });

  it('calls back with result on pass', function(done) {
    function next(err, res) {
      should.not.exist(err);
      res.should.equal('hello universe');
      done();
    }

    asyncify(function() {
      return 'hello universe';
    }, next);
  });

  it('calls back with error on throw', function(done) {
    function next(err, res) {
      err.should.be.instanceof(Error);
      err.message.should.equal('hello universe');
      done();
    }

    asyncify(function() {
      throw new Error('hello universe');
    }, next);
  });
});
