var homebutton = $('homebutton');
var perspective = $('perspective');
var resources = $('resources');
var aboutus = $('aboutus');

var quotes=[
  "don't value you're body over your being.",
  "your weight does not define your worth.",
  "it's okay to love your body just the way it is.",
  "life is way too short to be unkind to yourself.",
  "don't let your mind bully your body.",
  "surround yourself with tacos, not negativity.",
  "your body isn't flawed, your thinking is.",
  "happiness isn't size specific.",
  "you are imperfect, permanently & inevitably flawed, and you are beautiful.",
  "be-you-tiful",
  "your body is not wrong. society is.",
  "confidence will make you happier than any diet.",
  "what doesn't kill you makes you a bad bitch.",
  "sometimes you gotta be a beauty and a beast.",
  "strive for progress, not perfection.",
  "the only person i need to compare myself to is my yesterday self.",
  "believe in yourself. you will be unstoppable.",
  "you are beautiful. you are strong. you are worth it.",
  "smiling doesn't necessarily mean you're happy. sometimes, it just means you're strong.",
  "you are awesome sauce !",
  "put all excuses aside and remember this: you are capable.",
  "you are everything, even when you're treated like nothing.",
  "self-confidence is the best outfit, rock it and own it.",
  "you are powerful, brilliant and brave.",
  "you were born to be real, not to be perfect.",
  "smile. happiness looks gorgeous on you.",
  "don't value your body over your being.",
  "a scale can never measure your worth.",
  "real girls are never perfect and perfect girls are never real.",
  "inhale confidence, exhale doubt."
]
function newQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
  document.getElementById('glitterimage').style='display:none';
}

var more=[
  "happiness is not something ready made, it comes from your own actions!",
  "keep smiling! happiness looks gorgeous on you!",
  "your life is as good as your mindset.",
  "comparison is the thief of joy.",
  "strong is the new pretty.",
  "you're like, really pretty.",
  "be strong. be beautiful. be YOU.",
  "loving yourself is the greatest revolution",
  "your body hears everything your mind says. stay positive.",
  "be your own hero.",
  "you are amazing! remember that.",
  "better to be strong than pretty and useless.",
  "whoever is trying to bring you down is already below you.",
  "you're sassy, classy and bad-assy.",
  "darling, you are fabulous.",
  "spread your wings and fly. you deserve to be a champion.",
  "just in case you need reminding, you're beautiful.",
  "your smile makes you pretty. your personality makes you beautiful.",
  "dress yourself in confidence everyday.",
  "confidence is not 'they will like me.' confidence is 'i'll be find if they don't.'",
  "beauty is self confidence applied directly to the face.",
  "confidence is like a muscle. the more you use it, the stronger it gets.",
  "learn to love yourself first.",
  "beauty begins the moment you decide to be yourself.",
  "no one is you and that is your super power.",
  "you don't have to be liked by everybody to like yourself.",
  "be you. do you. for you.",
  "no excuses. no complaints. just go out there and kill it.",
  "prove them wrong."
]
function moreQuote() {
  var randomNumber = Math.floor(Math.random()*(more.length));
  document.getElementById('quoteDisplay').innerHTML=more[randomNumber];
  document.getElementById('glitterimage').style='display:none';
}

var go=[
  "you're doing amazing sweetie!",
  "you are pretty fucking awesome. keep that shit up.",
  "you are amazing. own that shit",
  "you are a badass.",
  "stay focused and extra sparkly!",
  "sunshine mixed with a little hurricane.",
  "never apologize for being a powerful woman.",
  "you are amazing.",
  "she's a little sass and a lot of badass.",
  "a wise girl knows her limits, a smart girl knows she has none.",
  "princess? no bitch, queen.",
  "giving a fuck doesn't really go with my outfit.",
  "future CE0,000,000",
  "stay humble enough to know you're far from perfect. stay confident enough to know you're the shit.",
  "you glow girl.",
  "self love is the greatest middle finger of all time.",
  "i just took a DNA test. turns out, i'm 100% that bitch.",
  "be a goal digger.",
  "hello gorgoeous.",
  "do you, boo.",
  "your soul's too lit to give a shit.",
  "empower the women around you.",
  "here's to looking cute and getting shit done today.",
  "surround yourself with people who get it.",
  "be kind. even on your bad days.",
  "empowered women empower women.",
  "don't stop until you're proud.",
  "just killin' it as always.",
  "real queens fix eachother's crowns."
]

function goYou() {
  var randomNumber = Math.floor(Math.random()*(go.length));
  document.getElementById('quoteDisplay').innerHTML=go[randomNumber];
  document.getElementById('glitterimage').style='display:block';
}

// slideshow javascript

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
