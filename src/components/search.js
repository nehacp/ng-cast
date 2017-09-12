angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },

  controller: function () {

    this.inputClick = () => {  
    };

    this.onClick = (input) => {
      this.result(input);
      this.input = '';
    };
  },

  templateUrl: 'src/templates/search.html'
});
