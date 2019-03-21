import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingComponentComponent } from './typing-component.component';

describe('TypingComponentComponent', () => {
  let component: TypingComponentComponent;
  let fixture: ComponentFixture<TypingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
