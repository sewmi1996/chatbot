import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentComponentsComponent } from './agent-components.component';

describe('AgentComponentsComponent', () => {
  let component: AgentComponentsComponent;
  let fixture: ComponentFixture<AgentComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
