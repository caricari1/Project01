
var letters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y"];
var images = ['b1.jpg', 'b2.png', 'b3.jpg', 'c1.jpg', 'c2.jpg', 'c3.jpg', 'd1.jpg', 'd2.jpg', 'd3.jpg', 'f1.jpg', 'f2.jpg', 'f3.jpg', 'g1.jpg', 'g2.jpg', 'h1.jpg', 'h2.jpg', 'h3.jpg', 'j1.jpg', 'j2.jpg', 'j3.jpg', 'k1.jpg', 'k2.jpg', 'k3.jpg', 'l1.jpg', 'l2.jpg', 'l3.jpg', 'm1.jpg', 'm2.jpg', 'm3.jpg', 'n1.jpg', 'n2.jpg', 'n3.png', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'r1.jpg', 'r2.jpg', 'r3.jpg', 's1.png', 's2.jpg', 's3.jpg', 't1.png', 't2.jpg', 't3.png', 'v1.jpg', 'v2.jpg', 'v3.jpg', 'w1.jpg', 'w2.jpg', 'w3.jpg', 'y1.jpg', 'y2.jpg', 'y3.jpg' ];
var $letter;
var $card;

//add event listener to Play Now button. When clicked, button disappears, and random letter and images appear.
$(".button").click(function() {
  $(".button").remove();
  $( "#letter" ).addClass( "active" );
  $(".card").addClass("active");
  $("#stars").addClass("active");
  $letter = $("#letter").text(function( index ) {
    return letters[Math.floor(Math.random() * letters.length)];
  });

  //gets random images for each card
  var $card1 = $('#card1').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  var $card2 = $('#card2').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  var $card3 = $('#card3').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});

  //gets letter for card1
  var card1ImageString = $(card1).css("background-image");
  var card1Letter = card1ImageString[card1ImageString.length -8]
  console.log(card1ImageString, card1Letter)

  //gets letter for card2
  var card2ImageString = $(card2).css("background-image");
  var card2Letter = card2ImageString[card2ImageString.length -8]
  console.log(card2ImageString, card2Letter)

  //gets letter for card3
  var card3ImageString = $(card3).css("background-image");
  var card3Letter = card3ImageString[card3ImageString.length -8]
  console.log(card3ImageString, card3Letter)

  //if no cards match letter, ensure one card that matches letter randomly replaces one of the cards
  if((card1Letter !== $letter.text()) && (card2Letter !== $letter.text()) && (card3Letter !== $letter.text())){
    console.log("no cards match letter");
    $card = $(".card")
    var randomCard = [Math.floor(Math.random() * 3)]
  }
});

//compare letter to card that is clicked. If matches, star appears and new letter and cards are presented
$(".card").click(function(event){
  var imageString =  $(this).css("background-image");
  var letter = imageString[imageString.length - 8];
  console.log(letter, $letter.text() );
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
