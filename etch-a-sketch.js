// Etch-a-sketch js 

//jquery is also used in this code


//function for creating a grid, num is designate rows + columns


function createGrid(num) {
    for (var rows=0; rows < num; rows++) {
        for (var columns=0; columns < num; columns++){
            $('#container').append("<div class='grid'></div");
             }        
        }

$('.grid').width(960/num);
$('.grid').height(960/num);
}

//function to clear grid

function gridClear() {
    
    $('.grid').remove();
}
    
    
//function to refresh grid and ask for new grid dimension

function refreshGrid() {
    
    var dime = prompt("Choose your new dimensions");
    gridClear();
    createGrid(dime);
}

//create a 16x16 grid when page loads
//hover effect to change color of square
//click of button to refrhesh Grid and ask for new dimensions


$(document).ready(function () {
    
    createGrid(16);
    
    $('.grid').mouseover(function() {
        $(this).css('background-color','black');
        });
    
        
            $('.but').click (function () {
                refreshGrid();
               
                 $('.grid').mouseover(function() {
                $(this).css('background-color','black');
                });
    
                
            });
        
 
    
    
});


