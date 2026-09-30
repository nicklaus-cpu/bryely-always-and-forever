const poems = [
    {
        title: "For Bryley",
        text: `Bryley, you came into my life,
and somehow made ordinary moments feel different.

Your name became a thought I carried,
your smile became a place my mind returned to.

If I could turn every feeling into words,
I'd still need more pages to explain you.

So this is my little reminder:
some people don't just enter your story—
they become part of it.`
    },

    {
        title: "When I Miss You",
        text: `There are nights when everything gets quiet,
and somehow you're the loudest thought in my mind.

I miss the little things,
the conversations, the laughter,
and simply knowing you're there.

Distance can separate two people,
but it can't erase what they mean to each other.

So whenever you miss me too,
look at the moon and remember—
somewhere beneath the same sky,
I'm thinking of you.`
    },

    {
        title: "The Way You Smile",
        text: `There's something about your smile
that words never quite manage to explain.

It can turn an ordinary moment
into something worth remembering.

Maybe you don't realize
how much light you carry.

But I do.

And if I ever forget to tell you,
let this poem remind you:
your smile has always been one of my favorite things.`
    },

    {
        title: "If Words Could Hug",
        text: `If words could reach through a screen,
I'd send you enough to keep you warm.

I'd tell you that you're appreciated,
that you're thought about,
and that you matter more than you know.

So until I can say everything in person,
let these words stand in my place.

Consider this poem
a little hug from me to you.`
    },

    {
        title: "Still Choosing You",
        text: `Love isn't always perfect.
Sometimes life gets complicated,
and sometimes words fail us.

But even through the difficult moments,
there are people worth choosing.

And if I had to choose again,
I'd still find my way back to you.

Not because everything is perfect,
but because what we have
means something to me.`
    },

    {
        title: "You Feel Like Home",
        text: `Home isn't always a place.
Sometimes it's a person.

It's the feeling of being understood,
the comfort of being yourself,
and the peace that comes with knowing
someone genuinely cares.

And somehow,
you became that feeling for me.

Maybe that's why
your name feels less like a name
and more like home.`
    },

    {
        title: "In Every Lifetime",
        text: `If life gave me another beginning,
another city,
another lifetime,
another thousand chances—

I'd still hope our paths crossed.

Maybe we'd meet differently,
maybe our story would change,
but I'd still want to know you.

Because some connections
feel too meaningful to be accidental.`
    },

    {
        title: "A Letter I Never Sent",
        text: `Dear Bryley,

There are things I've wanted to say
that never seemed to fit inside a conversation.

So I'm leaving them here instead.

Thank you for being a part of my story.
Thank you for the moments,
the memories,
and everything in between.

Whatever pages come next,
I'll always be grateful
that your name became part of mine.

With love,
always. ❤️`
    }
];


function navigation() {
    return `
        <div class="navigation">
            <button onclick="showDashboard()">🏠 Home</button>
        </div>
    `;
}


function enterApp() {
    showDashboard();
}


function showDashboard() {
    document.body.innerHTML = `
        <div class="dashboard">
            <div class="dashboard-content">

                <p class="small">WELCOME TO</p>

                <h1>Bryley</h1>

                <p class="welcome">
                    A little world made just for you ❤️
                </p>

                <div class="menu">
                    <button onclick="showPoems()">📖 Poems</button>
                    <button onclick="openSection('music')">🎵 Music</button>
<button onclick="openPrivateLock()">🔐 Private</button>                </div>

            </div>
        </div>
    `;
}


function showPoems() {
    let poemCards = "";

    poems.forEach((poem, index) => {
        poemCards += `
            <button class="poem-button" onclick="openPoem(${index})">
                ${index + 1}. ${poem.title}
            </button>
        `;
    });

    document.body.innerHTML = `
        <div class="page">
            <div class="page-content">

                <p class="small">WORDS FROM MY HEART</p>

                <h1>Poems</h1>

                <div class="poem-list">
                    ${poemCards}
                </div>

                ${navigation()}

            </div>
        </div>
    `;
}


function openPoem(index) {
    const poem = poems[index];

    document.body.innerHTML = `
        <div class="page">
            <div class="poem-content">

                <p class="small">
                    POEM ${index + 1} OF ${poems.length}
                </p>

                <h1>${poem.title}</h1>

                <div class="poem-text">
                    ${poem.text.replace(/\n/g, "<br><br>")}
                </div>

                <div class="poem-navigation">

                    ${
                        index > 0
                            ? `<button onclick="openPoem(${index - 1})">← Previous</button>`
                            : ""
                    }

                    ${
                        index < poems.length - 1
                            ? `<button onclick="openPoem(${index + 1})">Next →</button>`
                            : ""
                    }

                </div>

                <button class="back-button" onclick="showPoems()">
                    ← All Poems
                </button>

                ${navigation()}

            </div>
        </div>
    `;
}


function openSection(section) {

    if (section === "music") {
        showMusic();
    }

    if (section === "private") {
        showPrivate();
    }
}


// ===============================
// MUSIC
// ===============================

const music = [
    { title: "You and I", artist: "Lexnour", file: "track5.mp3" },
    { title: "Perfect", artist: "Ed Sheeran", file: "track3.mp3" },
    { title: "Shape of You", artist: "Ed Sheeran", file: "track4.mp3" },
    { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", file: "track1.mp3" },
    { title: "Let Me Love You", artist: "Justin Bieber", file: "track2.mp3" }
];

function showMusic() {
    let tracks = "";

    music.forEach((song, index) => {
        tracks += `
            <button
                class="music-card"
                onclick="openSong(${index})">

                <div class="music-number">
                    ${index + 1}
                </div>

                <div class="music-info">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>

                <div class="music-arrow">
                    ♡
                </div>

            </button>
        `;
    });

    document.body.innerHTML = `
        <div class="music-page">

            <div class="music-header">
                <div class="music-decoration">🌸 ✨ 🦋 ✨ 🌸</div>

                <p class="small">OUR LITTLE SOUNDTRACK</p>

                <h1>Music 🎀</h1>

                <p class="music-intro">
                    Songs that remind me of you.
                </p>
            </div>

            <div class="music-list">
                ${tracks}
            </div>

            <div class="music-home">
                <button onclick="showDashboard()">
                    🏠 Home
                </button>
            </div>

        </div>
    `;
}

// ===============================
// PRIVATE SECTION
// ===============================

let currentAudio = null;

function openSong(index) {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    const song = music[index];

    document.body.innerHTML = `
        <div class="song-page">

            <div class="song-decoration">
                🌸 ✨ 🎀 ✨ 🌸
            </div>

            <p class="small">A SONG FOR US</p>

            <div class="album-heart">
                ♡
            </div>

            <h1>${song.title}</h1>

            <p class="song-artist">${song.artist}</p>

            <p class="song-note">
                Press play and let the song tell the story. 💗
            </p>

            <div class="song-controls">

                <button onclick="previousSong(${index})">
                    ⏮
                </button>

                <button
                    class="main-play"
                    onclick="toggleSong(${index})">
                    ▶
                </button>

                <button onclick="nextSong(${index})">
                    ⏭
                </button>

            </div>

            <div class="song-navigation">

                <button onclick="showMusic()">
                    🎵 Songs
                </button>

                <button onclick="showDashboard()">
                    🏠 Home
                </button>

            </div>

        </div>
    `;

    currentAudio = new Audio("music/" + song.file);
}

function toggleSong(index) {

    if (!currentAudio) {
        openSong(index);
        return;
    }

    const button = document.querySelector(".main-play");

    if (currentAudio.paused) {
        currentAudio.play();
        button.textContent = "⏸";
    } else {
        currentAudio.pause();
        button.textContent = "▶";
    }
}

function previousSong(index) {

    if (index > 0) {
        openSong(index - 1);
    }
}

function nextSong(index) {

    if (index < music.length - 1) {
        openSong(index + 1);
    }
}
function showPrivate() {

    document.body.innerHTML = `
        <div class="private-page">

            <div class="private-header">
                <div class="private-lock">🔐</div>

                <p class="small">JUST BETWEEN US</p>

                <h1>Private</h1>

                <p>
                    Some memories are meant to stay between two hearts. ❤️
                </p>
            </div>

            <div class="private-menu">

                <button onclick="showHowWeMet()">
                    📖 How We Met
                </button>

                <button onclick="showPrivateChapter('bonnie')">
                    🖤 Our Version of Bonnie & Clyde
                </button>

                <button onclick="showSeptemberChapter()">
                    💌 02 September 2026
                </button>

                <button onclick="showPictures()">
                    📸 Our Pictures
                </button>

            </div>

            <div class="navigation">
                <button onclick="showDashboard()">
                    🏠 Home
                </button>
            </div>

        </div>
    `;
}

function showHowWeMet() {

    document.body.innerHTML = `
        <div class="private-story-page">

            <div class="private-story-content">

                <p class="small">OUR BEGINNING</p>

                <h1>How We Met</h1>

                <div class="private-story-text">

                    <p>
                        I was really bored one day, strolling down the streets
                        for no reason, when I met Angie, a friend of mine.
                        So, Angie has an affair with Nato, a friend of mine too.
                    </p>

                    <p>
                        While talking to Angie as usual, I saw this gorgeous gal.
                        She seemed lost on her phone.
                    </p>

                    <p>
                        That moment I stared at her, I knew that this was sent
                        from above. That one gal who made my heart skip a beat
                        after months of being single. After months of desperation.
                    </p>

                    <p>
                        Then I started plotting how I was going to lay my hands
                        on this jewel.
                    </p>

                    <p>
                        Then I remembered that the only person who listens to
                        Angie is Nato. I couldn't tell anyone about my plot.
                    </p>

                    <p>
                        Two days later, I saw Angie in another block visiting
                        one of her fake friends. Then I called Nato and told him
                        that Angie was up to no good. He said it was under control.
                    </p>

                    <p>
                        So I told Angie that we wanted to see her. She gave us
                        a time frame. I knew automatically that the new girl
                        was going to come too.
                    </p>

                    <p>
                        They were heading for a math lesson. Angie told us that
                        she needed some company. I had a mission, yet Nato didn't
                        know about it.
                    </p>

                    <p>
                        So I dragged time as much as I could by taking the long way.
                        Then, after that, we had to see Sheckaina, another friend
                        of Angie. We walked her to the lesson while Nato was
                        pretending as if he wasn't into his girl.
                    </p>

                    <p>
                        When we arrived, I noticed the girl wasn't there.
                    </p>

                    <p class="story-emphasis">
                        I was hurt.
                    </p>

                    <p>
                        So we decided to head back home. Along the way, I met
                        the beautiful friend. I didn't talk to her, though.
                    </p>

                    <p>
                        I convinced Nato to persuade Angie to bring her friends too.
                        Then our friend Tsano, who completes the friend group,
                        came after our phone call.
                    </p>

                    <p>
                        We told him the plot, and he agreed.
                    </p>

                    <p>
                        We called Angie and told her to bring her other two friends.
                        After that, we waited for the girls.
                    </p>

                    <p>
                        Unfortunately, Angie brought one friend.
                    </p>

                    <p>
                        I told Tsano that I was taking the shot.
                    </p>

                    <p>
                        He understood the assignment.
                    </p>

                    <p>
                        I was told she was nervous to come inside. I had to step out.
                    </p>

                    <p class="story-ending">
                        As a nigga who knew his plot, I met the woman of my dreams. ❤️
                    </p>

                </div>

                <div class="navigation">

                    <button onclick="showPrivate()">
                        ← Back to Private
                    </button>

                    <button onclick="showDashboard()">
                        🏠 Home
                    </button>

                </div>

            </div>

        </div>
    `;
}

function showPrivateChapter(chapter) {

    if (chapter === "bonnie") {

        document.body.innerHTML = `
            <div class="private-story-page">

                <div class="private-story-content">

                    <p class="small">OUR VERSION</p>

                    <h1>Bonnie & Clyde</h1>

                    <p class="song-note">
                        Not their story. Ours.
                    </p>

                    <div class="private-story-text">

                        <p>
                            Every love story has its own language.
                            Ours was never supposed to be ordinary.
                        </p>

                        <p>
                            We weren't Bonnie and Clyde because of the
                            chaos, the danger, or the legend.
                        </p>

                        <p>
                            We were our own version because of the way
                            two people could look at the world and still
                            choose to stand beside each other.
                        </p>

                        <p>
                            If the world became too loud, I'd be your quiet.
                            If you ever felt lost, I'd find my way back to you.
                            And when life tested us, we'd remember why
                            we started in the first place.
                        </p>

                        <p>
                            Bonnie had Clyde.
                            Clyde had Bonnie.
                        </p>

                        <p>
                            And in our version,
                            I have you.
                        </p>

                        <p>
                            No perfect story.
                            No perfect people.
                            Just two hearts writing something
                            that belongs to them.
                        </p>

                        <p class="story-ending">
                            Against the world when we have to.
                            Beside each other when we can.
                            ❤️
                        </p>

                    </div>

                    <div class="navigation">

                        <button onclick="showPrivate()">
                            ← Back to Private
                        </button>

                        <button onclick="showDashboard()">
                            🏠 Home
                        </button>

                    </div>

                </div>

            </div>
        `;
    }
}

function showSeptemberChapter() {

    document.body.innerHTML = `
            <div class="private-story-page">

                <div class="private-story-content">

                    <p class="small">A DAY TO REMEMBER</p>

                    <h1>02 September 2026</h1>

                    <div class="private-story-text">

                        <p>
                            The day was born as usual, but I had too much joy
                            to conceal.
                        </p>

                        <p>
                            It was getting closer to her birthday, and I was
                            genuinely happy to be part of her special day.
                            They told us they'd be around after a while,
                            and I was really anticipating it.
                        </p>

                        <p>
                            So was Nato. So was Tsano.
                        </p>

                        <p>
                            After everything that happened, my bond with Nato
                            had grown stronger than ever. And Tsano and I?
                            We went way back — all the way to 2014.
                        </p>

                        <p>
                            Then they started taking too long.
                            I couldn't contain myself.
                        </p>

                        <p>
                            It was going to be the first time we'd see each other
                            after spending so much time talking on the phone.
                        </p>

                        <p>
                            Then they came.
                        </p>

                        <p>
                            For a minute, I couldn't contain what I was feeling.
                            There was so much going through me. Maybe it was
                            because, in the group chat, we had always appeared
                            so lively together.
                        </p>

                        <p>
                            Then she hugged me.
                        </p>

                        <p class="story-emphasis">
                            I felt immense joy.
                        </p>

                        <p>
                            That's when I knew it was true.
                        </p>

                        <p class="story-emphasis">
                            I was in love.
                        </p>

                        <p>
                            Still, the happiness couldn't completely erase
                            the uneasiness. She was uneasy too.
                            I could see it in her.
                        </p>

                        <p>
                            Then we decided to cook something.
                            That's when I finally manned up and attempted
                            to kiss her.
                        </p>

                        <p>
                            She kissed me back.
                        </p>

                        <p>
                            All my friends were watching.
                            I felt good.
                        </p>

                        <p>
                            After that, we kept kissing until our friends
                            started complaining. Eventually, we carried on
                            somewhere more private, away from everyone else.
                        </p>

                        <p>
                            There, everything else seemed to disappear.
                        </p>

                        <p>
                            The music was playing softly in the background.
                            We were finally together after all those
                            conversations, all that anticipation, and all
                            those moments of wondering what it would feel like
                            to actually be beside each other.
                        </p>

                        <p>
                            For a while, nothing else mattered.
                        </p>

                        <p class="story-ending">
                            It felt so good that, in that moment,
                            the whole world seemed to stop moving. ❤️
                        </p>

                    </div>

                    <div class="navigation">

                        <button onclick="showPrivate()">
                            ← Back to Private
                        </button>

                        <button onclick="showDashboard()">
                            🏠 Home
                        </button>

                    </div>

                </div>

            </div>
        `;
    }
function openPrivateLock() {

    document.body.innerHTML = `
        <div class="private-lock-page">

            <div class="private-lock-box">

                <div class="private-lock-icon">
                    🔐
                </div>

                <p class="small">PRIVATE SPACE</p>

                <h1>Just Between Us</h1>

                <p>
                    Enter the phrase to unlock our memories. ❤️
                </p>

                <input
                    type="text"
                    id="privatePhrase"
                    placeholder="Enter the secret phrase"
                    autocomplete="off"
                >

                <button onclick="unlockPrivate()">
                    Unlock ❤️
                </button>

                <p id="lockMessage"></p>

                <div class="navigation">
                    <button onclick="showDashboard()">
                        🏠 Home
                    </button>
                </div>

            </div>

        </div>
    `;
}
function unlockPrivate() {

    const phrase = document.getElementById("privatePhrase").value;
    const message = document.getElementById("lockMessage");

    if (phrase === "alwaysandforever") {
        showPrivate();
    } else {
        message.textContent = "Wrong phrase. Try again ❤️";
    }
}
function showGallery(type) {

    const galleries = {

        rey: {
            title: "Rey 👑",
            subtitle: "The King",
            folder: "Rey",
            images: [
                "20251224_122158.jpg",
                "20251224_122213.jpg",
                "20260114_153304.jpg",
                "20260114_153316.jpg",
                "20260814_173547.jpg",
                "20260814_173611.jpg",
                "20260814_173729.jpg",
                "20260814_173758.heic",
                "20260814_173913.jpg",
                "20260814_173927.jpg",
                "20260814_174018.jpg",
                "20260814_174249.jpg",
                "IMG-20250913-WA0074.jpg",
                "IMG-20250913-WA0075.jpg",
                "IMG-20250913-WA0080.jpg",
                "IMG-20250913-WA0083.jpg",
                "IMG-20250913-WA0098.jpg",
                "IMG-20250913-WA0103.jpg"
            ]
        },

        reina: {
            title: "Reina 👸",
            subtitle: "The Queen",
            folder: "reina",
            images: [
                "IMG-20260826-WA0029.jpg",
                "IMG-20260827-WA0031.jpg",
                "IMG-20260827-WA0032.jpg",
                "IMG-20260827-WA0033.jpg",
                "IMG-20260827-WA0034.jpg",
                "IMG-20260827-WA0035.jpg",
                "IMG-20260827-WA0036.jpg",
                "IMG-20260827-WA0037.jpg",
                "IMG-20260827-WA0038.jpg",
                "IMG-20260827-WA0039.jpg",
                "IMG-20260827-WA0041.jpg",
                "IMG-20260828-WA0030.jpg",
                "IMG-20260831-WA0050.jpg",
                "IMG-20260907-WA0004.jpg",
                "IMG-20260907-WA0005.jpg",
                "IMG-20260907-WA0006.jpg",
                "IMG-20260907-WA0007.jpg",
                "IMG-20260907-WA0008.jpg",
                "Screenshot_20260903-204421.png",
                "e11b4858bbc04f008a422125b38d5c90.jpg"
            ]
        }

    };

    const gallery = galleries[type];

    document.body.innerHTML = `
        <div class="gallery-page">

            <div class="gallery-header">

                <p class="small">OUR LITTLE GALLERY</p>

                <h1>${gallery.title}</h1>

                <p>${gallery.subtitle} ❤️</p>

            </div>

            <div class="gallery-grid">

                ${gallery.images.map((image, index) => `
                    <div class="gallery-item">
                        <img
                            src="pictures/${gallery.folder}/${image}"
                            alt="${gallery.title} memory ${index + 1}"
                            loading="lazy"
                        >
                    </div>
                `).join("")}

            </div>

            <div class="navigation">

                <button onclick="showPictures()">
                    ← Back to Pictures
                </button>

                <button onclick="showDashboard()">
                    🏠 Home
                </button>

            </div>

        </div>
    `;
}
function showPictures() {

    document.body.innerHTML = `
        <div class="pictures-page">

            <div class="pictures-header">

                <p class="small">OUR LITTLE GALLERY</p>

                <h1>Our Pictures 📸</h1>

                <p>
                    Two sides of the same love story. ❤️
                </p>

            </div>

            <div class="picture-sections">

                <button onclick="showGallery('rey')">
                    <span>👑</span>
                    <strong>Rey</strong>
                    <small>King</small>
                </button>

                <button onclick="showGallery('reina')">
                    <span>👸</span>
                    <strong>Reina</strong>
                    <small>Queen</small>
                </button>

            </div>

            <div class="navigation">

                <button onclick="showPrivate()">
                    ← Back to Private
                </button>

                <button onclick="showDashboard()">
                    🏠 Home
                </button>

            </div>

        </div>
    `;
}
