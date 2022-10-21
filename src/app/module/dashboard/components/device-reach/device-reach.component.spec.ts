import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceReachComponent } from './device-reach.component';

describe('DeviceReachComponent', () => {
  let component: DeviceReachComponent;
  let fixture: ComponentFixture<DeviceReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceReachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
