import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderReachComponent } from './gender-reach.component';

describe('GenderReachComponent', () => {
  let component: GenderReachComponent;
  let fixture: ComponentFixture<GenderReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderReachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
