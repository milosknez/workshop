// Sound data for Katarina's Lullaby App
// Using free online audio URLs for demo purposes

export const CATEGORIES = {
  LULLABIES: 'lullabies',
  WHITE_NOISE: 'whiteNoise',
  NATURE: 'nature',
  HEARTBEAT: 'heartbeat',
};

export const CATEGORY_INFO = {
  [CATEGORIES.LULLABIES]: {
    title: 'Lullabies',
    icon: '🎵',
    color: '#B39DDB',
    description: 'Gentle melodies for Katarina',
  },
  [CATEGORIES.WHITE_NOISE]: {
    title: 'White Noise',
    icon: '🌫️',
    color: '#90CAF9',
    description: 'Calming background sounds',
  },
  [CATEGORIES.NATURE]: {
    title: 'Nature',
    icon: '🌿',
    color: '#A5D6A7',
    description: 'Peaceful nature sounds',
  },
  [CATEGORIES.HEARTBEAT]: {
    title: 'Heartbeat',
    icon: '💗',
    color: '#F48FB1',
    description: 'Soothing rhythmic sounds',
  },
};

export const SOUNDS = [
  {
    id: '1',
    title: 'Twinkle Twinkle',
    category: CATEGORIES.LULLABIES,
    icon: '⭐',
    duration: '3:00',
  },
  {
    id: '2',
    title: 'Brahms Lullaby',
    category: CATEGORIES.LULLABIES,
    icon: '🌙',
    duration: '4:00',
  },
  {
    id: '3',
    title: 'Rock-a-Bye Baby',
    category: CATEGORIES.LULLABIES,
    icon: '🍃',
    duration: '3:30',
  },
  {
    id: '4',
    title: 'Hush Little Baby',
    category: CATEGORIES.LULLABIES,
    icon: '🤫',
    duration: '3:15',
  },
  {
    id: '5',
    title: 'Soft White Noise',
    category: CATEGORIES.WHITE_NOISE,
    icon: '☁️',
    duration: '∞',
  },
  {
    id: '6',
    title: 'Fan Sound',
    category: CATEGORIES.WHITE_NOISE,
    icon: '🌀',
    duration: '∞',
  },
  {
    id: '7',
    title: 'Washing Machine',
    category: CATEGORIES.WHITE_NOISE,
    icon: '🫧',
    duration: '∞',
  },
  {
    id: '8',
    title: 'Vacuum Cleaner',
    category: CATEGORIES.WHITE_NOISE,
    icon: '🔊',
    duration: '∞',
  },
  {
    id: '9',
    title: 'Rain Sounds',
    category: CATEGORIES.NATURE,
    icon: '🌧️',
    duration: '∞',
  },
  {
    id: '10',
    title: 'Ocean Waves',
    category: CATEGORIES.NATURE,
    icon: '🌊',
    duration: '∞',
  },
  {
    id: '11',
    title: 'Forest Birds',
    category: CATEGORIES.NATURE,
    icon: '🐦',
    duration: '∞',
  },
  {
    id: '12',
    title: 'Gentle Stream',
    category: CATEGORIES.NATURE,
    icon: '💧',
    duration: '∞',
  },
  {
    id: '13',
    title: 'Heartbeat Slow',
    category: CATEGORIES.HEARTBEAT,
    icon: '💓',
    duration: '∞',
  },
  {
    id: '14',
    title: 'Womb Sounds',
    category: CATEGORIES.HEARTBEAT,
    icon: '🤰',
    duration: '∞',
  },
  {
    id: '15',
    title: 'Shushing',
    category: CATEGORIES.HEARTBEAT,
    icon: '🤫',
    duration: '∞',
  },
];

export const TIMER_OPTIONS = [
  { label: '5 min', minutes: 5 },
  { label: '10 min', minutes: 10 },
  { label: '15 min', minutes: 15 },
  { label: '30 min', minutes: 30 },
  { label: '45 min', minutes: 45 },
  { label: '1 hour', minutes: 60 },
  { label: '2 hours', minutes: 120 },
  { label: 'No timer', minutes: 0 },
];
