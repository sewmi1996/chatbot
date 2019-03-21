import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAgentCreatorComponent } from './virtual-agent-creator.component';

describe('VirtualAgentCreatorComponent', () => {
  let component: VirtualAgentCreatorComponent;
  let fixture: ComponentFixture<VirtualAgentCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualAgentCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAgentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
