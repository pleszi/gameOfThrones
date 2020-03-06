import { GotItem } from "../model/got-item";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GotItemService {
  jsonUrl: string = "http://localhost:3000/gameOfThrones";

  constructor(private http: HttpClient) {}

  getAll(): Observable<GotItem[]> {
    return this.http.get<GotItem[]>(this.jsonUrl);
  }

  /*getOne(id: string | number): Observable<GotItem> {
    return this.http.get<GotItem>(`${this.jsonUrl}/${id}`);
  }*/
}
