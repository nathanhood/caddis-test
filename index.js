(function(){

  $(document).ready(init);

  function init(){
    $('.team-container').scroll(checkViewPortPosition);
  }

  function checkViewPortPosition(){
    console.log('here');
    // var position = $('body').scrollTop();
    // console.log(position);
  }
})();
