import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdsToggleComponent } from './lds-toggle.component';

describe('LdsToggleComponent', () => {
  let component: LdsToggleComponent;
  let fixture: ComponentFixture<LdsToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdsToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
