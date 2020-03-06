import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotItemDetailComponent } from './got-item-detail.component';

describe('GotItemDetailComponent', () => {
  let component: GotItemDetailComponent;
  let fixture: ComponentFixture<GotItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
