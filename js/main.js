function main(){
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').show();
  });
}
$(document).ready(main);