angular.module('video-player')

.component('app', {

  controller: function () {
    console.log('app', this);
    this.videos = window.exampleVideoData;
    this.currentVideo = {};
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.searchResults = (input) => {
      console.log('input', input);
      //youtube
    };

  },
   
  templateUrl: 'src/templates/app.html'
});
