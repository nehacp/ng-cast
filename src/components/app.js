angular.module('video-player')

.component('app', {

  controller: function () {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
   
  templateUrl: 'src/templates/app.html'
});
