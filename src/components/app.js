angular.module('video-player')

.component('app', {

  controller: function (youTube) {
    console.log('app', this);
    this.videos = window.exampleVideoData;
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
  
    this.updateVideos = (list) => {
      this.videos = list;
      this.currentVideo = this.videos[0];
    };

    this.searchResults = (input) => {
      youTube.search(input, this.updateVideos);
    };
    
    this.currentVideo = this.videos ? this.videos[0] : {};
  },
   
  templateUrl: 'src/templates/app.html'
});
