import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLaptopComponent } from './device-laptop.component';

describe('DeviceLaptopComponent', () => {
  let component: DeviceLaptopComponent;
  let fixture: ComponentFixture<DeviceLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
