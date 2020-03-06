import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GotItemComponent } from "./got-item/got-item.component";
import { GotItemService } from "./service/got-item.service";
import { HttpClientModule } from "@angular/common/http";
import { GotItemDetailComponent } from './got-item-detail/got-item-detail.component';
import { GotItemListComponent } from './got-item-list/got-item-list.component';

@NgModule({
  declarations: [AppComponent, GotItemComponent, GotItemDetailComponent, GotItemListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GotItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
