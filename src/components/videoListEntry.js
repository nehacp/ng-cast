angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },

  controller: function () {
    console.log('video entry', this);
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
