angular.module('video-player')

.component('app', {

  controller: function (youTube) {
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

    youTube.search('coffee', this.updateVideos);
    
    this.currentVideo = this.videos ? this.videos[0] : {};
  },
   
  templateUrl: 'src/templates/app.html'
});
