import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {

  // This runs before each test case
  // It sets up the testing environment for the App component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Since App is a standalone component,
      // we import it directly instead of declaring it
      imports: [App],
    }).compileComponents(); // Compiles component templates and styles
  });

  // Test case: check if the App component is created successfully
  it('should create the app', () => {
    // Create an instance of the App component
    const fixture = TestBed.createComponent(App);

    // Get the component instance from the fixture
    const app = fixture.componentInstance;

    // Expect the component to exist (not null or undefined)
    expect(app).toBeTruthy();
  });

  // Test case: check if the title is rendered in the template
  it('should render title', async () => {
    // Create the component
    const fixture = TestBed.createComponent(App);

    // Wait until all async tasks (like bindings) are done
    await fixture.whenStable();

    // Access the rendered HTML of the component
    const compiled = fixture.nativeElement as HTMLElement;

    // Check if the <h1> element contains the expected text
    expect(
      compiled.querySelector('h1')?.textContent
    ).toContain('Hello, ngRx-state-management');
  });

});
