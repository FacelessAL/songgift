export interface Song {
  id: string;
  title: string;
  artist: string;
  occasion: string;
  audioSrc: string;
  imageSrc: string;
  duration: string;
  /** Which relationship/occasion page slugs this song should appear on */
  pages: string[];
}

export const songs: Song[] = [
  {
    id: 'aurelia-orbit-of-us',
    title: 'Orbit of Us',
    artist: 'Aurelia',
    occasion: 'Wedding / Love Song',
    audioSrc: '/songs/aurelia-orbit-of-us.mp3',
    imageSrc: '/songs/aurelia-orbit-of-us.png',
    duration: '3:32',
    pages: ['custom-song-for-wife', 'wedding-song-gift', 'anniversary-song-gift', 'love-song-gift', 'valentines-day-song-gift'],
  },
  {
    id: 'elias-sunday-morning-light',
    title: 'Sunday Morning Light',
    artist: 'Elias',
    occasion: 'Song for Husband',
    audioSrc: '/songs/elias-sunday-morning-light.mp3',
    imageSrc: '/songs/elias-sunday-morning-light.png',
    duration: '3:16',
    pages: ['custom-song-for-husband', 'anniversary-song-gift', 'fathers-day-song-gift', 'love-song-gift', 'birthday-song-gift'],
  },
  {
    id: 'lena-that-red-light-kiss',
    title: 'That Red Light Kiss',
    artist: 'Lena',
    occasion: 'Song for Girlfriend',
    audioSrc: '/songs/lena-that-red-light-kiss.mp3',
    imageSrc: '/songs/lena-that-red-light-kiss.png',
    duration: '3:09',
    pages: ['custom-song-for-girlfriend', 'valentines-day-song-gift', 'love-song-gift', 'proposal-song-gift'],
  },
  {
    id: 'noah-rooftop-in-june',
    title: 'Rooftop in June',
    artist: 'Noah',
    occasion: 'Song for Boyfriend',
    audioSrc: '/songs/noah-rooftop-in-june.mp3',
    imageSrc: '/songs/noah-rooftop-in-june.png',
    duration: '3:08',
    pages: ['custom-song-for-boyfriend', 'birthday-song-gift', 'love-song-gift', 'valentines-day-song-gift'],
  },
  {
    id: 'elena-the-light-you-left-on',
    title: 'The Light You Left On',
    artist: 'Elena',
    occasion: 'Song for Mom',
    audioSrc: '/songs/elena-the-light-you-left-on.mp3',
    imageSrc: '/songs/elena-the-light-you-left-on.png',
    duration: '3:03',
    pages: ['custom-song-for-mom', 'mothers-day-song-gift', 'birthday-song-gift', 'thank-you-song-gift', 'memorial-song-gift'],
  },
];

/** Get songs relevant to a specific page slug */
export function getSongsForPage(slug: string): Song[] {
  return songs.filter((s) => s.pages.includes(slug));
}

/** The featured song for the homepage */
export const featuredSong = songs[0];
