import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpanelsComponent } from './dashboardpanels.component';

describe('DashboardpanelsComponent', () => {
  let component: DashboardpanelsComponent;
  let fixture: ComponentFixture<DashboardpanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardpanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardpanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
