import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Observable<Character[]>;
  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.readAll();
  }

  ngOnInit() {
  }

}
