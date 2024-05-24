const setupTabsContainer = () => {
  const tabs = document.querySelectorAll(".tab-item");
  const contents = document.querySelectorAll("[data-tab-content]");
  const btn = document.querySelector(".tab-button");
  const btnText = document.querySelector(".tab-button__text");

  // check
  if (!tabs || !contents || !btn || !btnText) return;

  // turning off dropdown list on mob
  const hideTabsList = () => {
    btn?.removeAttribute("data-active");
  };
  // turning on dropdown list on mob
  const showTabsList = () => {
    btn?.setAttribute("data-active", "");
  };
  // set dark button text on mob
  const setBtnText = (tab) => {
    const input = tab?.querySelector('input[type="radio"]');
    if (input?.checked === true || tab.getAttribute("data-active") !== null) {
      const tabText = tab.querySelector(".tab-item__text");
      btnText.textContent = tabText.textContent;
    }
  };
  // hide all content sections
  const hideAllContent = () => {
    contents.forEach((content) => content.classList.add("hidden"));
  };
  // show content section by active tab
  const showContentByTab = (tab) => {
    contents.forEach((content) => {
      if (
        content.getAttribute("data-tab-content") ===
        tab.getAttribute("data-tab-item")
      )
        content.classList.remove("hidden");
    });
  };
  // synchronisation of all tabs on all breakpoints
  const syncTabs = (tab) => {
    const input = tab.querySelector('input[type="radio"]');
    if (input?.checked === true || tab.getAttribute("data-active") !== null) {
      if (input) {
        const value = input.value;

        tabs.forEach((tab) => {
          const input = tab.querySelector('input[type="radio"]');
          if (
            input?.value === value ||
            tab.getAttribute("data-tab-item") === value
          ) {
            if (input) {
              input.checked = true;
            } else {
              tab.setAttribute("data-active", "");
            }
          }
        });
      } else {
        const value = tab.getAttribute("data-tab-item");

        tabs.forEach((tab) => {
          const input = tab.querySelector('input[type="radio"]');
          if (
            input?.value === value ||
            tab.getAttribute("data-tab-item") === value
          ) {
            if (input) {
              input.checked = true;
            } else {
              tab.setAttribute("data-active", "");
            }
          }
        });
      }
    }
  };

  // event handlers
  // click on dark button on mob
  const handleBtnClick = () => {
    if (btn.getAttribute("data-active") !== null) hideTabsList();
    else showTabsList();
  };
  // additional function handler for click on list item on mob
  const handleTabByDataClick = (tab) => {
    tabs.forEach((tab) => tab.removeAttribute("data-active"));
    tab.setAttribute("data-active", "");
  };
  // click on list item on mob
  const handleTabClick = (tab) => {
    handleTabByDataClick(tab);
    setBtnText(tab);
    hideAllContent();
    showContentByTab(tab);
    hideTabsList();
    syncTabs(tab);
  };

  // event listeners
  btn?.addEventListener("click", handleBtnClick);
  tabs?.forEach((tab) =>
    tab.addEventListener("click", () => handleTabClick(tab))
  );
  // pre-setup
  tabs.forEach((tab) => setBtnText(tab));
};

setupTabsContainer();