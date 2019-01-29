import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTabletComponent } from './device-tablet.component';

describe('DeviceTabletComponent', () => {
  let component: DeviceTabletComponent;
  let fixture: ComponentFixture<DeviceTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
