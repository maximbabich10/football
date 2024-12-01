import danialvesImg from '../assets/danialves.jpg';
import piqueImg from '../assets/pique.jpg';
import valdesImg from '../assets/valdes.jpg';
import pyoulImg from '../assets/pyoul.jpg';
import busquetsImg from '../assets/busquets.jpg';
import iniestaImg from '../assets/iniesta.jpg';
import xaviImg from '../assets/xavi.jpg';
import abidalImg from '../assets/abidal.jpg';
import davidVillaImg from '../assets/davidvilla.jpg';
import messiImg from '../assets/messi.jpg';
import pedroImg from '../assets/pedro.jpg'

export interface Player {
    id: number;
    number: number;
    firstName: string;
    lastName: string;
    photo: string;
    left?: string,
    bottom?: string
    zoneId?: number
  }

export const players: Player[] = [
    { id: 1, number: 1, firstName: 'Víctor', lastName: 'Valdés', photo: valdesImg, },
  { id: 2, number: 3, firstName: 'Gerard', lastName: 'Piqué', photo: piqueImg, },
  { id: 3, number: 5, firstName: 'Carles', lastName: 'Daniel Alves', photo: danialvesImg, },
  { id: 4, number: 6, firstName: 'Éric', lastName: 'Abidal', photo: abidalImg},
  { id: 5, number: 16, firstName: 'Sergio', lastName: 'Busquets', photo: busquetsImg},
  { id: 6, number: 8, firstName: 'Andrés', lastName: 'Iniesta', photo: iniestaImg},
  { id: 7, number: 6, firstName: 'Xavi', lastName: 'Hernández', photo: xaviImg},
  { id: 8, number: 11, firstName: 'David', lastName: 'Villa', photo: davidVillaImg },
  { id: 9, number: 10, firstName: 'Lionel', lastName: 'Messi', photo: messiImg, },
  { id: 10, number: 17, firstName: 'Pedro', lastName: 'Rodríguez', photo: pedroImg },
  { id: 11, number: 4, firstName: 'Carles', lastName: 'Puyol', photo: pyoulImg },
];
