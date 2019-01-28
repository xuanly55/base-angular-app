import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSmartphoneComponent } from './device-smartphone.component';

describe('DeviceSmartphoneComponent', () => {
  let component: DeviceSmartphoneComponent;
  let fixture: ComponentFixture<DeviceSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
