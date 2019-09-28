import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.readAll();
  }

  ngOnInit() {
  }

}
