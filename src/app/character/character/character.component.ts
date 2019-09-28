import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { filter, pluck, switchMap, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  isCreateMode = true;
  destroy: Subject<boolean> = new Subject<boolean>();

  form: FormGroup;

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private fb: FormBuilder) {

    this.form = this.fb.group({
      id: [],
      name: [],
      culture: [],
    });

    this.route.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.read(Number(id))),
        takeUntil(this.destroy)
      )
      .subscribe(character => this.form.patchValue(character));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
