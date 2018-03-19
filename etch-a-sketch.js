// Etch-a-sketch js 
//jquery is also used in this code
//function for creating a grid, num is designate rows + columns
<<<<<<< HEAD
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

=======
//returns a promise so we can know when the dom is done being created
function createGrid(num) {
    var promise = new Promise(function(resolve, reject) {
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
            resolve();
        }, 0);
    });
    return promise;
>>>>>>> kriddy-etch
}

//function to clear grid
function gridClear() {
    $('#container').empty();
}


//function to refresh grid and ask for new grid dimension
function refreshGrid() {

    var dime = prompt("Choose your new dimensions");
    gridClear();
    var promise = createGrid(dime);

    promise.then(setupMouseOver.bind(this));
}

//Setup the mouseOver event on the grid class items
function setupMouseOver() {
    $('.grid').mouseover(function() {
        $(this).addClass('hovered');
    });
}

//create a 16x16 grid when page loads
//hover effect to change color of square
//click of button to refrhesh Grid and ask for new dimensions
$(document).ready(function() {

<<<<<<< HEAD
    createGrid(16);

    $('.grid').mouseover(function() {
         var colorChange = document.getElementById('.grid');
        colorChange.style.backgroundColor = black;
    
    });


    $('.but').click(function() {
        refreshGrid();

        $('.grid').mouseover(function() {
             var colorChange = document.getElementById('.grid');
        colorChange.style.backgroundColor = black;
        });
    });
=======
    var promise = createGrid(16);

    $('.but').click(function() {
        refreshGrid();

        $('.grid').mouseover(function() {
            $(this).css('background-color', 'black');
        });
    });

    //this function could also be written as:
    // promise.then(function() {
    //     setupMouseOver();
    // })
    //The .bind is a shorter way of writting a function that just calls another function
    //passing in "this" just sets the scope of the function
    promise.then(setupMouseOver.bind(this));
>>>>>>> kriddy-etch
});