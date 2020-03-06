import { GotItemService } from "./../service/got-item.service";
import { Component, OnInit, Input } from "@angular/core";
import { GotItem } from "../model/got-item";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-got-item-detail",
  templateUrl: "./got-item-detail.component.html",
  styleUrls: ["./got-item-detail.component.css"]
})
export class GotItemDetailComponent implements OnInit {
  gotItem: GotItem;

  constructor(private ar: ActivatedRoute, private gotService: GotItemService) {
    this.ar.params.subscribe(params => {
      this.gotService.getOne(params.name).forEach(gotItem => {
        this.gotItem = gotItem;
      });
    });
  }

  ngOnInit(): void {
    console.log("detail: " + this.gotItem);
  }
}
