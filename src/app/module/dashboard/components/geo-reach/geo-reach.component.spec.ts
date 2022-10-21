import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoReachComponent } from './geo-reach.component';

describe('GeoReachComponent', () => {
  let component: GeoReachComponent;
  let fixture: ComponentFixture<GeoReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoReachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
