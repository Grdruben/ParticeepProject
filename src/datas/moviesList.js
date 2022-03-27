import creed from '../assets/creed2.png'
import girl from '../assets/goneGirl.png'
import inception from '../assets/inception.png'
import indestructibles from '../assets/lesIndestructibles2.png'
import sun from '../assets/midNigthSun.png'
import oceans from '../assets/oceans8.png'
import pulp from '../assets/pulpfiction.png'
import bruit from '../assets/sansUnBruit.png'
import seven from '../assets/seven.png'



 export const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    cover: oceans,
    Ljauge: 'U+1F44E'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    cover:sun
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    cover:indestructibles
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    cover:bruit
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    cover:creed
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    cover:pulp
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    cover: seven
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    cover:inception
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    cover:girl
  }
]
//export  movies = new Promise((resolve, reject) => {setTimeout(resolve, 100, movies)})
