
var letters = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y"];
var images = ['b1.jpg', 'b2.png', 'b3.jpg', 'c1.jpg', 'c2.jpg', 'c3.jpg', 'd1.jpg', 'd2.jpg', 'd3.jpg', 'f1.jpg', 'f2.jpg', 'f3.jpg', 'g1.jpg', 'g2.jpg', 'h1.jpg', 'h2.jpg', 'h3.jpg', 'j1.jpg', 'j2.jpg', 'j3.jpg', 'k1.jpg', 'k2.jpg', 'k3.jpg', 'l1.jpg', 'l2.jpg', 'l3.jpg', 'm1.jpg', 'm2.jpg', 'm3.jpg', 'n1.jpg', 'n2.jpg', 'n3.png', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'r1.jpg', 'r2.jpg', 'r3.jpg', 's1.png', 's2.jpg', 's3.jpg', 't1.png', 't2.jpg', 't3.png', 'v1.jpg', 'v2.jpg', 'v3.jpg', 'w1.jpg', 'w2.jpg', 'w3.jpg', 'y1.jpg', 'y2.jpg', 'y3.jpg' ];
var $letter;
var round = 0;

//add event listener to Play Now button. When clicked, button disappears, and random letter and images appear.

$(".button").click(function() {
  $(".button").remove();
  $("#books").remove();
  $("h1").remove();
  $( "#letter" ).addClass( "active" );
  $(".card").addClass("active");
  $("#stars").addClass("active");
  $letter = $("#letter").text(function( index ) {
    return letters[Math.floor(Math.random() * letters.length)];
  });

  var randomCard = $(".card").eq(Math.floor(Math.random() * 3));
  console.log(randomCard);

  //loop through image array to find first image that matches letter and place that image in random card
  for(i=0;i<images.length;i++){
    var imageName = images[i]
    var imageLetter = imageName.substring(0,1)
    if(imageLetter === $letter.text()){
      console.log(imageName)
      randomCard.css({"background-image": 'url(img/' + imageName + ')'})
    }
  }
  //gets random images for remaining cards that do not match letter
      if ($('#card1').css('background-image') == 'none') {
        console.log('Card1 does not have a background image');
        $('#card1').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
      }

      if ($('#card2').css('background-image') == 'none') {
        console.log('Card2 does not have a background image');
        $('#card2').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
      }

      if ($('#card3').css('background-image') == 'none') {
        console.log('Card3 does not have a background image');
        $('#card3').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
      }


});

//compare letter to card that is clicked. If matches, star appears and new letter and cards are presented

$(".card").click(function(event){
  var imageString =  $(this).css("background-image");
  var letter = imageString[imageString.length - 8];
  console.log(letter, $letter.text() );
  round = round + 1;
  console.log(round);
  if(round > 5){
    alert("Game over!");
    location.reload();
  }
  if(letter == $letter.text()){
    alert("Good job!");
    $('<div class="star" style="width: 150px; height: 100px; background-image: url(img/star297837_640.png);\
    background-size: contain; background-repeat: no-repeat; margin: 20px"></div>').appendTo("#stars");
    $('.card').css('background-image', 'none');
  }
//} else {
    //alert("Sorry. Wrong answer.")
  //}


  $letter = $("#letter").text(function( index ) {
    return letters[Math.floor(Math.random() * letters.length)];
  });


  var randomCard = $(".card").eq(Math.floor(Math.random() * 3));
  console.log(randomCard);

  //loop through image array to find first image that matches letter and place that image in random card
  for(i=0;i<images.length;i++){
    var imageName = images[i]
    var imageLetter = imageName.substring(0,1)
    if(imageLetter === $letter.text()){
      console.log(imageName)
      randomCard.css({"background-image": 'url(img/' + imageName + ')'})
    }
  }
  if ($('#card1').css('background-image') == 'none') {
    console.log('Card1 does not have a background image');
    $('#card1').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  }

  if ($('#card2').css('background-image') == 'none') {
    console.log('Card2 does not have a background image');
    $('#card2').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  }

  if ($('#card3').css('background-image') == 'none') {
    console.log('Card3 does not have a background image');
    $('#card3').css({"background-image": 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  }
});
