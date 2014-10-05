(function(){

  $(document).ready(init);

  function init(){
    $(window).scroll(toggleSideNavSearch);
  }

  function toggleSideNavSearch(){
    var position = $('body').scrollTop();

    if (position > 530) {
      $('.js-subscription-container').hide();
      $('.js-side-nav-search').show();
    } else {
      $('.js-side-nav-search').hide();
      $('.js-subscription-container').show();
    }
  }
})();
