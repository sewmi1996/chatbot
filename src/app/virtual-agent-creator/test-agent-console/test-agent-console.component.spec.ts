import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAgentConsoleComponent } from './test-agent-console.component';

describe('TestAgentConsoleComponent', () => {
  let component: TestAgentConsoleComponent;
  let fixture: ComponentFixture<TestAgentConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAgentConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAgentConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
