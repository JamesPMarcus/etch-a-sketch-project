// Etch-a-sketch js 
//jquery is also used in this code
//function for creating a grid, num is designate rows + columns
function createGrid(num) {
    var container = $("#container");
    var overlay = $('.loading-overlay');
    var containerWidth = container.width();
    var containerHeight = container.height();

    overlay.removeClass('hidden');

    if (containerWidth > containerHeight) {
        container.width(containerHeight);
    } else {
        container.height(containerWidth);
    }

    //defer the execution of the grid calculations to allow the DOM to refresh with loading
    //Promises might be a better solution
    setTimeout(function() {
        for (var rows = 0; rows < num; rows++) {
            var row = $("<div class='row'></div>")
            for (var columns = 0; columns < num; columns++) {
                row.append("<div class='grid'></div");
            }
            container.append(row);
        }

        overlay.addClass('hidden');
    }, 0);

}

//function to clear grid
function gridClear() {
    $('#container').empty();
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
$(document).ready(function() {

    createGrid(16);

    $('.grid').mouseover(function() {
        $(this).addClass('hovered');
    });


    $('.but').click(function() {
        refreshGrid();

        $('.grid').mouseover(function() {
            $(this).css('background-color', 'black');
        });
    });
});