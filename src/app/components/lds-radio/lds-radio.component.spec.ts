import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdsRadioComponent } from './lds-radio.component';

describe('LdsRadioComponent', () => {
  let component: LdsRadioComponent;
  let fixture: ComponentFixture<LdsRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdsRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
