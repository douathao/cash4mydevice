describe('Filters:', function() {
  var filter;
  beforeEach(module('cash4MyDevice.core'));
  /**
   * capitalize filter
   */
  describe('capitalize', function() {
    beforeEach(inject(function($filter) {
      filter = $filter('capitalize');
    }));

    it('has a capitalize filter', function() {
      expect(filter).not.toBeNull();
    });

    it('should capitalize the first char in a ward', function() {
      var word = 'hello world';
      expect(filter(word)).toEqual('Hello world');
    });
  });
});