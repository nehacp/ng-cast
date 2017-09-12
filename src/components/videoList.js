angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  
  controller: function() {
    console.log('videolist', this);
  },

  templateUrl: 'src/templates/videoList.html'
});
