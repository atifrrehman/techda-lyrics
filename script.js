async function loadSongs() {

    const response = await fetch("songs.json");
    const songs = await response.json();

    const container = document.getElementById("songs-container");

    container.innerHTML = "";

    songs.forEach(song => {

        container.innerHTML += `
            <div class="song">
                <h3>${song.title}</h3>

                <p><b>Artist:</b> ${song.artist}</p>

                <p><b>Language:</b> ${song.language}</p>

                <button onclick="showLyrics(${song.id})">
                    Read Lyrics
                </button>
            </div>
        `;

    });

    window.allSongs = songs;
}

function showLyrics(id){

    const song = window.allSongs.find(s => s.id === id);

    if(!song) return;

    document.body.innerHTML = `
        <header>
            <h1>🎵 ${song.title}</h1>
        </header>

        <div style="padding:40px;max-width:900px;margin:auto;">

            <h2>${song.artist}</h2>

            <p><b>Language:</b> ${song.language}</p>

            <hr><br>

            <pre style="white-space:pre-wrap;font-size:18px;line-height:2;">
${song.lyrics}
            </pre>

            <br>

            <button onclick="location.reload()">
                ⬅ Back
            </button>

        </div>
    `;
}

loadSongs();