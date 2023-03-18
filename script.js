//1. On page load, hide the unordered list with class "item-list".
  $(document).ready(function () {
  $('.item-list').hide();
  });

//2. When a user hovers over the h3 element with id "toggleHeader", use the toggle jQuery method to show/hide the list with class "item-list".
  $('#toggleHeader').hover(function() {
    $('.item-list').toggle();
  });


//3. Add a event listener to the input field with id "keypressInput" so that on keypress, the value in the input field is displayed in the div with id "outputTarget".
  $('#keypressInput').on('keypress', function() {
    var inputValue = $(this).val();
    $('#outputTarget').text(inputValue);
  });


//4. When the mouse moves anywhere on the article with class "main-article", log to the console "The mouse is moving!".
  $('.main-article').hover('mousemove', function() {
    console.log('The mouse is moving!');
  });

