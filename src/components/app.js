angular.module('video-player')

.component('app', {

  controller: function () {
    console.log('app', this);
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
  },
   
  templateUrl: 'src/templates/app.html'
});
