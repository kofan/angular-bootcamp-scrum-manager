describe('bcPopup service test #', function () {
  var bcPopup;
  var $rootScope;

  beforeEach(module(function ($provide) {
    $provide.value('$document', { 0: { body: angular.element('<body>')[0] }});
  }));

  beforeEach(module({
    $document: { 0: { body: angular.element('<body>')[0] }}
  }));

  beforeEach(module('bcPopup'));

  beforeEach(inject(function (_bcPopup_, _$rootScope_) {
    bcPopup = _bcPopup_;
    $rootScope = _$rootScope_;
  }));

  it('method open() should return a promise instance', inject(function ($q) {
    var promise = bcPopup.open({});
    var PromiseClass = $q.defer().promise.constructor;

    expect(promise instanceof PromiseClass).toBeTruthy();
  }));

  it('all resolves should be resolved properly', inject(function ($q, $timeout) {
    var ctrl = jasmine.createSpy();

    bcPopup.open({
      controller: ['r1', 'r2', 'r3', ctrl],
      template: '<div />',
      resolve: {
        r1: function ($q) {
          return $q.resolve('r1_value');
        },
        r2: function ($timeout) {
          return $timeout(function () {
            return 'r2_value';
          }, 3000);
        },
        r3: function ($timeout) {
          return $timeout(function () {
            return 'r3_value';
          }, 5000);
        }
      }
    });

    $timeout.flush();
    expect(ctrl).toHaveBeenCalledWith('r1_value', 'r2_value', 'r3_value');
  }));

  it('scope bindings should work properly', inject(function ($document) {
    var scope = $rootScope.$new();
    scope.title = 'Test!';

    bcPopup.open({
      scope: scope,
      template: '<div class="bcPopup">{{ title }}</div>',
      controller: function() {}
    });

    scope.$digest();

    var bcPopupElement = angular.element($document[0].body).find('.bcPopup');
    expect(bcPopupElement.text()).toBe('Test!');
  }));
});
