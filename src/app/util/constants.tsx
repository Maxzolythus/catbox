import RoseGarden from '../assets/backgrounds/rose_garden.png'

// Each of the backgrounds in Umineko and their coresponding images
export const BACKGROUNDIMAGES = {'Chapel - Inside': RoseGarden, 'Chapel - Outside': RoseGarden,'Rose Garden': RoseGarden}

// Each of the characters in Umineko
export const CHARACTERS = ['Ange', 'Battler', 'Beatrice', 'Bernkastle', 'Eva', 'Eva - Beatrice', 'Eva - Young', 'Genji', 'Gohda', 'Hideyoshi', 'Kinzo', 'Lamdadelta', 'Maria', 'Ronove', 'Virgilia']

// The various ways to display text in the app
export const TEXTDISPLAYTYPES = ['None', 'Overlay', 'Speech']

// Toggle for using orginal sprites
export const ORIGINAL = 'original'

// Toggle for using updated sprites
export const UPDATED = 'updated'

// Different poses each character can do
export const POSES: {[key: string]: string[]} = {
  'Battler': ['Crying'],
  'Beatrice': ['Exasperated', 'Evil Grin']
}