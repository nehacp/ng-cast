angular.module('video-player')

.component('app', {

  controller: function (youTube) {
    console.log('app', this);
    this.videos = [];
    this.currentVideo = {};
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
  
    this.updateVideos = (list) => {
      this.videos = list;
    };

    this.searchResults = (input) => {
      youTube.search(input, this.updateVideos);
    };

    youTube.search('coffee', this.updateVideos);

  },
   
  templateUrl: 'src/templates/app.html'
});
