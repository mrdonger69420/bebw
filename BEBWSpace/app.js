/**
 * ============================================================================
 * MYSPACE 2007 APPLICATION LOGIC (Driven by `window.MYSPACE_CONFIG`)
 * ============================================================================
 */

(function () {
  "use strict";

  const cfg = window.MYSPACE_CONFIG;
  if (!cfg) {
    console.error("MYSPACE_CONFIG not found! Make sure config.js is loaded before app.js.");
    return;
  }

  let currentTrackIndex = 0;
  let lastQuizResult = null;
  let toastTimeout = null;

  // --------------------------------------------------------------------------
  // 1. THEME & CUSTOM CURSOR INITIALIZATION
  // --------------------------------------------------------------------------
  function applyThemeAndCursor() {
    const root = document.documentElement;
    const c = (cfg.theme && cfg.theme.colors) || {};

    if (c.pageBg) root.style.setProperty("--page-bg", c.pageBg);
    if (c.cardBg) root.style.setProperty("--card-bg", c.cardBg);
    if (c.cardAltBg) root.style.setProperty("--card-alt-bg", c.cardAltBg);
    if (c.headerBarBg) root.style.setProperty("--header-bar-bg", c.headerBarBg);
    if (c.sectionHeaderBg) root.style.setProperty("--section-header-bg", c.sectionHeaderBg);
    if (c.sectionHeaderText) root.style.setProperty("--section-header-text", c.sectionHeaderText);
    if (c.borderColor) root.style.setProperty("--border-color", c.borderColor);
    if (c.secondaryBorderColor) root.style.setProperty("--secondary-border-color", c.secondaryBorderColor);
    if (c.textColor) root.style.setProperty("--text-color", c.textColor);
    if (c.mutedTextColor) root.style.setProperty("--muted-text-color", c.mutedTextColor);
    if (c.linkColor) root.style.setProperty("--link-color", c.linkColor);
    if (c.linkHoverColor) root.style.setProperty("--link-hover-color", c.linkHoverColor);
    if (c.accentGold) root.style.setProperty("--accent-gold", c.accentGold);

    const cursorPath = cfg.theme && cfg.theme.customCursor;
    if (cursorPath && cursorPath.trim() !== "") {
      root.style.setProperty("--custom-cursor", `url("${cursorPath}") 4 4, auto`);
    } else {
      root.style.setProperty("--custom-cursor", "auto");
    }
  }

  // --------------------------------------------------------------------------
  // 2. 2000s SPARKLE MOUSE CURSOR TRAIL
  // --------------------------------------------------------------------------
  function initCursorTrail() {
    const container = document.getElementById("cursor-trail-container");
    let lastSpawn = 0;

    window.addEventListener("mousemove", function (e) {
      if (!cfg.theme || !cfg.theme.enableCursorTrail) return;
      const now = performance.now();
      if (now - lastSpawn < 42) return;
      lastSpawn = now;

      const symbols = cfg.theme.cursorTrailSymbols || ["✨", "★", "💜"];
      const colors = cfg.theme.cursorTrailColors || ["#ff33cc", "#00ffcc", "#ffd700"];

      const span = document.createElement("span");
      span.className = "cursor-sparkle";
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = e.clientX + (Math.random() * 14 - 7) + "px";
      span.style.top = e.clientY + (Math.random() * 14 - 7) + "px";
      span.style.color = colors[Math.floor(Math.random() * colors.length)];
      span.style.textShadow = `0 0 6px ${span.style.color}`;

      container.appendChild(span);
      setTimeout(function () {
        span.remove();
      }, 850);
    });
  }

  // --------------------------------------------------------------------------
  // 3. RENDER PROFILE INFO, BLURBS, BLOG, INTERESTS, DETAILS, SCHOOLS
  // --------------------------------------------------------------------------
  function renderProfileContent() {
    const p = cfg.profile;
    document.title = `MySpace.com - ${p.name} - ${p.age} - ${p.gender} - ${p.city.toUpperCase()}, ${p.region} - www.myspace.com/${p.urlSlug}`;

    setText("profile-name", p.name);
    setText("profile-marquee", p.marqueeBanner);
    setText("profile-pic-caption", p.picCaption);
    setText("profile-headline", p.headline);
    setText("profile-gender", p.gender);
    setText("profile-age", p.age);
    setText("profile-city", p.city);
    setText("profile-region", p.region);
    setText("profile-country", p.country);
    setText("profile-mood", p.mood);
    setText("profile-last-login", p.lastLogin);
    setText("profile-views", Number(p.profileViews || 0).toLocaleString());
    setText("profile-url", `http://www.myspace.com/${p.urlSlug}`);

    const picEl = document.getElementById("profile-pic");
    if (picEl) {
      picEl.src = p.profilePic;
      picEl.alt = `${p.name} Profile Picture`;
    }

    const onlineBadge = document.getElementById("online-now-badge");
    if (onlineBadge) {
      onlineBadge.style.display = p.onlineNow ? "inline-flex" : "none";
    }

    // Section headers with dynamic profile name
    setText("contact-box-header", `Contacting ${p.name}`);
    setText("interests-header", `${p.name}'s Interests`);
    setText("details-header", `${p.name}'s Details`);
    setText("schools-header", `${p.name}'s Schools`);
    setText("extended-network-text", `${p.name} is in your extended network`);
    setText("blog-header-title", `${p.name}'s Latest Blog Entry`);
    setText("blurbs-header", `${p.name}'s Blurbs`);
    setText("friends-header", `${p.name}'s Friend Space`);
    setText("friends-owner-name", p.name);
    setText("comments-header", `${p.name}'s Friends Comments`);

    document.querySelectorAll(".owner-name-inline").forEach(function (el) {
      el.textContent = p.name;
    });

    const discordUrl = p.discordInviteUrl || "https://discord.gg/9dJz8JSnp4";

    document.querySelectorAll(".discord-link").forEach(function (el) {
      el.setAttribute("href", discordUrl);
    });

    const searchForm = document.getElementById("myspace-search-form");
    if (searchForm && !searchForm.dataset.boundDiscord) {
      searchForm.dataset.boundDiscord = "true";
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.open(discordUrl, "_blank", "noopener,noreferrer");
      });
    }

    // Latest Blog Entries
    const blogList = document.getElementById("blog-list");
    if (blogList && Array.isArray(cfg.LatestBlog)) {
      blogList.innerHTML = cfg.LatestBlog.map(function (entry) {
        return `<li>${escapeHtml(entry)} (<a href="${escapeHtml(discordUrl)}" target="_blank" rel="noopener noreferrer" class="discord-link">view more</a>)</li>`;
      }).join("");
    }

    // Blurbs
    const aboutEl = document.getElementById("about-me-content");
    const meetEl = document.getElementById("who-to-meet-content");
    if (aboutEl && cfg.blurbs) aboutEl.innerHTML = cfg.blurbs.aboutMe || "";
    if (meetEl && cfg.blurbs) meetEl.innerHTML = cfg.blurbs.whoIdLikeToMeet || "";

    // Interests Table
    const interestsTbody = document.querySelector("#interests-table tbody");
    if (interestsTbody && Array.isArray(cfg.interests)) {
      interestsTbody.innerHTML = cfg.interests.map(function (item) {
        return `
          <tr>
            <td class="label-cell">${escapeHtml(item.category)}</td>
            <td class="value-cell">${item.content}</td>
          </tr>
        `;
      }).join("");
    }

    // Details Table
    const detailsTbody = document.querySelector("#details-table tbody");
    if (detailsTbody && Array.isArray(cfg.details)) {
      detailsTbody.innerHTML = cfg.details.map(function (item) {
        return `
          <tr>
            <td class="label-cell">${escapeHtml(item.label)}:</td>
            <td class="value-cell">${escapeHtml(item.value)}</td>
          </tr>
        `;
      }).join("");
    }

    // Schools Table
    const schoolsTbody = document.querySelector("#schools-table tbody");
    if (schoolsTbody && Array.isArray(cfg.schools)) {
      schoolsTbody.innerHTML = cfg.schools.map(function (s) {
        return `
          <tr>
            <td class="value-cell">
              <b>${escapeHtml(s.name)}</b><br/>
              ${escapeHtml(s.location)}<br/>
              <span style="color:var(--muted-text-color)">${escapeHtml(s.details)}</span>
            </td>
            <td class="label-cell" style="text-align:center; width:28%;">${escapeHtml(s.years)}</td>
          </tr>
        `;
      }).join("");
    }
  }

  // --------------------------------------------------------------------------
  // 4. 2006 MYSPACE MUSIC PLAYER + AUTO-PLAY HANDLER
  // --------------------------------------------------------------------------
  function initMusicPlayer() {
    const audio = document.getElementById("myspace-audio");
    const playlistEl = document.getElementById("player-playlist");
    const nowPlayingEl = document.getElementById("player-now-playing");
    const artistEl = document.getElementById("player-artist-name");
    const playsEl = document.getElementById("player-plays-count");
    const stateBadge = document.getElementById("player-state-badge");
    const timeEl = document.getElementById("player-time");
    const eqBars = document.getElementById("eq-bars");
    const volSlider = document.getElementById("volume-slider");
    const unlockBanner = document.getElementById("autoplay-unlock-banner");
    const unlockBtn = document.getElementById("autoplay-unlock-btn");

    const tracks = (cfg.music && cfg.music.tracks) || [];
    if (!tracks.length) return;

    audio.volume = cfg.music.defaultVolume !== undefined ? cfg.music.defaultVolume : 0.25;
    volSlider.value = audio.volume;

    function renderPlaylist() {
      playlistEl.innerHTML = tracks.map(function (t, idx) {
        const activeClass = idx === currentTrackIndex ? "active" : "";
        return `
          <div class="playlist-item ${activeClass}" data-idx="${idx}">
            <span>${idx + 1}. ${escapeHtml(t.title)}</span>
            <span>${escapeHtml(t.plays || "")}</span>
          </div>
        `;
      }).join("");

      playlistEl.querySelectorAll(".playlist-item").forEach(function (row) {
        row.addEventListener("click", function () {
          const i = parseInt(row.getAttribute("data-idx"), 10);
          loadTrack(i, true);
        });
      });
    }

    function updatePlayerUI(isPlaying) {
      const t = tracks[currentTrackIndex];
      nowPlayingEl.textContent = `${t.title}`;
      artistEl.textContent = t.artist || cfg.profile.name;
      playsEl.textContent = t.plays || "420,000";
      stateBadge.textContent = isPlaying ? "PLAYING" : "PAUSED";
      stateBadge.style.background = isPlaying ? "#00c853" : "#ff007f";
      if (isPlaying) {
        eqBars.classList.add("playing");
      } else {
        eqBars.classList.remove("playing");
      }
      renderPlaylist();
    }

    function loadTrack(idx, playImmediately) {
      currentTrackIndex = (idx + tracks.length) % tracks.length;
      const t = tracks[currentTrackIndex];
      audio.src = t.src;
      audio.load();
      updatePlayerUI(false);
      if (playImmediately) {
        attemptPlay();
      }
    }

    function attemptPlay() {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            updatePlayerUI(true);
            unlockBanner.classList.add("hidden");
          })
          .catch(function () {
            // Browser blocked unmuted autoplay before first interaction
            updatePlayerUI(false);
            stateBadge.textContent = "READY (CLICK)";
            unlockBanner.classList.remove("hidden");
          });
      }
    }

    // Unlock autoplay on the very first user click or keypress anywhere on the page
    function unlockOnFirstGesture() {
      if (audio.paused && cfg.music && cfg.music.autoPlay) {
        attemptPlay();
      }
      unlockBanner.classList.add("hidden");
      window.removeEventListener("pointerdown", unlockOnFirstGesture);
      window.removeEventListener("keydown", unlockOnFirstGesture);
    }

    window.addEventListener("pointerdown", unlockOnFirstGesture);
    window.addEventListener("keydown", unlockOnFirstGesture);
    if (unlockBtn) {
      unlockBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        attemptPlay();
        unlockBanner.classList.add("hidden");
      });
    }

    // Controls
    document.getElementById("btn-play").addEventListener("click", attemptPlay);
    document.getElementById("btn-pause").addEventListener("click", function () {
      audio.pause();
      updatePlayerUI(false);
    });
    document.getElementById("btn-stop").addEventListener("click", function () {
      audio.pause();
      audio.currentTime = 0;
      updatePlayerUI(false);
      stateBadge.textContent = "STOPPED";
    });
    document.getElementById("btn-prev").addEventListener("click", function () {
      loadTrack(currentTrackIndex - 1, true);
    });
    document.getElementById("btn-next").addEventListener("click", function () {
      loadTrack(currentTrackIndex + 1, true);
    });
    volSlider.addEventListener("input", function () {
      audio.volume = parseFloat(volSlider.value);
    });

    audio.addEventListener("timeupdate", function () {
      const cur = formatTime(audio.currentTime);
      const dur = formatTime(audio.duration || 0);
      timeEl.textContent = `${cur} / ${dur}`;
    });

    audio.addEventListener("ended", function () {
      if (cfg.music.loopPlaylist) {
        loadTrack(currentTrackIndex + 1, true);
      } else {
        updatePlayerUI(false);
      }
    });

    loadTrack(0, Boolean(cfg.music.autoPlay));
  }

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" + s : s}`;
  }

  // --------------------------------------------------------------------------
  // 5. TOP 8 FRIENDS SPACE (Tom #1 + Random Selection for 2nd-8th)
  // --------------------------------------------------------------------------
  function getRandomizedTop8() {
    if (!Array.isArray(cfg.topFriends) || !cfg.topFriends.length) return [];

    // Find Tom (or the friend marked alwaysFirst), defaulting to the first item
    const tomFriend =
      cfg.topFriends.find(function (f) {
        return f.alwaysFirst || (f.name && f.name.toLowerCase() === "tom");
      }) || cfg.topFriends[0];

    const othersPool = cfg.topFriends
      .filter(function (f) {
        return f !== tomFriend;
      })
      .slice();

    // Fisher-Yates shuffle on the remaining friends pool
    for (let i = othersPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = othersPool[i];
      othersPool[i] = othersPool[j];
      othersPool[j] = temp;
    }

    return [tomFriend].concat(othersPool.slice(0, 7));
  }

  function renderTop8() {
    setText("friends-count", cfg.friendCount || cfg.topFriends.length || 8);
    const grid = document.getElementById("top8-grid");
    if (!grid || !Array.isArray(cfg.topFriends)) return;

    const selectedTop8 = getRandomizedTop8();
    const discordUrl = (cfg.profile && cfg.profile.discordInviteUrl) || "https://discord.gg/9dJz8JSnp4";

    grid.innerHTML = selectedTop8.map(function (friend) {
      return `
        <div class="friend-card">
          <a href="${escapeHtml(discordUrl)}" target="_blank" rel="noopener noreferrer" class="friend-name discord-link">
            ${escapeHtml(friend.name)}
          </a>
          <a href="${escapeHtml(discordUrl)}" target="_blank" rel="noopener noreferrer" class="discord-link">
            <img src="${friend.pic}" alt="${escapeHtml(friend.name)}" class="friend-avatar" />
          </a>
          <div class="friend-tagline">${escapeHtml(friend.tagline || "")}</div>
          ${friend.online ? '<div class="friend-online">🧍ONLINE NOW!</div>' : '<div style="font-size:9px;color:#888;">Offline</div>'}
        </div>
      `;
    }).join("");
  }

  // --------------------------------------------------------------------------
  // 6. PERSONALITY QUIZ
  // --------------------------------------------------------------------------
  function initPersonalityQuiz() {
    const qData = cfg.quiz;
    if (!qData) return;

    setText("quiz-title", qData.title);
    setText("quiz-subtitle", qData.subtitle);

    const container = document.getElementById("quiz-questions-container");
    const form = document.getElementById("personality-quiz-form");
    const resultBox = document.getElementById("quiz-result-box");
    const resetBtn = document.getElementById("quiz-reset-btn");
    const copyBtn = document.getElementById("copy-quiz-html-btn");
    const postToWallBtn = document.getElementById("post-quiz-to-wall-btn");

    container.innerHTML = qData.questions.map(function (q, qIndex) {
      const optionsHtml = q.options.map(function (opt, oIndex) {
        const checkedAttr = oIndex === 0 ? "checked" : "";
        return `
          <label class="quiz-option-label">
            <input type="radio" name="quiz_${q.id || qIndex}" value="${escapeHtml(opt.type)}" ${checkedAttr} />
            ${escapeHtml(opt.text)}
          </label>
        `;
      }).join("");

      return `
        <div class="quiz-question-card">
          <div class="quiz-question-prompt">${escapeHtml(q.prompt)}</div>
          ${optionsHtml}
        </div>
      `;
    }).join("");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const tally = {};
      const formData = new FormData(form);
      for (const val of formData.values()) {
        tally[val] = (tally[val] || 0) + 1;
      }

      let winnerKey = Object.keys(qData.results)[0];
      let maxScore = -1;
      Object.keys(tally).forEach(function (k) {
        if (tally[k] > maxScore && qData.results[k]) {
          maxScore = tally[k];
          winnerKey = k;
        }
      });

      const res = qData.results[winnerKey];
      lastQuizResult = res;

      setText("quiz-result-title", res.title);
      setText("quiz-result-desc", res.description);
      const gifEl = document.getElementById("quiz-result-gif");
      gifEl.src = res.badgeGif;
      gifEl.alt = res.title;

      const htmlCode = `<div style="border:2px dashed #ff007f;background:#160826;color:#fff;padding:8px;text-align:center;"><b>I took the ${cfg.profile.name} Quiz &amp; got: ${res.title}!</b><br/><img src="${res.badgeGif}" /><br/><small>${res.description}</small></div>`;
      document.getElementById("quiz-html-code").value = htmlCode;

      resultBox.classList.remove("hidden");
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    resetBtn.addEventListener("click", function () {
      form.reset();
      resultBox.classList.add("hidden");
    });

    copyBtn.addEventListener("click", function () {
      const codeArea = document.getElementById("quiz-html-code");
      codeArea.select();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeArea.value);
      }
      window.triggerRetroAlert("Copied 2007 HTML Quiz Result Badge to your clipboard!! ✨");
    });

    postToWallBtn.addEventListener("click", function () {
      if (!lastQuizResult) return;
      cfg.wallComments.unshift({
        author: "You (Quiz Taker)",
        authorPic: "assets/friends/tom-1.jpg",
        date: "Just Now (Oct 23, 2007)",
        isBirthday: false,
        gif: lastQuizResult.badgeGif,
        useRandomGif: false,
        text: `<p>🔮 <b>I just took the "${escapeHtml(qData.title)}" quiz and got: <span style="color:#ffd700">${escapeHtml(lastQuizResult.title)}</span>!!</b></p><p>${escapeHtml(lastQuizResult.description)}</p>`
      });
      cfg.totalCommentsCount = (cfg.totalCommentsCount || 69) + 1;
      renderWallComments();
      document.getElementById("wall-section").scrollIntoView({ behavior: "smooth" });
      window.triggerRetroAlert("Posted your Quiz Result badge to Blood Elf Bath Water's Wall!!");
    });
  }

  // --------------------------------------------------------------------------
  // 7. WALL COMMENTS (HAPPY BIRTHDAY POST + RANDOM GIF WALL POSTS)
  // --------------------------------------------------------------------------
  function pickRandomGifFromPool() {
    const pool = cfg.randomGifPool || [];
    if (!pool.length) return { src: "assets/gifs/party-cat.gif", caption: "" };
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function renderWallComments(forceRandomizeAllNonBday) {
    const tbody = document.getElementById("wall-comments-tbody");
    if (!tbody || !Array.isArray(cfg.wallComments)) return;

    setText("displayed-comments-count", cfg.wallComments.length);
    setText("total-comments-count", cfg.totalCommentsCount || cfg.wallComments.length);

    tbody.innerHTML = cfg.wallComments.map(function (c) {
      let chosenGif = c.gif;
      let randomCaption = "";

      if ((c.useRandomGif || forceRandomizeAllNonBday) && !c.isBirthday) {
        const picked = pickRandomGifFromPool();
        chosenGif = picked.src;
        randomCaption = picked.caption;
      }

      const rowClass = c.isBirthday ? "birthday-comment-row" : "";
      const secondaryGifHtml = c.secondaryGif
        ? `<img src="${c.secondaryGif}" alt="Birthday Cake GIF" class="wall-gif-img" />`
        : "";
      const discordUrl = (cfg.profile && cfg.profile.discordInviteUrl) || "https://discord.gg/9dJz8JSnp4";

      return `
        <tr class="${rowClass}">
          <td class="comment-author-cell">
            <a href="${escapeHtml(discordUrl)}" target="_blank" rel="noopener noreferrer" class="discord-link">
              ${escapeHtml(c.author)}
            </a>
            <a href="${escapeHtml(discordUrl)}" target="_blank" rel="noopener noreferrer" class="discord-link">
              <img src="${c.authorPic || "assets/friends/tom-1.jpg"}" alt="${escapeHtml(c.author)}" />
            </a>
            ${c.isBirthday ? '<div class="friend-online">🎂 B-DAY VIP</div>' : ""}
          </td>
          <td class="comment-body-cell">
            <div class="comment-date">Posted: ${escapeHtml(c.date)}</div>
            <div class="comment-text-content">${c.text}</div>
            ${randomCaption ? `<p style="color:var(--secondary-border-color);font-style:italic;margin:4px 0;">"${escapeHtml(randomCaption)}"</p>` : ""}
            <div class="wall-gif-wrapper">
              ${chosenGif ? `<img src="${chosenGif}" alt="Wall Post Animated GIF" class="wall-gif-img" />` : ""}
              ${secondaryGifHtml}
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  function initWallInteractions() {
    // Shuffle Top 8 button (keeps Tom #1 and re-randomizes positions 2-8)
    const shuffleTop8Btn = document.getElementById("shuffle-top8-btn");
    if (shuffleTop8Btn) {
      shuffleTop8Btn.addEventListener("click", function () {
        renderTop8();
        window.triggerRetroAlert("OMG!! You shuffled spots #2-#8 in your Top 8 (Tom stays #1)! Expect passive-aggressive bulletins tonight!! 😱");
      });
    }

    // Randomize Wall GIFs button
    const shuffleWallGifsBtn = document.getElementById("shuffle-wall-gifs-btn");
    if (shuffleWallGifsBtn) {
      shuffleWallGifsBtn.addEventListener("click", function () {
        renderWallComments(true);
        window.triggerRetroAlert("🎲 Swapped in fresh random 2000s GIFs on the Wall!");
      });
    }

    // Add New Wall Comment Form
    const form = document.getElementById("add-comment-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const author = document.getElementById("comment-author").value.trim() || "Anon_SceneKid";
        const gifChoice = document.getElementById("comment-gif-select").value;
        const isBday = document.getElementById("comment-is-birthday").checked;
        const rawText = document.getElementById("comment-text").value.trim();

        const useRandom = gifChoice === "random";
        const finalGif = useRandom ? pickRandomGifFromPool().src : gifChoice;

        const formattedText = isBday
          ? `<div class="bday-banner">🎂✨ HAPPY BIRTHDAY ${escapeHtml(cfg.profile.name.toUpperCase())}!! ✨🎂</div><p>${escapeHtml(rawText)}</p>`
          : `<p>${escapeHtml(rawText)}</p>`;

        const avatars = (cfg.topFriends || []).map(function (f) { return f.pic; });
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)] || "assets/friends/tom-1.jpg";

        cfg.wallComments.unshift({
          author: author,
          authorPic: randomAvatar,
          date: "Oct 23, 2007 (Just Now!)",
          isBirthday: isBday,
          gif: finalGif,
          secondaryGif: isBday ? "assets/gifs/birthday-cake.gif" : "",
          useRandomGif: false,
          text: formattedText
        });

        cfg.totalCommentsCount = (cfg.totalCommentsCount || 69) + 1;
        renderWallComments(false);
        document.getElementById("comment-text").value = "";
        window.triggerRetroAlert(`Posted your ${isBday ? "Happy Birthday " : ""}comment & GIF to ${cfg.profile.name}'s Wall!! ✨`);
      });
    }
  }

  // --------------------------------------------------------------------------
  // 8. HELPERS & RETRO TOASTS / BIRTHDAY CONFETTI
  // --------------------------------------------------------------------------
  window.triggerRetroAlert = function (message) {
    const toast = document.getElementById("retro-toast");
    if (!toast) return;
    toast.innerHTML = `<b>✨ MySpace 2007 Alert:</b><br/>${escapeHtml(message)}`;
    toast.classList.remove("hidden");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.add("hidden");
    }, 3600);
  };

  window.triggerBirthdayConfetti = function () {
    const container = document.getElementById("cursor-trail-container");
    const icons = ["🎂", "🎉", "✨", "💧", "💖", "👑", "🎈"];
    for (let i = 0; i < 36; i++) {
      const span = document.createElement("span");
      span.className = "cursor-sparkle";
      span.textContent = icons[i % icons.length];
      span.style.fontSize = "20px";
      span.style.left = Math.random() * window.innerWidth + "px";
      span.style.top = Math.random() * (window.innerHeight * 0.7) + "px";
      container.appendChild(span);
      setTimeout(function () {
        span.remove();
      }, 900);
    }
    const wall = document.getElementById("wall-section");
    if (wall) wall.scrollIntoView({ behavior: "smooth" });
    window.triggerRetroAlert("🎂 HAPPY BIRTHDAY BLOOD ELF BATH WATER!! Check out your Birthday Wall Post!! 🎉");
  };

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val !== undefined && val !== null ? String(val) : "";
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // --------------------------------------------------------------------------
  // INITIALIZE EVERYTHING ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    applyThemeAndCursor();
    initCursorTrail();
    renderProfileContent();
    renderTop8();
    initPersonalityQuiz();
    renderWallComments(false);
    initWallInteractions();
    initMusicPlayer();
  });
})();
