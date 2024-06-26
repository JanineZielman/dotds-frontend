balls = document.body
li = balls.getElementsByClassName("ball");


var ballCount = li.length

,
    ballMinSize = 50, 
    ballMaxSize = 200,
    container = $('.balls');

$(function() {
  initBalls();
  balls = window.setInterval(moveBalls,25); // 24 FPS
  $(window).resize(function() { moveBallsIntoBounds(); });
});


// Random number generator. Takes a minimum, maximum, and a boolean for whether the random number should be an integer.
function rand(min,max,isInt) {
  var min = min || 0, 
      max = max || 1, 
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
  return (isInt) ? Math.round(num) : num;
}

// Creates the balls, puts them in the container, and gives them a random size, color, opacity, starting location, and direction/speed of movement.
function initBalls() {
  container.css({'position':'relative'});
  for (i=0;i<ballCount;i++) {
    // var newBall = $('<div class="ball" />').appendTo(container),
    //     size = rand(ballMinSize,ballMaxSize);
    var newBall = $(li[i]),
      size = rand(ballMinSize,ballMaxSize);
    newBall.css({
      'position':'absolute',

      'background-color': 'rgb('+rand(50,255,true)+','+rand(50
                                                           ,255,true)+','+rand(50,                                                                  
                                                                               255,true)+')',
      'top': rand(0,container.height()-size),
      'left': rand(0,container.width()-size)
    }).attr({
      'data-dX':rand(-1,1),
      'data-dY':rand(1,1)
    });
  }
}

// Moves the balls based on their direction/speed of movement (saved as a data attribute). If the movement will take them outside of the container, they reverse direction along that axis.
function moveBalls() {
  var maxX = container.width() - 200,
      maxY = container.height();
  $('li',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        dX = parseFloat(ball.attr('data-dX')),
        dY = parseFloat(ball.attr('data-dY')),
        size = ball.height();
    if(x+dX+size > maxX || x+dX < 0) ball.attr('data-dX',(dX=-dX)); 
    if(y+dY+size > maxY || y+dY < 0) ball.attr('data-dY',(dY=-dY)); 
    ball.css({'top':y+dY,'left':x+dX});
  });
}

// Move the balls back within the bounds of the container if the window (ergo, possibly the container) is resized. Because we're positioning from the top/left corners, we only have to worry about the bottom/right sides.
function moveBallsIntoBounds() {
  var maxX = container.width(),
      maxY = container.height();  
  $('li',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        size = ball.height();
    if (x+size > maxX) ball.css({ left: maxX-size+'px' });;
    if (y+size > maxY) ball.css({ top: maxY-size+'px' });;    
  });
}