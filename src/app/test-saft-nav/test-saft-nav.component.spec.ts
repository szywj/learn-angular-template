import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSaftNavComponent } from './test-saft-nav.component';

describe('TestSaftNavComponent', () => {
  let component: TestSaftNavComponent;
  let fixture: ComponentFixture<TestSaftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSaftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSaftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
