import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GotItem } from "../model/got-item";
import { GotItemService } from "../service/got-item.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-got-item-list",
  templateUrl: "./got-item-list.component.html",
  styleUrls: ["./got-item-list.component.css"]
})
export class GotItemListComponent implements OnInit {
  gotItemList: Observable<GotItem[]>;
  selectedCharacter: GotItem;

  constructor(private gotService: GotItemService, private router: Router) {
    this.gotItemList = this.gotService
      .getAll()
      .pipe(map(result => result.sort((a, b) => a.name.localeCompare(b.name))));
    console.log(this.gotItemList);
  }

  selectHero(gotCharacter: GotItem): void {
    this.selectedCharacter = gotCharacter;
  }
  ngOnInit(): void {}
}
