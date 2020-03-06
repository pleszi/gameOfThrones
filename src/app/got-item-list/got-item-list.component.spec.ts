import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotItemListComponent } from './got-item-list.component';

describe('GotItemListComponent', () => {
  let component: GotItemListComponent;
  let fixture: ComponentFixture<GotItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
