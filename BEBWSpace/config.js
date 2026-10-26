/**
 * ============================================================================
 * MYSPACE 2007 CONFIGURATION FILE - "Blood Elf Bath Water"
 * ============================================================================
 * Edit this file to customize every part of your MySpace page!
 * You can replace any file path below with your own images, GIFs, MP3/WAV
 * files, or cursors inside the `assets/` folder (or use any web URL).
 */

window.MYSPACE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. PROFILE BASICS & HEADER
  // --------------------------------------------------------------------------
  profile: {
    name: "Blood Elf Bath Water",
    urlSlug: "bloodelfbathwater",
    discordInviteUrl: "https://discord.gg/9dJz8JSnp4",
    profilePic: "assets/profile/bebw.png",
    picCaption: "me soaking in the Sunwell after a 14hr Karazhan raid ~*don't steal my pic*~",
    headline: '"~* Sipping arcane bath water & crying to Hawthorne Heights in Silvermoon *~"',
    mood: "Thirsty 🧝‍♀️✨ (Mana Tap x3)",
    gender: "Magical",
    age: "9,000 (Immortal)",
    city: "Silvermoon City",
    region: "Eversong Woods, Azeroth",
    country: "Eastern Kingdoms",
    lastLogin: "10/23/2007",
    onlineNow: true,
    profileViews: 1337420,
    memberSince: "01/16/2007",
    marqueeBanner:
      "★·.·´¯`·.·★ WELCOME 2 BLOOD ELF BATH WATER'S MYSPACE!! ★·.·´¯`·.·★ PC4PC? S4S? LEAVE SOME LUV ON MY WALL BEFORE U GO OR GET MANA DRAINED!! xoxo ★·.·´¯`·.·★"
  },

  // --------------------------------------------------------------------------
  // 2. THEME & CUSTOM MOUSE CURSOR
  // --------------------------------------------------------------------------
  theme: {
    // Custom cursor image path (set to "" to use default browser cursor)
    // Supported: .svg, .png, .cur, .gif (best 32x32)
    customCursor: "assets/cursors/pixel-sword.svg",
    // Alternative cursor preset included in assets: "assets/cursors/arcane-wand.svg"

    // Classic 2000s fairy-dust / sparkle trail following the mouse cursor
    enableCursorTrail: true,
    cursorTrailSymbols: ["✨", "★", "💧", "💜", "✧", "♥"],
    cursorTrailColors: ["#ff33cc", "#00ffcc", "#ffcc00", "#cc66ff", "#ffffff"],

    // Color scheme (CSS variables updated automatically)
    colors: {
      pageBg: "#0d0417",
      cardBg: "#160826",
      cardAltBg: "#210c38",
      headerBarBg: "#4a0e4e",
      sectionHeaderBg: "#ff007f",
      sectionHeaderText: "#ffffff",
      borderColor: "#ff33cc",
      secondaryBorderColor: "#00ffcc",
      textColor: "#f5e6ff",
      mutedTextColor: "#c499ff",
      linkColor: "#00ffcc",
      linkHoverColor: "#ff66cc",
      accentGold: "#ffd700"
    }
  },

  // --------------------------------------------------------------------------
  // 3. AUTO-PLAY MUSIC PLAYER
  // --------------------------------------------------------------------------
  music: {
    // Attempt to autoplay immediately when the page loads.
    // Note: If the browser blocks unmuted autoplay before the first click,
    // an authentic 2007 "Click Anywhere to Blast Profile Song" trigger activates
    // on the user's very first mouse click or keypress!
    autoPlay: true,
    defaultVolume: 0.25,
    loopPlaylist: true,

    // Add your own .mp3, .wav, or .ogg files to `assets/audio/` and list them here!
    tracks: [
      {
        title: "Crying in the Sunwell (Ft. DJ Mana Tap)",
        artist: "Blood Elf Bath Water",
        src: "assets/audio/silvermoon-emo-2007.wav",
        plays: "694,208"
      },
      {
        title: "Soaking in Eversong Tears [8-Bit Remix]",
        artist: "xX_SilvermoonSceneKid_Xx",
        src: "assets/audio/eversong-nights.wav",
        plays: "133,799"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. BLURBS, BLOGS, INTERESTS & DETAILS
  // --------------------------------------------------------------------------
  LatestBlog: [
    "OMGGG WHO TOOK MY LAST BOTTLE OF SUNWELL BATH WATER?! (184 comments)",
    "Top 10 Reasons Blood Elves Have Better Hair Than Night Elves (92 comments)",
    "Bulletin Survey: Copy & Paste If U Have Ever Pulled Aggro On Purpose (41 comments)"
  ],

  blurbs: {
    aboutMe: `
      <p><span class="glitter-text">Hiiiii every1!!1!</span> Welcome to the official MySpace of <b>Blood Elf Bath Water™</b>!! 💧🧝‍♀️✨</p>
      <p>100% pure, artisanal, triple-filtered straight from the <b>Fountain of Silvermoon</b> (with a hint of Fel Green apple & vanilla body splash from Bath & Body Works).</p>
      <p>If u can't handle me at my <i>Wretched</i>, u don't deserve me at my <i>Sunwell Plateau</i>!! I spend my days AFK dancing on the mailbox outside the Auction House, styling my bangs so they clip through my Tier 5 helm, and sipping sparkly pink mana potions.</p>
      <p class="ascii-divider">°º¤ø,¸¸,ø¤º°\`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°\`°º¤ø,¸</p>
      <p><b>♥ LIKES:</b> Arcane Torrenting healers in Warsong Gulch, eyeliner thicker than Plate Armor, Monster Energy (Fel Green flavor), HTML tables, glittering Blingee GIFs, & taking quizzes at 3am.</p>
      <p><b>✖ DISLIKES:</b> Running out of mana, Alliance paladins who bubble-hearth, posers who buy fake Naga bath water, and people who don't comment back on my wall!!</p>
    `,
    whoIdLikeToMeet: `
      <p>Tom from MySpace (thx for being my 1st friend!!), Prince Kael'thas (call me back pls I know Tempest Keep was just a setback!!), anyone buying <b>[Jar of Artisanal Blood Elf Bath Water]</b> for 50g on the Neutral AH, and cool scene kids who leave sparkle GIFs on my wall! &lt;333</p>
    `
  },

  interests: [
    {
      category: "General",
      content: "Bottling premium bath water, AFK mailbox dancing in Silvermoon, customizing MySpace CSS at 2 AM, hair straighteners, glittery pixel graphics, Mana Gems, rolling Need on everything."
    },
    {
      category: "Music",
      content: "My Chemical Romance, Paramore, Evanescence, Hawthorne Heights, AFI, Fall Out Boy, The Used, Escape the Fate, Lament of the Highborne (Club Remix), Chief Tauren Chieftain."
    },
    {
      category: "Movies",
      content: "Donnie Darko, The Nightmare Before Christmas, Mean Girls, Napoleon Dynamite, Underworld, Lord of the Rings (Legolas is my cousin)."
    },
    {
      category: "Television",
      content: "Invader Zim, Avatar: The Last Airbender, South Park (Make Love, Not Warcraft episode!!), Viva La Bam, Degrassi, Death Note."
    },
    {
      category: "Books",
      content: "How to Monetize Your Mana Pool for Dummies, The Green Hills of Stranglethorn (Page 1, 4, 6, 8, 10, 11... still missing Page 14!!)."
    },
    {
      category: "Heroes",
      content: "Lady Sylvanas, Tom Anderson, whoever invented `<marquee>` and `<blink>`, & everyone in my Top 8 (if I moved u out of my Top 8 don't start drama in bulletins pls!!)."
    }
  ],

  details: [
    { label: "Status", value: "It's Complicated (with the Sunwell)" },
    { label: "Here for", value: "Friends, Networking, Selling Bath Water" },
    { label: "Hometown", value: "Quell'Danil / Silvermoon VIP Spa" },
    { label: "Body type", value: "98% Liquid Arcane Mana, 2% Glitter" },
    { label: "Zodiac Sign", value: "Phoenix Rising ♈" },
    { label: "Smoke / Drink", value: "Netherbloom / Shimmering Bath Water" },
    { label: "Education", value: "Felo'melorn Academy of Looking Fabulous" },
    { label: "Occupation", value: "CEO of Blood Elf Bath Water Co." }
  ],

  schools: [
    {
      name: "Silvermoon Royal Conservatory of Arcane Cosmetology & HTML",
      location: "Eversong Woods, AZ",
      years: "1999 to 2007",
      details: "Major: Advanced Eyeliner & Potion Bottling • Degree: Highborne Honors"
    }
  ],

  // --------------------------------------------------------------------------
  // 5. TOP 8 FRIENDS (Tom is locked at #1; positions 2-8 are randomized on load)
  // --------------------------------------------------------------------------
  friendCount: 420,
  topFriends: [
    {
      name: "Tom",
      pic: "assets/friends/tom-1.jpg",
      online: true,
      alwaysFirst: true,
      tagline: "MySpace OG"
    },
    {
      name: "Gbox",
      pic: "assets/friends/gbox-2.png",
      online: true,
      tagline: "big green box"
    },
    {
      name: "Taataas",
      pic: "assets/friends/taataas-3.png",
      online: true,
      tagline: "big ol critties"
    },
    {
      name: "Locksac",
      pic: "assets/friends/locksac-4.png",
      online: true,
      tagline: "dur dur"
    },
    {
      name: "Mrdonger",
      pic: "assets/friends/mrdonger-5.png",
      online: true,
      tagline: "dont tell him he cant"
    },
    {
      name: "Westolandor",
      pic: "assets/friends/westolandor-6.png",
      online: false,
      tagline: "guaranteed"
    },
    {
      name: "Autoshot",
      pic: "assets/friends/autoshot-7.png",
      online: true,
      tagline: "has an anthem"
    },
    {
      name: "Xaktaunos",
      pic: "assets/friends/xaktaunos-8.png",
      online: true,
      tagline: "smoke weed"
    },
    {
      name: "Marty",
      pic: "assets/friends/marty-9.png",
      online: false,
      tagline: "coffin mode"
    },
    {
      name: "Junsuisozou",
      pic: "assets/friends/junsuisozou-10.png",
      online: true,
      tagline: "a touch of the"
    },
    {
      name: "Grakens",
      pic: "assets/friends/grakens-11.png",
      online: true,
      tagline: "grak snak"
    },
    {
      name: "Boozie",
      pic: "assets/friends/boozie-12.png",
      online: true,
      tagline: "crushin cans"
    },
    {
      name: "Artriel",
      pic: "assets/friends/artriel-13.png",
      online: false,
      tagline: "damnit bobbie"
    },
    {
      name: "Cheeky",
      pic: "assets/friends/cheeky-14.png",
      online: true,
      tagline: "needs salv"
    },
    {
      name: "Razmisham",
      pic: "assets/friends/razmisham-15.png",
      online: true,
      tagline: "rasperberries bb"
    },
    {
      name: "Bigwon",
      pic: "assets/friends/bigwon-16.png",
      online: true,
      tagline: "bigwon"
    },
    {
      name: "Bradytech10",
      pic: "assets/friends/bradytech10-17.png",
      online: false,
      tagline: "bees r happy"
    },
    {
      name: "Healgazm",
      pic: "assets/friends/healgazm-18.png",
      online: true,
      tagline: "gasm"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. PERSONALITY QUIZ (Interactive 2000s Quizilla / MySpace Bulletin Style)
  // --------------------------------------------------------------------------
  quiz: {
    title: "✨ Which Vintage of Blood Elf Bath Water Are You? ✨",
    subtitle: "Take my official 2007 MySpace Personality Quiz & copy the HTML badge to your profile!!",
    questions: [
      {
        id: "q1",
        prompt: "1. Are you an idiot?",
        options: [
          { text: "True", type: "fel" },
          { text: "False", type: "royal" }
        ]
      },
      {
        id: "q2",
        prompt: "2. Olandor?",
        options: [
          { text: "East", type: "emo" },
          { text: "West", type: "royal" },
          { text: "North", type: "fel" },
          { text: "South", type: "glitter" }
        ]
      },
      {
        id: "q3",
        prompt: "3. What is gbox's name?",
        options: [
          { text: "ggbox", type: "emo" },
          { text: "gbbox", type: "fel" },
          { text: "gbox", type: "royal" },
          { text: "geebox", type: "glitter" }
        ]
      }
    ],
    results: {
      royal: {
        title: "👑 Sunwell Reserve Gold Edition™",
        badgeGif: "assets/gifs/mana-potion.gif",
        description: "You are 100% Highborne Royalty! Expensive, dramatic, and effortlessly iconic. Your hair never goes flat, your mana is always full, and your bath water sells for 5,000 gold a drop on the Auction House."
      },
      emo: {
        title: "🖤 Eversong Midnight Tears Edition™",
        badgeGif: "assets/gifs/rawr-xd.gif",
        description: "Dark, mysterious, and misunderstood! You write deep poetry in your MySpace blog, know all the words to 'Ohio Is For Lovers', and your bath water smells like clove cigarettes and black eyeliner."
      },
      fel: {
        title: "⚡ Overcharged Fel-Infused Energy Edition™",
        badgeGif: "assets/gifs/dancing-elf.gif",
        description: "Pure chaotic 2007 gamer fuel! You run on zero sleep, 200 WPM typing speed, and glowing green Fel magic. Warning: Drinking or bathing in this vintage grants +500 Spell Crit and permanent sparkles."
      },
      glitter: {
        title: "💖 Blingee Cotton-Candy Sparkle Edition™",
        badgeGif: "assets/gifs/party-cat.gif",
        description: "You are the undisputed monarch of MySpace comments! Everywhere you go leaves a trail of pink pixel hearts, animated GIFs, and chaotic Y2K joy. Everyone wants you in their #1 Top 8 spot!"
      }
    }
  },

  // --------------------------------------------------------------------------
  // 7. WALL COMMENTS (Includes Happy Birthday Post & Random Animated GIF Posts!)
  // --------------------------------------------------------------------------
  // Pool of GIFs in `assets/gifs/` used when picking random GIFs or posting new comments
  randomGifPool: [
    { src: "assets/gifs/thanks-for-add.gif", caption: "THANKS 4 THE ADD!! Ur profile is SO SICK!!" },
    { src: "assets/gifs/dancing-elf.gif", caption: "*dances on ur wall* PARTY IN SILVERMOON TONIGHT!!" },
    { src: "assets/gifs/mana-potion.gif", caption: "Just got my shipment of Blood Elf Bath Water™ 10/10!!" },
    { src: "assets/gifs/rawr-xd.gif", caption: "RAWR means I LUV U in Dinosaur!! xD <333" },
    { src: "assets/gifs/party-cat.gif", caption: "stopping by 2 show some luv on ur wall!! pc4pc??" },
    { src: "assets/gifs/birthday-cake.gif", caption: "Save me a slice of mana cake!! 🎂✨" }
  ],

  totalCommentsCount: 69,

  // Wall comments list (rendered top-to-bottom).
  // Set `isBirthday: true` for the special highlighted Happy Birthday wall post!
  // Set `useRandomGif: true` on any post if you want it to pick a random GIF from `randomGifPool` on each page load,
  // or provide a specific `gif: "assets/gifs/..."` path!
  wallComments: [
    {
      author: "Healgazm",
      authorPic: "assets/friends/healgazm-18.png",
      date: "Oct 23, 2007 7:45 PM",
      isBirthday: true,
      gif: "assets/gifs/happy-birthday.gif",
      secondaryGif: "assets/gifs/birthday-cake.gif",
      text: `
        <div class="bday-banner">🎂✨ HAPPY BIRTHDAY BLOOD ELF BATH WATER!!1! ✨🎂</div>
        <p>OMGGGG HAPPY B-DAY BESTIE!! 🎉💖👑 Hope ur day is filled with unlimited Arcane Torrent, zero rez sickness, and overflowing hot tubs in Silvermoon City!! I brought the whole Undercity choir to sing for u!!</p>
        <p class="sparkle-line">★·.·´¯\`·.·★ MAKE A WISH AT THE SUNWELL!! luv u 4ever xoxo &lt;333 ★·.·´¯\`·.·★</p>
      `
    },
    {
      author: "Gbox",
      authorPic: "assets/friends/gbox-2.png",
      date: "Oct 23, 2007 6:12 PM",
      gif: "assets/gifs/mana-potion.gif",
      useRandomGif: false,
      text: `
        <p>Happy Birthday!! Also I need 40 more jars of <b>Blood Elf Bath Water</b> shipped to Tempest Keep ASAP. My phoenix Al'ar refuses to bathe in anything else. Keep me #2 in ur Top 8 or else!! 🔥🦅</p>
      `
    },
    {
      author: "Taataas",
      authorPic: "assets/friends/taataas-3.png",
      date: "Oct 23, 2007 4:30 PM",
      gif: "assets/gifs/rawr-xd.gif",
      useRandomGif: true,
      text: `
        <p>hiiiii!! omg i luv ur profile song sooooo much!! &lt;33 dropping a random sparkle GIF on ur wall!! Rawr xD!! Don't forget to comment me back or I'll cry!! 🖤🧷✨</p>
      `
    },
    {
      author: "Tom",
      authorPic: "assets/friends/tom-1.jpg",
      date: "Oct 22, 2007 11:15 PM",
      gif: "assets/gifs/thanks-for-add.gif",
      useRandomGif: false,
      text: `
        <p>Hey Blood Elf Bath Water! Thanks for the add on MySpace! Let me know if you need help with your HTML tables, and Happy Birthday! 👍</p>
      `
    },
    {
      author: "Mrdonger",
      authorPic: "assets/friends/mrdonger-5.png",
      date: "Oct 21, 2007 9:04 PM",
      gif: "assets/gifs/dancing-elf.gif",
      useRandomGif: true,
      text: `
        <p>MRGLGLGLGLGL!! 🐟💧 (Translation: Just drank an entire bottle of Blood Elf Bath Water and now I can speak Common and crit for 9,999!! HAPPY BDAY!!)</p>
      `
    },
    {
      author: "Locksac",
      authorPic: "assets/friends/locksac-4.png",
      date: "Oct 20, 2007 2:22 AM",
      gif: "assets/gifs/party-cat.gif",
      useRandomGif: true,
      text: `
        <p>I waited 10,000 years for my shipment of Bath Water... AND I WAS NOT PREPARED FOR HOW GOOD IT SMELLS!! Leaving this GIF on ur wall. 😈💚</p>
      `
    }
  ]
};
