import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {

  // I keep a reference to the component itself
  let component: Counter;

  // I also keep the fixture so I can access the DOM and lifecycle
  let fixture: ComponentFixture<Counter>;

  // Before each test, I prepare the testing environment
  beforeEach(async () => {

    // Here I configure the testing module
    // Since Counter is a standalone component, I import it directly
    await TestBed.configureTestingModule({
      imports: [Counter]
    }).compileComponents(); // I compile the component template & styles

    // Now I create the Counter component instance
    fixture = TestBed.createComponent(Counter);

    // From the fixture, I get the actual component class
    component = fixture.componentInstance;

    // I wait until Angular finishes all async work
    // (bindings, lifecycle hooks, etc.)
    await fixture.whenStable();
  });

  // Simple test: I just check if the component exists
  it('should create', () => {

    // If this passes, it means the component was created successfully
    expect(component).toBeTruthy();
  });

});
