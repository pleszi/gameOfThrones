import { Component } from "@angular/core";
import { GotItem } from "./model/got-item";
import { GotItemService } from "./service/got-item.service";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, toArray } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "gameOfThrones";
  gotItemList: Observable<GotItem[]>;
  allItems: Array<GotItem> = [];

  constructor(private gotService: GotItemService, private router: Router) {
    this.gotItemList = this.gotService
      .getAll()
      .pipe(map(result => result.sort((a, b) => a.name.localeCompare(b.name))));
    //.pipe(map(result => result.sort((a, b) => ("").concat(a.name) - "".concat(b.name))));
    console.log(this.gotItemList);
  }
}
