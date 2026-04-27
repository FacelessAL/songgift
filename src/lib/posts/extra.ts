import { Post, S } from './types';
const C = `${S}/create`;

// ─── ENGAGEMENT SCENARIOS (20) ────────────────────────────
export const moreProposal: Post[] = [
{text:`Planning the proposal of a lifetime?\n\nThe ring is the question. The custom song is the answer.\n\nLet us help.`,link:`${S}/proposal-song-gift`,category:'proposal'},
{text:`Beach proposal + custom song playing from a speaker = the most cinematic moment of their life.`,link:`${S}/proposal-song-gift`,category:'proposal'},
{text:`The proposal video goes viral.\n\nThe custom song in the background? That's the part people replay.`,link:`${S}/proposal-song-gift`,category:'proposal'},
{text:`You already know they'll say yes.\n\nA custom proposal song makes them say "YES YES YES."`,link:`${S}/proposal-song-gift`,category:'proposal'},
{text:`An engagement isn't just a question.\n\nIt's a promise.\n\nA custom song makes that promise unforgettable.`,link:`${S}/engagement-song-gift`,category:'engagement'},
{text:`Just engaged? The celebration needs a soundtrack.\n\nA custom song about your journey from strangers to soulmates.`,link:`${S}/engagement-song-gift`,category:'engagement'},
{text:`Engagement party gift idea that blows everything else away:\n\nA custom song about the couple. Done.`,link:`${S}/engagement-song-gift`,category:'engagement'},
];

// ─── SEASONAL VIBES (30) ─────────────────────────────────
export const seasonal: Post[] = [
{text:`Spring is for new beginnings.\n\nStart something beautiful — a custom song about the person you love.`,link:C,category:'emotional'},
{text:`Summer love hits different.\n\nA custom song captures the warmth, the laughter, the golden hour moments.`,link:C,category:'emotional'},
{text:`Fall feels like a movie.\n\nA custom song gives your love story the soundtrack it deserves.`,link:C,category:'emotional'},
{text:`Winter is for cozy nights in.\n\nPlay a custom song by the fire and watch them fall in love all over again.`,link:C,category:'emotional'},
{text:`Rainy days need good music.\n\nA custom song about your love story turns any day into the best day.`,link:C,category:'emotional'},
{text:`Summer road trip playlist: 1 custom song + 1 open road + 1 person you love = perfect.\n\nCreate the song.`,link:C,category:'emotional'},
{text:`Back to school season? Celebrate the teacher who changed your kid's life.\n\nWith a custom song.`,link:`${S}/custom-song-for-teacher`,category:'teacher'},
{text:`Wedding season is here.\n\nBe the guest who gives the gift NO ONE else thought of — a custom song.`,link:`${S}/wedding-song-gift`,category:'wedding'},
{text:`Prom season reminder: A custom song makes the night magical.\n\nWay better than another corsage.`,link:C,category:'emotional'},
{text:`Tax refund came in?\n\nInvest in something priceless — a custom song for someone you love. Only $79.`,link:C,category:'trust'},
{text:`Monday motivation: Give someone a reason to smile this week.\n\nA custom song does that.`,link:C,category:'emotional'},
{text:`Friday feeling: You made it through the week.\n\nCelebrate by ordering a custom song for someone who makes the hard weeks worth it.`,link:C,category:'emotional'},
{text:`Sunday vibes: cozy blanket, warm drink, and a custom song about your love playing in the background.\n\nPerfect day.`,link:C,category:'emotional'},
{text:`Long-distance relationship? A custom song bridges every mile.\n\nThey'll feel you right there with them.`,link:C,category:'emotional'},
{text:`Military deployment? A custom song keeps them close.\n\nEvery time they press play, you're there.`,link:C,category:'emotional'},
];

// ─── MORE FAMILY (30) ────────────────────────────────────
export const moreFamily: Post[] = [
{text:`Your daughter just graduated. Your son just got married. Your baby isn't a baby anymore.\n\nA custom song captures who they were AND who they're becoming.`,link:`${S}/custom-song-for-daughter`,category:'daughter'},
{text:`She's daddy's little girl — no matter how old she gets.\n\nA custom song reminds her of that forever.`,link:`${S}/custom-song-for-daughter`,category:'daughter'},
{text:`From tea parties to real parties — your daughter grew up in a blink.\n\nA custom song slows time down.`,link:`${S}/custom-song-for-daughter`,category:'daughter'},
{text:`Your son will be embarrassed at first.\n\nThen proud. Then emotional.\n\nThat's the custom song effect.`,link:`${S}/custom-song-for-son`,category:'son'},
{text:`He went from needing you for everything to being someone incredible.\n\nA custom song for your son celebrates the whole arc.`,link:`${S}/custom-song-for-son`,category:'son'},
{text:`Your son doesn't say much.\n\nBut when he hears a song about YOUR bond? He won't need to. His face will say it all.`,link:`${S}/custom-song-for-son`,category:'son'},
{text:`Grandma keeps every photo you send.\n\nNow send her something she can LISTEN to and weep happily about.`,link:`${S}/custom-song-for-grandparents`,category:'grandparents'},
{text:`Grandpa tells the same stories every holiday.\n\nA custom song turns HIS story into something the whole family cherishes.`,link:`${S}/custom-song-for-grandparents`,category:'grandparents'},
{text:`They rocked you to sleep as a baby.\n\nA custom song for grandparents rocks them with love as adults.`,link:`${S}/custom-song-for-grandparents`,category:'grandparents'},
{text:`Your sister stole your clothes. Your heart. Your confidence.\n\nReturn the favor with a song she'll cry over. (In a good way.)`,link:`${S}/custom-song-for-sister`,category:'sister'},
{text:`Big sister energy. Little sister chaos.\n\nA custom song celebrates whatever dynamic you have — and it's beautiful.`,link:`${S}/custom-song-for-sister`,category:'sister'},
{text:`She's your sister AND your therapist.\n\nTime to pay her back. With a custom song. (Cheaper than actual therapy.)`,link:`${S}/custom-song-for-sister`,category:'sister'},
{text:`Your brother won't admit the song made him emotional.\n\nBut his playlist history will.`,link:`${S}/custom-song-for-brother`,category:'brother'},
{text:`From fighting over the remote to fighting for each other.\n\nA custom song for brothers honors the whole journey.`,link:`${S}/custom-song-for-brother`,category:'brother'},
{text:`He's your brother. Your built-in best friend.\n\nA custom song says "I'm lucky you're mine."`,link:`${S}/custom-song-for-brother`,category:'brother'},
{text:`Your pet greeted you like a hero every single day.\n\nA custom song greets their memory with the same love. 🐾`,link:`${S}/custom-song-for-pet`,category:'pet'},
{text:`Fur baby parents, this one's for you.\n\nA custom song about your pet is the cutest thing you'll ever own.`,link:`${S}/custom-song-for-pet`,category:'pet'},
{text:`Dogs don't understand English.\n\nBut YOU understand the love.\n\nA pet song captures it perfectly.`,link:`${S}/custom-song-for-pet`,category:'pet'},
{text:`Your teacher saw something in you when no one else did.\n\nA custom song says "You changed my life. Literally."`,link:`${S}/custom-song-for-teacher`,category:'teacher'},
{text:`Teacher Appreciation Week deserves more than an apple.\n\nGive them a custom song they'll keep forever.`,link:`${S}/custom-song-for-teacher`,category:'teacher'},
{text:`Baby on board! 🍼\n\nA custom song for the new parents captures the excitement, the nerves, and the overwhelming love.`,link:`${S}/baby-shower-song-gift`,category:'baby'},
{text:`The baby shower gift everyone will talk about?\n\nA custom song about the new family.\n\nNot another onesie.`,link:`${S}/baby-shower-song-gift`,category:'baby'},
{text:`Sweet 16 is the beginning of a new chapter.\n\nA custom song celebrates the first 16 and everything ahead.`,link:`${S}/sweet-16-song-gift`,category:'sweet-16'},
{text:`Her Sweet 16 deserves more than a party.\n\nIt deserves a song. HER song.`,link:`${S}/sweet-16-song-gift`,category:'sweet-16'},
{text:`A Quinceañera marks the journey from girl to young woman.\n\nA custom song makes that moment unforgettable.`,link:`${S}/quinceanera-song-gift`,category:'quinceanera'},
{text:`15 candles. 15 years. 1 custom song that captures every beautiful moment.`,link:`${S}/quinceanera-song-gift`,category:'quinceanera'},
{text:`An apology card is forgotten.\n\nA custom apology song is remembered — and felt.`,link:`${S}/apology-song-gift`,category:'apology'},
{text:`"I'm sorry" is a start.\n\nA custom song says "I'm sorry AND here's proof I'm trying."\n\nActions > words.`,link:`${S}/apology-song-gift`,category:'apology'},
{text:`Thank you cards are polite.\n\nA custom thank-you song is profound.\n\nKnow the difference.`,link:`${S}/thank-you-song-gift`,category:'thank-you'},
{text:`They saved you in ways they'll never know.\n\nA thank-you song lets them know.\n\nEvery note. Every word.`,link:`${S}/thank-you-song-gift`,category:'thank-you'},
];

// ─── LOVE SONG GENERIC (20) ─────────────────────────────
export const loveSong: Post[] = [
{text:`Love songs are great.\n\nBut a love song about YOUR love?\n\nThat's on another level entirely.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`Your love story is unique.\n\nYour love song should be too.\n\nCustom love songs — made from YOUR memories.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`Every great love has a song.\n\nMost people just borrow one from the radio.\n\nYou can OWN yours.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`A custom love song turns "our song" from a random track into something deeply, beautifully personal.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`From the first "hi" to the last "goodnight" — a custom love song captures the whole journey.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`They didn't just steal your heart.\n\nThey rewrote your whole story.\n\nA custom song celebrates the rewrite.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`Love is complicated. Messy. Beautiful. Real.\n\nA custom song embraces ALL of it.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`Your love isn't a cliché.\n\nSo why settle for a cliché love song?\n\nGet one made about YOUR story.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`The way they hold your hand.\n\nThe way they know your order.\n\nThe way they just… get you.\n\nAll of it — in a song.`,link:`${S}/love-song-gift`,category:'emotional'},
{text:`The most played song on their phone should be the one about them.\n\nMake it happen.`,link:`${S}/love-song-gift`,category:'emotional'},
];

// ─── MORE WEDDING/ANNIVERSARY (20) ──────────────────────
export const moreWedding: Post[] = [
{text:`The reception will be fun.\n\nBut the moment a custom song plays about the couple? That's when it becomes magical.`,link:`${S}/wedding-song-gift`,category:'wedding'},
{text:`The best man speech is nice.\n\nA custom song about the couple? That's the REAL speech.`,link:`${S}/wedding-song-gift`,category:'wedding'},
{text:`Your wedding day is the beginning.\n\nA custom song is the bookmark you'll return to every anniversary.`,link:`${S}/wedding-song-gift`,category:'wedding'},
{text:`Married 10 years and still holding hands?\n\nThat deserves a custom anniversary song. Obviously.`,link:`${S}/anniversary-song-gift`,category:'anniversary'},
{text:`Silver anniversary = a custom song about 25 years of "I still choose you."\n\nPowerful stuff.`,link:`${S}/anniversary-song-gift`,category:'anniversary'},
{text:`The secret to a great anniversary gift?\n\nMake it personal.\n\nA custom song = the most personal gift alive.`,link:`${S}/anniversary-song-gift`,category:'anniversary'},
{text:`Year 1: paper.\nYear 5: wood.\nYear 10: tin.\nYear ANY: a custom song.\n\nThe timeless anniversary gift.`,link:`${S}/anniversary-song-gift`,category:'anniversary'},
{text:`Your anniversary dinner just got an upgrade.\n\nPlay a custom song mid-meal and watch the magic happen.`,link:`${S}/anniversary-song-gift`,category:'anniversary'},
{text:`Renewing your vows? Play a custom song that captures every year of your journey.\n\nThere won't be a dry eye.`,link:`${S}/wedding-song-gift`,category:'wedding'},
{text:`The best wedding gift isn't on the registry.\n\nIt's a custom song about the couple.\n\nTrust us.`,link:`${S}/wedding-song-gift`,category:'wedding'},
];

// ─── MORE GRADUATION (15) ────────────────────────────────
export const moreGraduation: Post[] = [
{text:`They survived finals week (barely).\n\nCelebrate with a custom graduation song that says "You did it!"`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`From caps to careers.\n\nA custom graduation song celebrates the transition in the most beautiful way.`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`Graduation photos capture the look.\n\nA custom song captures the feeling.`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`They doubted themselves a thousand times.\n\nA custom graduation song says "I never doubted you. Not once."`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`The graduation ceremony ends in a day.\n\nA custom song celebrates the achievement forever.`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`From freshman to finisher.\n\nA custom graduation song honors the whole ride.`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`Class of 2025 deserves a custom song.\n\nActually, every class does. But yours especially.`,link:`${S}/graduation-song-gift`,category:'graduation'},
{text:`The after-grad party needs ONE thing to go from good to legendary:\n\nA custom song about the graduate.`,link:`${S}/graduation-song-gift`,category:'graduation'},
];

// ─── MORE MEMORIAL (15) ──────────────────────────────────
export const moreMemorial: Post[] = [
{text:`The anniversary of their passing is coming up.\n\nA memorial song turns grief into gratitude.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`They always knew the right thing to say.\n\nNow a memorial song says the right thing about THEM.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`You hear a song on the radio and think of them.\n\nImagine a song that's ABOUT them.\n\nA memorial song.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`Losing someone doesn't mean losing their story.\n\nA memorial song keeps it playing.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`A memorial song isn't goodbye.\n\nIt's "I carry you with me. Always."`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`Light a candle. Press play.\n\nA memorial song fills the silence they left behind with something beautiful.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`They'd probably say "don't make a fuss."\n\nBut a memorial song isn't a fuss.\n\nIt's a tribute. And they deserve it.`,link:`${S}/memorial-song-gift`,category:'memorial'},
{text:`The world lost someone incredible.\n\nA memorial song ensures the world never forgets.`,link:`${S}/memorial-song-gift`,category:'memorial'},
];
