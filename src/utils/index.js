import { shuffle } from 'lodash'

export const difficulties = {
  easy: 10,
  medium: 20,
  hard: 30,
  expert: 40,
  survival: 140
}

export const emojis = [
  '🎄',
  '😰',
  '🐝',
  '🐸',
  '😈',
  '🎃',
  '🌝',
  '😥',
  '😺',
  '😅',
  '😙',
  '😶',
  '🐷',
  '🌚',
  '🐛',
  '😨',
  '🐳',
  '🐶',
  '👃',
  '🐤',
  '🐔',
  '😸',
  '🐢',
  '😴',
  '🙉',
  '😯',
  '😏',
  '😁',
  '👅',
  '😤',
  '😢',
  '😻',
  '😒',
  '😃',
  '🌳',
  '😼',
  '🐍',
  '👷',
  '🌴',
  '😐',
  '🐚',
  '👿',
  '😊',
  '👼',
  '🐱',
  '👮',
  '😖',
  '🙊',
  '🐹',
  '🐌',
  '😦',
  '👲',
  '🐘',
  '😄',
  '😮',
  '👽',
  '😀',
  '😽',
  '👴',
  '💋',
  '💎',
  '🐒',
  '👸',
  '🐜',
  '😲',
  '🐵',
  '😬',
  '🌰',
  '🐺',
  '👻',
  '😋',
  '👵',
  '😎',
  '🐞',
  '🎅',
  '👦',
  '🐧',
  '🐋',
  '❤',
  '😪',
  '🐬',
  '🐦',
  '😩',
  '👂',
  '👹',
  '🐴',
  '😭',
  '🐰',
  '😆',
  '😿',
  '😜',
  '💀',
  '😔',
  '😡',
  '🐼',
  '💂',
  '😠',
  '🐭',
  '😕',
  '👧',
  '🐗',
  '😂',
  '😉',
  '👀',
  '😹',
  '🐙',
  '👱',
  '😣',
  '👳',
  '🐑',
  '😑',
  '🐟',
  '👺',
  '😓',
  '👩',
  '🐣',
  '😷',
  '😧',
  '🐠',
  '🐮',
  '🐯',
  '🐥',
  '😵',
  '🐽',
  '😫',
  '🙀',
  '🐨',
  '😾',
  '⭐',
  '😞',
  '😟',
  '👨',
  '🌞',
  '🌲',
  '🐻',
  '😇',
  '😝',
  '👶',
  '😱',
  '🙈'
]

export const getRandomId = () => Math.random().toString(36).substr(2, 9)

export const shuffleArr = arr => shuffle(arr)