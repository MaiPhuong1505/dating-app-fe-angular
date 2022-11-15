import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseURL = "https://localhost:7178/api/members";
  constructor(private httpClient: HttpClient) { }
  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseURL);
  }
  getMemberByUsername(username: string) {
    return this.httpClient.get<Member>(`${this.baseURL}/${username}`);
  }
}
