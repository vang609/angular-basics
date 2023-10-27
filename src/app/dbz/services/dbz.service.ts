import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 1500,
    },
    {
      id: uuid(),
      name: 'Broly',
      power: 15000,
    },
  ];

  addNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }
 
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
