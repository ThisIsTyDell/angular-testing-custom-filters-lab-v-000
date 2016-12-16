describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter food correctly', function() {
    var mockedList = [{
      name: 'Test 1',
      favoriteFood: 'Pasta'
    },
    {
      name: 'Test 2',
      favoriteFood: 'Pizza'
    },
    {
      name: 'Test 3',
      favoriteFood: 'Pizza'
    },
    {
      name: 'Test 4',
      favoriteFood: 'Cake'
    }];

    var results = $filter('favoriteFood')(mockedList, 'Pizza');

    expect(results.length).toBe(2);
    expect(results[0].name).toBe('Test 2');
  });	
});
