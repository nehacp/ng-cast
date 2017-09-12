angular.module('video-player')
.service('youTube', function($http) {
  let config = {
    q: '',
    maxResults: '5',
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video',
    key: window.YOUTUBE_API_KEY
  };


  let fetch = function(query, callback) {

    let request = 'https://www.googleapis.com/youtube/v3/search?';

    config.q = query;

    for (let key in config) {
      request += `${key}=${config[key]}&`;
    }
      
    return $http.get(request).then(function(response) {
      callback(response.data.items);
    }, function(response) {
      console.log('error', response);
    });
  };

  return {
    search: _.debounce(fetch, 500)
  };
});
