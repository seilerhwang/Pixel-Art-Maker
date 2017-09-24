var color = '#000000';
var height;
var width;
var mousedownState = false;

// Saves color selection by user
$('input[type=radio]').change(function(){
  switch ($(this).val()) {
    case '1':
        color = $('#colorPicker1').val();
        break;
    case '2':
        color = $('#colorPicker2').val();
        break;
    case '3':
        color = $('#colorPicker3').val();
        break;
    case '4':
        color = $('#colorPicker4').val();
        break;
  };
  return false;
})

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid());

// Creates canvas based on user selection
function makeGrid(){
  height = $('#input_height').val();
  width = $('#input_width').val();
  let tableMarkup ="";
  for (x = 0; x < height; x++){
    tableMarkup += '<tr>';
    for (y = 0; y < width; y++){
      tableMarkup += '<td>&nbsp;</td>'
    }
    tableMarkup += '</tr>'
  }
  $('#pixel_canvas').html(tableMarkup)
  return false;
}

// Drawing works when user clicks/drags on each cell
$('#pixel_canvas').delegate('td', 'mousedown', function(){
  mousedownState = true;
  $(this).css('background', color);
}).delegate('td','mouseenter',function(){
  if(mousedownState){
    $(this).css('background', color);
  }
});
$('html').bind('mouseup', function(){
  mousedownState = false;
})

// Clear the design
$('input[type=reset]').click(function(){
  makeGrid();
})

// Save the design as html
$('#save').click(function(){
  $('#design_html').val("<table style='width: 100%; border-collapse: collapse;'>" + $("#pixel_canvas").html() + "</table>")
})
