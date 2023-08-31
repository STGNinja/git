const songList = document.getElementById('song-list');

// Fetch song data from the server
fetch('/api/songs')
    .then(response => response.json())
    .then(songs => {
        songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.className = 'song';
            songElement.innerHTML = `
                <img src="${song.albumCover}" alt="Album Cover">
                <div class="song-details">
                    <div class="song-name">${song.name}</div>
                </div>
            `;
            songList.appendChild(songElement);
        });
    });


    $(".btn-circle-download").click(function() {
        $(this).addClass("load");
        setTimeout(function() {
          $(".btn-circle-download").addClass("done");
        }, 1000);
        setTimeout(function() {
          $(".btn-circle-download").removeClass("load done");
        }, 5000);
      });
      

      