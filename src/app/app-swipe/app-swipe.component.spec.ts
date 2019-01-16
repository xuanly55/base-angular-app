import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSwipeComponent } from './app-swipe.component';

describe('AppSwipeComponent', () => {
  let component: AppSwipeComponent;
  let fixture: ComponentFixture<AppSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
