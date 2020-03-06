import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotItemComponent } from './got-item.component';

describe('GotItemComponent', () => {
  let component: GotItemComponent;
  let fixture: ComponentFixture<GotItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
