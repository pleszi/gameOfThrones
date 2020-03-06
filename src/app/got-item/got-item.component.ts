import { GotItemDetailComponent } from "./../got-item-detail/got-item-detail.component";
import { GotItem } from "../model/got-item";
import { Component, OnInit, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-got-item",
  templateUrl: "./got-item.component.html",
  styleUrls: ["./got-item.component.css"]
})
export class GotItemComponent implements OnInit {
  @Input() gotitem: GotItem;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
