import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    const id = this.route.snapshot.params.id;
    this.character = this.characterService.read(Number(id));
  }

  ngOnInit() {
  }

}
