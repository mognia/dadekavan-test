import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoxDetailsComponent } from './white-box-details.component';

describe('WhiteBoxDetailsComponent', () => {
  let component: WhiteBoxDetailsComponent;
  let fixture: ComponentFixture<WhiteBoxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteBoxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
