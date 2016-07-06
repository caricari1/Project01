//Put event listener on start button so that when you click on button, you are taken to the game screen

//Clicking on the start button should also trigger the program to randomly select a letter
var letters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y"];
var images = ['b1.jpg', 'b2.png', 'b3.jpg', 'c1.jpg', 'c2.jpg', 'c3.jpg', 'd1.jpg', 'd2.jpg', 'd3.jpg', 'f1.jpg', 'f2.jpg', 'f3.jpg', 'g1.jpg', 'g2.jpg', 'h1.jpg', 'h2.jpg', 'h3.jpg', 'j1.jpg', 'j2.jpg', 'j3.jpg', 'k1.jpg', 'k2.jpg', 'k3.jpg', 'l1.jpg', 'l2.jpg', 'l3.jpg', 'm1.jpg', 'm2.jpg', 'm3.jpg', 'n1.jpg', 'n2.jpg', 'n3.png', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'r1.jpg', 'r2.jpg', 'r3.jpg', 's1.png', 's2.jpg', 's3.jpg', 't1.png', 't2.jpg', 't3.png', 'v1.jpg', 'v2.jpg', 'v3.jpg', 'w1.jpg', 'w2.jpg', 'w3.jpg', 'y1.jpg', 'y2.jpg', 'y3.jpg' ];
var $letter;

$(".button").click(function() {
  $(".button").remove();
  $( "#letter" ).addClass( "active" );
  $(".card").addClass("active");
  $("#stars").addClass("active");
  $letter = $("#letter").text(function( index ) {
    return letters[Math.floor(Math.random() * letters.length)];
  });
  var $card1 = $('#card1').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  var $card2 = $('#card2').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  var $card3 = $('#card3').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  var card1ImageString = $(card1).css("background-image");
  var card1Letter = card1ImageString[card1ImageString.length -8]
  console.log(card1ImageString, card1Letter)
  var card2ImageString = $(card2).css("background-image");
  var card2Letter = card2ImageString[card2ImageString.length -8]
  console.log(card2ImageString, card2Letter)
  var card3ImageString = $(card3).css("background-image");
  var card3Letter = card3ImageString[card3ImageString.length -8]
  console.log(card3ImageString, card3Letter)
  if(card1Letter !== $letter.text()){
    console.log("card1 does not match letter")
  } else if (card1Letter === $letter.text()){
    console.log("card1 matches letter")
  }
  if(card2Letter !== $letter.text()){
    console.log("card2 does not match letter")
  } else if (card2Letter === $letter.text()){
    console.log("card2 matches letter")
  }
  if(card3Letter !== $letter.text()){
    console.log("card3 does not match letter")
  } else if (card3Letter === $letter.text()){
    console.log("card3 matches letter")
  }
});

$(".card").click(function(event){
  var imageString =  $(this).css("background-image");
  var letter = imageString[imageString.length - 8];
  console.log(letter, $letter.text() );
  // compare letter
  // if they match score a point and redo game
  if(letter == $letter.text()){
    console.log("matches");
    $("#star1").addClass("active");
    $letter = $("#letter").text(function( index ) {
      return letters[Math.floor(Math.random() * letters.length)];
    });
    var $card1 = $('#card1').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var $card2 = $('#card2').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var $card3 = $('#card3').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  }
});

//ensure one image matches letter
