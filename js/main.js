(function(){

  $(document).ready(init);

  function init(){
    $(window).scroll(checkViewPortPosition);
  }

  function checkViewPortPosition(){
    var position = $('body').scrollTop();
    // var marker = $('.team-container').offset().top;
    if (position > 530) {
      $('.subscription-container').hide();
      $('.side-nav-search').show();
    } else {
      $('.side-nav-search').hide();
      $('.subscription-container').show();
    }
  }
})();
