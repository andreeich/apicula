import setupMobileMenu, { config } from "../src/js/mobileMenu";

config.animHide = jest.fn();
config.animShow = jest.fn();

describe("setupMobileMenu", () => {
  let toggle;
  let menu;
  let wrapper;

  beforeEach(() => {
    // Create toggle and menu elements
    wrapper = document.createElement("div");
    wrapper.classList.add("navbar");
    toggle = document.createElement("input");
    toggle.setAttribute("type", "checkbox");
    toggle.classList.add("navbar-toggle");
    menu = document.createElement("div");
    menu.classList.add("navbar-menu");
    wrapper.appendChild(toggle);
    wrapper.appendChild(menu);
    document.body.appendChild(wrapper);

    // Call the setupMobileMenu function
    setupMobileMenu();
  });

  afterEach(() => {
    // Clean up toggle and menu elements
    document.body.removeChild(wrapper);
  });

  test("should initialize config.toggle and config.menu correctly", () => {
    expect(config.toggle).toBe(toggle);
    expect(config.menu).toBe(menu);
  });

  test("should initialize toggle.checked to true", () => {
    expect(toggle.checked).toBe(true);
  });

  test("should attach a click event listener to the toggle element", () => {
    const event = new Event("click");
    toggle.dispatchEvent(event);
    expect(config.animHide).toHaveBeenCalled(); // Assuming toggle.checked is true initially
  });

  // Test animation functions
  test("should call animHide function when toggle is clicked and it is checked", () => {
    const event = new Event("click");
    toggle.checked = true;
    toggle.dispatchEvent(event);
    expect(config.animHide).toHaveBeenCalled();
  });

  test("should call animShow function when toggle is clicked and it is unchecked", () => {
    const event = new Event("click");
    toggle.checked = false;
    toggle.dispatchEvent(event);
    expect(config.animShow).toHaveBeenCalled();
  });
});
