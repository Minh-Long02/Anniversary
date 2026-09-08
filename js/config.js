/*
  ============================================================
  CONFIG & DATA
  ------------------------------------------------------------
  Edit everything in this file to personalize the website.
  No need to touch HTML/CSS to change the content below.
  ============================================================
*/

// ---- 1. MAIN CONFIG -----------------------------------------------------
const CONFIG = {
    girlfriendName: "Em",
    yourName: "Anh",
    // ISO date string of when you two got together (used by the live counter)
    anniversaryDate: "2025-10-26T00:00:00",
    secretPassword: "ourlittleuniverse",
    songTitle: "Our Song",
    songArtist: "The one that reminds me of you",
    songFile: "assets/music/our-song.mp3",
    videoFile: "assets/video/our-video.mp4",
};

// ---- 2. OUR STORY / TIMELINE -------------------------------------------
const timelineData = [
    {
        date: "04.10.2025",
        title: "The day we first met.",
        desc: "I didn't know a single conversation could change everything.",
        detail:
            "I still remember exactly where we were standing. I wasn't looking for anything that day, and then suddenly, there you were — and nothing was ordinary again.",
        image: "assets/img/placeholder-01.jpg",
    },
    {
        date: "27.09.2023",
        title: "Our first date.",
        desc: "I was nervous the whole time. I don't think you noticed.",
        detail:
            "I rehearsed what to say about a hundred times and forgot all of it the moment you smiled. Best kind of nervous I've ever felt.",
        image: "assets/img/placeholder-02.PNG",
    },
    {
        date: "14.02.2025",
        title: "Our first Valentine's Day.",
        desc: "The first of many, I hope.",
        detail:
            "Nothing fancy, just us — and it was still the best Valentine's Day I've ever had, because you were there.",
        image: "assets/img/placeholder-09.PNG",
    },
    {
        date: "26.10.2026",
        title: "Still choosing you.",
        desc: "Every single day, again and again.",
        detail:
            "Some things never change. This is one of them — I choose you, today and every day after this one.",
        image: "assets/img/placeholder-03.PNG",
    },
];

// ---- 3. OUR MEMORIES / GALLERY -----------------------------------------
// categories: "first" | "dates" | "silly" | "favorite"
const memoriesData = [
    { src: "assets/img/placeholder-05.jpg", category: "first", caption: "The very first photo of us." },
    { src: "assets/img/placeholder-01.jpg", category: "first", caption: "That afternoon we couldn't stop talking." },
    { src: "assets/img/placeholder-06.MOV", category: "dates", caption: "Our second date, the one with the rain." },
    { src: "assets/img/placeholder-02.PNG", category: "dates", caption: "A date I never want to forget." },
    { src: "assets/img/placeholder-07.PNG", category: "silly", caption: "You made this face and I couldn't breathe from laughing." },
    { src: "assets/img/placeholder-03.PNG", category: "silly", caption: "Neither of us remembers why we were laughing here." },
    { src: "assets/img/placeholder-08.PNG", category: "favorite", caption: "My favorite photo of you. Always." },
    { src: "assets/images/placeholder-09.svg", category: "favorite", caption: "The way you look when you don't know I'm looking." },
    { src: "assets/images/placeholder-10.svg", category: "silly", caption: "Pure chaos, ten out of ten." },
    { src: "assets/img/placeholder-04.PNG", category: "favorite", caption: "This one lives in my head, rent-free." },
];

// ---- 4. OPEN WHEN... LETTERS --------------------------------------------
const openWhenData = [
    {
        title: "Open when you're missing me",
        message:
            "Hey love. If you're reading this, it means the distance is louder than usual right now. Close your eyes for a second — I'm right there with you, in every song, every quiet moment, every 'I wish you were here.' I'm missing you just as much, always.",
    },
    {
        title: "Open when you're sad",
        message:
            "I don't know what happened, and I don't need to. I just need you to know that whatever it is, it doesn't change how much I love you. You're allowed to not be okay. I'll stay right here until you are.",
    },
    {
        title: "Open when you need a hug",
        message:
            "Consider this your hug from across whatever distance separates us right now. Wrap this letter around yourself if you have to. I promise the real one is coming as soon as I can give it to you.",
    },
    {
        title: "Open when we fight",
        message:
            "We're both stubborn, I know. But underneath all of it, I'm still yours and you're still mine. Let's breathe, let's talk, let's remember we're on the same team. I'd rather be wrong with you than right without you.",
    },
    {
        title: "Open when you want to know how much I love you",
        message:
            "More than the stars I keep pointing at. More than yesterday, less than tomorrow. There isn't a number for it, love — just know that it's the biggest, quietest, most certain thing I've ever felt.",
    },
];

// ---- 5. 100 REASONS I LOVE YOU ------------------------------------------
const reasonsData = [
    "I love the way you laugh when you're trying not to laugh.",
    "I love how you make ordinary days feel special.",
    "I love the way you say my name when you're half asleep.",
    "I love how you steal the blanket and somehow still get cold.",
    "I love the way you get excited about small things.",
    "I love that you remember the tiny details I mention once.",
    "I love how your voice softens when you're being sincere.",
    "I love the way you dance when you think no one's watching.",
    "I love that you always save me the last bite.",
    "I love how you hum without noticing you're doing it.",
    "I love the way you say 'be careful' every time I leave.",
    "I love how you apologize first, even when you're right.",
    "I love the way your nose scrunches when you laugh too hard.",
    "I love how you text me 'landed safe' every single time.",
    "I love the way you hold my hand in your sleep.",
    "I love how you get shy when I compliment you.",
    "I love the way you fight for the people you love.",
    "I love how you make friends with every stranger.",
    "I love the way you say 'just five more minutes' every morning.",
    "I love how patient you are with me on my worst days.",
    "I love the way you cry at movies and deny it after.",
    "I love how you always know what to say.",
    "I love the way you look at me like I'm the only person in the room.",
    "I love how you send me songs that remind you of us.",
    "I love the way you plan little surprises for no reason.",
    "I love how you never let me walk on the outside of the sidewalk.",
    "I love the way you get competitive over the smallest games.",
    "I love how you remember how I take my coffee.",
    "I love the way you carry my bag without me asking.",
    "I love how you make me laugh until it hurts.",
    "I love the way you say 'I miss you' mid-conversation for no reason.",
    "I love how you always fix my collar before we leave.",
    "I love the way you get nervous meeting new people but do it anyway.",
    "I love how you never go to bed angry.",
    "I love the way you say 'we' instead of 'I'.",
    "I love how you defend me even when I'm not around.",
    "I love the way you look right after waking up.",
    "I love how you make every trip an adventure.",
    "I love the way you listen like every word matters.",
    "I love how you cheer for me louder than anyone.",
    "I love the way you say sorry with your eyes before your words.",
    "I love how you keep every little note I've ever given you.",
    "I love the way you hug like you mean it.",
    "I love how you always know when something's wrong.",
    "I love the way you make our home feel like home.",
    "I love how you get so focused when you're doing something you love.",
    "I love the way you say 'okay, one more episode' and mean five.",
    "I love how you never make me feel silly for caring too much.",
    "I love the way you remember our anniversary down to the hour.",
    "I love how you learned my favorite food without me telling you.",
    "I love the way you say 'come here' when I'm upset.",
    "I love how you make plans just to see me smile.",
    "I love the way you write my name when you're doodling.",
    "I love how you always order dessert 'to share'.",
    "I love the way you look out for my family like they're yours.",
    "I love how you never let a fight last past dinner.",
    "I love the way you say 'we'll figure it out' and mean it.",
    "I love how you laugh at your own jokes before you finish them.",
    "I love the way you kiss my forehead like it's a habit.",
    "I love how you keep believing in me even when I don't.",
    "I love the way you say goodnight like it's the most important word of the day.",
    "I love how you make time for me even on your busiest days.",
    "I love the way you get shy when I take your photo.",
    "I love how you remember every promise you've ever made me.",
    "I love the way you handle my bad days without complaint.",
    "I love how you never tire of my long stories.",
    "I love the way you look at old photos of us and smile.",
    "I love how you say 'I've got you' and I know it's true.",
    "I love the way you make me feel safe in a chaotic world.",
    "I love how you learned to like the things I like, just for me.",
    "I love the way you say my nickname like it's a secret only we know.",
    "I love how you turn bad days into inside jokes.",
    "I love the way you notice when I'm quiet and ask why.",
    "I love how you keep choosing me even on the hard days.",
    "I love the way you plan our future like it's already certain.",
    "I love how you never let me feel alone in a room full of people.",
    "I love the way you say 'proud of you' and actually mean it.",
    "I love how you remember the little anniversaries too.",
    "I love the way you make me laugh at 2am over nothing.",
    "I love how you hold on to hope, even when I lose mine.",
    "I love the way you say 'us' like it's the safest word you know.",
    "I love how you show up, every time, no matter what.",
    "I love the way you make quiet moments feel like enough.",
    "I love how you learned all my little habits without me noticing.",
    "I love the way you say 'come back to me' before I even leave.",
    "I love how you never stop trying to make me smile.",
    "I love the way you love the people I love.",
    "I love how you turned into my favorite person without trying.",
    "I love the way you say 'let's grow old like this'.",
    "I love how gentle you are with things that matter to me.",
    "I love the way you look at me and somehow it still feels like the first time.",
    "I love how you make forever sound like a reasonable idea.",
    "I love the way you say 'I love you' like it never gets old.",
    "I love how our silence is comfortable, not empty.",
    "I love the way you fit into my life like you were always meant to be there.",
    "I love how you make me want to be better, without ever asking me to be.",
    "I love the way you say my name and it sounds like home.",
    "I love how every single day with you still feels like a good idea.",
    "I love the way you are, simply, entirely, and completely you.",
    "I love that out of everyone, I get to choose you — again and again.",
];

// ---- 6. MINI QUIZ ("How well do you know us?") --------------------------
const quizData = [
    {
        question: "Where was our first date?",
        options: ["Cafe", "Cinema", "Restaurant"],
        correct: 0,
    },
    {
        question: "What day did we first meet?",
        options: ["12.08.2023", "27.09.2023", "14.02.2024"],
        correct: 0,
    },
    {
        question: "What's the name of our song?",
        options: ["A random song", "Our Song", "Someone else's song"],
        correct: 1,
    },
    {
        question: "What do I always say before you leave?",
        options: ["Hurry back", "Be careful", "Text me"],
        correct: 1,
    },
    {
        question: "What's my favorite photo of you?",
        options: ["A silly one", "One where you don't know I'm looking", "A formal one"],
        correct: 1,
    },
    {
        question: "How do we usually end a fight?",
        options: ["We don't sleep angry", "We ignore it for days", "We avoid the topic forever"],
        correct: 0,
    },
    {
        question: "What do I save for you at dinner?",
        options: ["Nothing", "The last bite", "The bill"],
        correct: 1,
    },
    {
        question: "What did I learn just for you?",
        options: ["Your favorite food", "Your class schedule", "Your passwords"],
        correct: 0,
    },
    {
        question: "What happens when I take your photo?",
        options: ["You pose confidently", "You get shy", "You run away"],
        correct: 1,
    },
    {
        question: "What's our plan, according to me?",
        options: ["Take it day by day", "Grow old like this", "Not think about it"],
        correct: 1,
    },
];
