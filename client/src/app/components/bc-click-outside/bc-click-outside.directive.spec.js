describe('bcClickOutside directive test #', function () {
  var $compile;
  var $rootScope;
  var $document;
  var container;

  beforeEach(module('bcClickOutside'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$document_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $document = _$document_;

    container = $compile(
      '<div>' +
        '<div class="target" bc-click-outside="clicked = true">' +
          '<div class="target-inside"></div>' +
        '</div>' +
        '<div class="target-outside"></div>' +
      '</div>'
    )($rootScope);

    container.appendTo($document[0].body);
  }));

  afterEach(function() {
    container.remove();
  });


  it('click on the element does not trigger the handler', function() {
    simulateClick(container.find('.target').get(0));
    //$rootScope.$digest();

    expect($rootScope.clicked).toBe(undefined);
  });


  it('click inside the element does not trigger the handler', function() {
    simulateClick(container.find('.target-inside').get(0));
    //$rootScope.$digest();

    expect($rootScope.clicked).toBe(undefined);
  });


  it('click outside the element triggers the handler', function() {
    simulateClick(container.find('.target-outside').get(0));
    //$rootScope.$digest();

    expect($rootScope.clicked).toBe(true);
  });


  /**
   * Simulate browser click
   */
  function simulateClick(node) {
    var event = $document[0].createEvent('MouseEvents');
    event.initMouseEvent('click', true, true)
    node.dispatchEvent(event);
  }

});
