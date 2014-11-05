angular.module('cash4MyDevice.customerReview')
  .factory('customerReviews', function () {
    var reviews = [
      {
        name: 'Mark D',
        star: 5,
        date: new Date(),
        message: 'I love a business that delivers what they say they will.' +
          ' Sold iphone 4 got twice what gazelle offered. Will recommend to all my friends.'
      },
      {
        name: 'Luffy H',
        star: 5,
        date: new Date(),
        message: 'Where do I start.. I love these guys! I\'ve sold 4 phones and received a check within a few days. ' +
          'The prices they offer are by far the highest'
      },
      {
        name: 'Rock Lee',
        star: 4,
        date: new Date(),
        message: 'Great service. I just wish the tracking information would be updated properly.' +
          ' Other than that it was a great way to earn more money.'
      }
    ];
    return {
      getReviews: function () {
        return reviews;
      }
    };
  });