import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpanelComponent } from './detailpanel.component';

describe('DetailpanelComponent', () => {
  let component: DetailpanelComponent;
  let fixture: ComponentFixture<DetailpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
