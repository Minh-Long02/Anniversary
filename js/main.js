/* ============================================================
   OUR LITTLE UNIVERSE — MAIN LOGIC
   Reads data from config.js. Organized by section for easy editing.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initSkyCanvas();
    initFloatingHearts();
    initCursorGlow();
    initScrollProgress();
    initRevealOnScroll();
    initHeroTyping();
    initHeartClickEffect();
    initLoveCounter();
    initTimeline();
    initGallery();
    initSong();
    initOpenWhen();
    initReasons();
    initQuiz();
    initSecretBox();
    initFinale();
    initModalCloseHandlers();
    document.documentElement.classList.add("js-ready");
});

/* ============================================================
   GLOBAL: NIGHT SKY CANVAS (stars + gentle drift)
   ============================================================ */
function initSkyCanvas() {
    const canvas = document.getElementById("sky-canvas");
    const ctx = canvas.getContext("2d");
    let stars = [];
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = document.documentElement.scrollHeight;
        const count = Math.floor((width * height) / 9000);
        stars = Array.from({ length: Math.min(count, 400) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.4 + 0.3,
            speed: Math.random() * 0.15 + 0.02,
            twinklePhase: Math.random() * Math.PI * 2,
        }));
    }

    function draw(time) {
        ctx.clearRect(0, 0, width, height);
        for (const s of stars) {
            const twinkle = 0.5 + 0.5 * Math.sin(time / 1000 + s.twinklePhase);
            ctx.globalAlpha = 0.3 + twinkle * 0.5;
            ctx.fillStyle = "#f7ede2";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
            s.y += s.speed;
            if (s.y > height) s.y = 0;
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
}

/* ============================================================
   GLOBAL: FLOATING HEARTS (very subtle, continuous)
   ============================================================ */
function initFloatingHearts() {
    const container = document.getElementById("floating-hearts");
    const symbols = ["♡", "♥"];

    function spawnHeart() {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
        const duration = 10 + Math.random() * 8;
        heart.style.animationDuration = duration + "s";
        heart.style.fontSize = 12 + Math.random() * 16 + "px";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000 + 500);
    }

    setInterval(spawnHeart, 1800);
}

/* ============================================================
   GLOBAL: CURSOR GLOW + MOUSE PARALLAX (desktop only)
   ============================================================ */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    const heroContent = document.querySelector(".hero-content");
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    window.addEventListener("mousemove", (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

        if (heroContent) {
            const x = (e.clientX / window.innerWidth - 0.5) * 14;
            const y = (e.clientY / window.innerHeight - 0.5) * 14;
            heroContent.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}

/* ============================================================
   GLOBAL: SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
    const bar = document.getElementById("scroll-progress-bar");
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (scrollTop / max) * 100 : 0) + "%";
    });
}

/* ============================================================
   GLOBAL: REVEAL ON SCROLL (IntersectionObserver)
   ============================================================ */
function initRevealOnScroll() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal, .reveal-line, .gallery-item, .envelope").forEach((el) => {
        observer.observe(el);
    });
}

/* ============================================================
   HERO: typing animation + enter button transition
   ============================================================ */
function initHeroTyping() {
    const el = document.getElementById("hero-typing");
    const text = "Một góc nhỏ được tạo nên dành riêng cho chúng ta.";
    let i = 0;

    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            setTimeout(type, 45);
        } else {
            el.classList.add("typing-done");
        }
    }
    setTimeout(type, 600);

    document.getElementById("enter-btn").addEventListener("click", () => {
        document.getElementById("counter").scrollIntoView({ behavior: "smooth" });
    });
}

/* ============================================================
   GLOBAL: little heart burst on any .btn click
   ============================================================ */
function initHeartClickEffect() {
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn, .env-icon, .play-btn");
        if (!btn) return;
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement("span");
            heart.className = "click-heart";
            heart.textContent = "♡";
            heart.style.left = e.clientX + (Math.random() * 30 - 15) + "px";
            heart.style.top = e.clientY + "px";
            heart.style.fontSize = 12 + Math.random() * 10 + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 900);
        }
    });
}

/* ============================================================
   2. LOVE COUNTER — realtime, based on CONFIG.anniversaryDate
   ============================================================ */
function initLoveCounter() {
    const start = new Date(CONFIG.anniversaryDate).getTime();

    function update() {
        const now = Date.now();
        let diff = Math.max(0, now - start);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("count-days").textContent = days;
        document.getElementById("count-hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("count-minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("count-seconds").textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
}

/* ============================================================
   3. OUR STORY / TIMELINE
   ============================================================ */
function initTimeline() {
    const container = document.getElementById("timeline");

    timelineData.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "timeline-item reveal";
        el.innerHTML = `
      <p class="t-date">${item.date}</p>
      <h3>${item.title}</h3>
      <p class="t-desc">${item.desc}</p>
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
    `;
        el.addEventListener("click", () => openTimelineModal(index));
        container.appendChild(el);
    });

    // newly created items need to be observed for reveal
    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
        { threshold: 0.15 }
    );
    container.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
}

function openTimelineModal(index) {
    const item = timelineData[index];
    document.getElementById("timeline-modal-img").src = item.image;
    document.getElementById("timeline-modal-date").textContent = item.date;
    document.getElementById("timeline-modal-title").textContent = item.title;
    document.getElementById("timeline-modal-detail").textContent = item.detail;
    openModal("timeline-modal");
}

/* ============================================================
   4. OUR MEMORIES / GALLERY + LIGHTBOX
   ============================================================ */
let currentGalleryFilter = "all";
let currentLightboxIndex = 0;

function initGallery() {
    const grid = document.getElementById("gallery-grid");

    memoriesData.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "gallery-item";
        el.dataset.category = item.category;
        el.style.setProperty("--tilt", (Math.random() * 6 - 3) + "deg");
        el.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      <p class="g-caption">${item.caption}</p>
    `;
        el.addEventListener("click", () => openLightbox(index));
        grid.appendChild(el);
    });

    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
        { threshold: 0.1 }
    );
    grid.querySelectorAll(".gallery-item").forEach((el) => observer.observe(el));

    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentGalleryFilter = btn.dataset.filter;
            applyGalleryFilter();
        });
    });
}

function applyGalleryFilter() {
    document.querySelectorAll(".gallery-item").forEach((el) => {
        const show = currentGalleryFilter === "all" || el.dataset.category === currentGalleryFilter;
        el.classList.toggle("filtered-out", !show);
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    renderLightbox();
    openModal("lightbox");
}

function renderLightbox() {
    const item = memoriesData[currentLightboxIndex];
    document.getElementById("lightbox-img").src = item.src;
    document.getElementById("lightbox-caption").textContent = item.caption;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lightbox-prev").addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + memoriesData.length) % memoriesData.length;
        renderLightbox();
    });
    document.getElementById("lightbox-next").addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % memoriesData.length;
        renderLightbox();
    });
});

/* ============================================================
   5. OUR SONG — vinyl + custom audio player
   ============================================================ */
function initSong() {
    document.getElementById("song-title").textContent = CONFIG.songTitle;

    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");
    const vinyl = document.getElementById("vinyl");
    const progressBar = document.getElementById("progress-bar");
    const volumeBar = document.getElementById("volume-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationTimeEl = document.getElementById("duration-time");
    const autoplayNote = document.getElementById("autoplay-note");

    audio.volume = parseFloat(volumeBar.value);
    audio.src = CONFIG.songFile;

    function formatTime(sec) {
        if (!isFinite(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${String(s).padStart(2, "0")}`;
    }

    function setPlayingUI(isPlaying) {
        iconPlay.style.display = isPlaying ? "none" : "block";
        iconPause.style.display = isPlaying ? "block" : "none";
        vinyl.classList.toggle("spinning", isPlaying);
    }

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {
                autoplayNote.textContent = "Hãy nhấn phát lại khi trình duyệt cho phép âm thanh.";
            });
        } else {
            audio.pause();
        }
    });

    audio.addEventListener("play", () => setPlayingUI(true));
    audio.addEventListener("pause", () => setPlayingUI(false));

    audio.addEventListener("loadedmetadata", () => {
        durationTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    progressBar.addEventListener("input", () => {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });

    volumeBar.addEventListener("input", () => {
        audio.volume = parseFloat(volumeBar.value);
    });

    // No autoplay: browsers block it anyway, we simply do nothing on load.
    audio.addEventListener("error", () => {
        autoplayNote.textContent = "Hãy thêm file nhạc vào assets/music/our-song.mp3";
    });
}

/* ============================================================
   6. OPEN WHEN... letters
   ============================================================ */
function initOpenWhen() {
    const grid = document.getElementById("envelopes-grid");

    openWhenData.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "envelope";
        el.innerHTML = `<span class="env-icon">💌</span><p>${item.title}</p>`;
        el.addEventListener("click", () => openLetter(index));
        grid.appendChild(el);
    });

    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
        { threshold: 0.15 }
    );
    grid.querySelectorAll(".envelope").forEach((el) => observer.observe(el));
}

function openLetter(index) {
    const item = openWhenData[index];
    document.getElementById("letter-title").textContent = item.title;
    document.getElementById("letter-message").textContent = item.message;
    openModal("letter-modal");
}

/* ============================================================
   7. 100 REASONS I LOVE YOU
   ============================================================ */
function initReasons() {
    const card = document.getElementById("reason-card");
    const indexEl = document.getElementById("reason-index");
    const textEl = document.getElementById("reason-text");
    const fill = document.getElementById("reason-progress-fill");
    const label = document.getElementById("reason-progress-label");

    let seen = 0;
    let order = Array.from({ length: reasonsData.length }, (_, i) => i);
    // shuffle for a "random" but non-repeating experience
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    card.addEventListener("click", () => {
        if (seen >= order.length) return;
        const reasonIndex = order[seen];
        seen++;

        card.classList.remove("flipping");
        void card.offsetWidth; // restart animation
        card.classList.add("flipping");

        indexEl.textContent = "#" + String(reasonIndex + 1).padStart(3, "0");
        textEl.textContent = reasonsData[reasonIndex];

        fill.style.width = (seen / order.length) * 100 + "%";
        label.textContent = `${seen} / ${order.length}`;
    });
}

/* ============================================================
   8. MINI QUIZ
   ============================================================ */
function initQuiz() {
    const box = document.getElementById("quiz-box");
    let current = 0;
    let score = 0;

    function renderQuestion() {
        const q = quizData[current];
        box.innerHTML = `
    <p class="quiz-progress">Câu hỏi ${current + 1} / ${quizData.length}</p>
      <p class="quiz-question">${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join("")}
      </div>
    `;

        box.querySelectorAll(".quiz-option").forEach((btn) => {
            btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index)));
        });
    }

    function handleAnswer(selected) {
        const q = quizData[current];
        const buttons = box.querySelectorAll(".quiz-option");
        buttons.forEach((b) => (b.disabled = true));

        if (selected === q.correct) {
            score++;
            buttons[selected].classList.add("correct");
        } else {
            buttons[selected].classList.add("wrong");
            buttons[q.correct].classList.add("correct");
        }

        setTimeout(() => {
            current++;
            if (current < quizData.length) {
                renderQuestion();
            } else {
                renderResult();
            }
        }, 1000);
    }

    function renderResult() {
        const good = score >= quizData.length * 0.7;
        box.innerHTML = `
      <div class="quiz-result">
        <h3>Em trả lời đúng ${score}/${quizData.length} câu.</h3>
        <p>${good ? "Được lắm... em thật sự hiểu chúng ta. ♡" : "Không tệ đâu — hãy cùng tạo thêm nhiều kỷ niệm nhé."}</p>
        <button class="btn btn-outline" id="quiz-retry">Chơi lại</button>
      </div>
    `;
        document.getElementById("quiz-retry").addEventListener("click", () => {
            current = 0;
            score = 0;
            renderQuestion();
        });
    }

    renderQuestion();
}

/* ============================================================
   9. SECRET BOX
   ============================================================ */
function initSecretBox() {
    const form = document.getElementById("secret-form");
    const input = document.getElementById("secret-input");
    const error = document.getElementById("secret-error");
    const content = document.getElementById("secret-content");
    const lock = document.getElementById("secret-lock");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.trim().toLowerCase() === CONFIG.secretPassword.toLowerCase()) {
            error.textContent = "";
            lock.textContent = "🔓";
            lock.classList.add("unlocked");
            content.classList.add("open");
            form.style.display = "none";
        } else {
            error.textContent = "Chưa đúng rồi... thử lại nhé.";
            input.value = "";
        }
    });
}

/* ============================================================
   10. FINAL CINEMATIC SECTION
   ============================================================ */
function initFinale() {
    document.getElementById("finale-happy").textContent = `Chúc mừng ngày kỷ niệm, ${CONFIG.girlfriendName}. ♡`;
    document.getElementById("finale-names").textContent = `${CONFIG.yourName} × ${CONFIG.girlfriendName}`;

    const finaleSection = document.getElementById("finale");
    const lines = document.querySelectorAll(".finale-line");
    const finalBlock = document.getElementById("finale-final");
    let triggered = false;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !triggered) {
                    triggered = true;
                    lines.forEach((line, i) => {
                        setTimeout(() => line.classList.add("visible"), i * 1300);
                    });
                    setTimeout(() => {
                        finalBlock.classList.add("visible");
                        spawnConfetti();
                    }, lines.length * 1300 + 400);
                }
            });
        },
        { threshold: 0.4 }
    );

    observer.observe(finaleSection);
}

function spawnConfetti() {
    const colors = ["#f3b6c9", "#7a2e42", "#f7ede2"];
    const symbols = ["♡", "✦", "●"];
    for (let i = 0; i < 40; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.color = colors[Math.floor(Math.random() * colors.length)];
        piece.style.fontSize = 10 + Math.random() * 14 + "px";
        piece.style.setProperty("--rot", Math.random() * 720 - 360 + "deg");
        piece.style.animationDuration = 4 + Math.random() * 3 + "s";
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 8000);
    }
}

/* ============================================================
   MODAL HELPERS (shared by timeline, lightbox, letters)
   ============================================================ */
function openModal(id) {
    document.getElementById(id).classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).classList.remove("open");
    document.body.style.overflow = "";
}

function initModalCloseHandlers() {
    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
        btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
    });

    document.querySelectorAll(".modal-overlay").forEach((overlay) => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal-overlay.open").forEach((overlay) => closeModal(overlay.id));
        }
    });
}
