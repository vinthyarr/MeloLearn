// script.js
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("You clicked on: " + this.textContent);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("You clicked on: " + this.textContent);
        });
    });

    // Event listener for the "Explore Our Music" button
    const exploreMusicBtn = document.getElementById("explore-music-btn");
    if (exploreMusicBtn) {
        exploreMusicBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Programmatically submit the form
            const form = document.createElement("form");
            form.method = "POST";
            form.action = "/explore-music"; // Route to handle the button click
            document.body.appendChild(form);
            form.submit();
        });
    }
});


$(document).ready(function(){

    var playlist = [{
        title:"Malargalee",
        artist:"Miaow",
        mp3:"song1.mp3",
        oga:"song1.mp3",
        poster: "i1.jpg"
      },{
        title:"Vennilave",
        artist:"The Stark Palace",
        mp3:"song2.mp3",
        oga:"song2.mp3",
        poster: "i2.jpg"
      },{
        title:"Sagiyee",
        m4a: "song3.mp3",
        oga: "song3.mp3",
        poster: "i3.jpg"
    },
    { title:"Alaipayudhe",
    m4a: "song4.mp3",
    oga: "song4.mp3",
    poster: "i4.jpg"},
    {
        title:"Mustafa",
        m4a: "song5.mp3",
        oga: "song5.mp3",
        poster: "i5.jpg"
    },
    {
        title:"Ennavalee",
        m4a: "song6.mp3",
        oga: "song6.mp3",
        poster: "i6.jpg"
    },
    {
        title:"Pudhu vellai mazhai",
        m4a: "song7.mp3",
        oga: "song7.mp3",
        poster: "i7.jpg"
    },
    {
        title:"Bubble",
        m4a: "song8.mp3",
        oga: "song8.mp3",
        poster: "i8.jpg"
    },
    {
        title:"Bubble",
        m4a: "song9.mp3",
        oga: "song9.mp3",
        poster: "i9.jpg"
    },
    {
        title:"Bubble",
        m4a: "song10.mp3",
        oga: "song10.mp3",
        poster: "i10.jpg"
    }
    
];
  
    var cssSelector = {
      jPlayer: "#jquery_jplayer",
      cssSelectorAncestor: ".music-player"
    };
  
    var options = {
      swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
      supplied: "ogv, m4v, oga, mp3",
      volumechange: function(event) {
        $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
      },
      timeupdate: function(event) {
        $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
      }
    };
  
    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
    var PlayerData = $(cssSelector.jPlayer).data("jPlayer");
  
  
    // Create the volume slider control
    $( ".volume-level" ).slider({
       animate: "fast",
          max: 1,
          range: "min",
          step: 0.01,
          value : $.jPlayer.prototype.options.volume,
          slide: function(event, ui) {
              $(cssSelector.jPlayer).jPlayer("option", "muted", false);
              $(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
          }
    });
  
    // Create the progress slider control
    $( ".progress" ).slider({
          animate: "fast",
          max: 100,
          range: "min",
          step: 0.1,
          value : 0,
          slide: function(event, ui) {
              var sp = PlayerData.status.seekPercent;
              if(sp > 0) {
                  // Move the play-head to the value and factor in the seek percent.
                  $(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
              } else {
                  // Create a timeout to reset this slider to zero.
                  setTimeout(function() {
                       $( ".progress" ).slider("value", 0);
                  }, 0);
              }
          }
      });
  });
  // Update the JavaScript to handle playlist functionality and play the selected song

  $(document).ready(function() {
    var playlist = []; // Array to store playlist

    // Iterate over each song in the playlist and add it to the array
    $('.playlist li').each(function() {
        var song = {
            title: $(this).text(),
            mp3: $(this).data('src')
        };
        playlist.push(song);
    });

    // Initialize jPlayer with an empty playlist
    var player = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer",
        cssSelectorAncestor: ".music-player"
    }, [], {
        swfPath: "path/to/jplayer.swf",
        supplied: "mp3",
        wmode: "window"
    });

    // When a song is clicked in the playlist, play that song
    $('.playlist li').click(function() {
        var index = $(this).index();
        player.select(index); // Select the clicked song in the playlist
        player.play(); // Start playing the selected song
    });
});

  
    