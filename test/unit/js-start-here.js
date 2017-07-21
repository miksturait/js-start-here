import jsStartHere from '../../src/js-start-here';

describe('jsStartHere', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(jsStartHere, 'greet');
      jsStartHere.greet();
    });

    it('should have been run once', () => {
      expect(jsStartHere.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(jsStartHere.greet).to.have.always.returned('hello');
    });
  });
});
