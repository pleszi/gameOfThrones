import { GotItem } from "../model/got-item";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-got-item",
  templateUrl: "./got-item.component.html",
  styleUrls: ["./got-item.component.css"]
})
export class GotItemComponent implements OnInit {
  @Input() gotitem: GotItem;

  constructor() {}

  ngOnInit(): void {}
}
