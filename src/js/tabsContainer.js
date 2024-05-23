const setupTabsContainer = () => {
  const tabs = document.querySelectorAll(".tab-item");
  const contents = document.querySelectorAll("[data-tab-content]");
  const btn = document.querySelector(".tab-button");
  const btnText = document.querySelector(".tab-button__text");

  const hideTabsList = () => {
    btn?.removeAttribute("data-active");
  };
  const showTabsList = () => {
    btn?.setAttribute("data-active", "");
  };
  const handleBtnClick = () => {
    if (btn.getAttribute("data-active") !== null) hideTabsList();
    else showTabsList();
  };

  const setBtnText = (tab) => {
    const input = tab?.querySelector('input[type="radio"]');
    if (input?.checked === true || tab.getAttribute("data-active") !== null) {
      const tabText = tab.querySelector(".tab-item__text");
      btnText.textContent = tabText.textContent;
    }
  };
  const hideAllContent = () => {
    contents.forEach((content) => content.classList.add("hidden"));
  };
  const showContentByTab = (tab) => {
    contents.forEach((content) => {
      if (
        content.getAttribute("data-tab-content") ===
        tab.getAttribute("data-tab-item")
      )
        content.classList.remove("hidden");
    });
  };
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
  const handleTabByDataClick = (tab) => {
    tabs.forEach((tab) => tab.removeAttribute("data-active"));
    tab.setAttribute("data-active", "");
  };

  const handleTabClick = (tab) => {
    handleTabByDataClick(tab);
    setBtnText(tab);
    hideAllContent();
    showContentByTab(tab);
    hideTabsList();
    syncTabs(tab);
  };

  btn?.addEventListener("click", handleBtnClick);
  tabs?.forEach((tab) =>
    tab.addEventListener("click", () => handleTabClick(tab))
  );
  // setup
  tabs.forEach((tab) => setBtnText(tab));
};

export default setupTabsContainer;
