import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValueBindingComponent } from './test-value-binding.component';

describe('TestValueBindingComponent', () => {
  let component: TestValueBindingComponent;
  let fixture: ComponentFixture<TestValueBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestValueBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValueBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
