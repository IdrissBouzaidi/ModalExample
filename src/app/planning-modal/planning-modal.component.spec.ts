import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningModalComponent } from './planning-modal.component';

describe('PlanningModalComponent', () => {
  let component: PlanningModalComponent;
  let fixture: ComponentFixture<PlanningModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
