import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoxListComponent } from './white-box-list.component';

describe('WhiteBoxListComponent', () => {
  let component: WhiteBoxListComponent;
  let fixture: ComponentFixture<WhiteBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
