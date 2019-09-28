import { Injectable } from '@angular/core';
import { Character } from './model/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  private readonly characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}?_start=20&_end=120`);
  }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  create(character: Character): Observable<Character> {
    return this.httpClient.post<Character>(this.baseUrl, character);
  }

  update(character: Character): Observable<Character> {
    return this.httpClient.put<Character>(`${this.baseUrl}/${character.id}`, character);
  }
}
