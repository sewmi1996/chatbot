import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignServicesComponent } from './campaign-services.component';

describe('CampaignServicesComponent', () => {
  let component: CampaignServicesComponent;
  let fixture: ComponentFixture<CampaignServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
