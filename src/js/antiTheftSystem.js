const blockThePage = () => {
  // adding warning to all elements
  const elements = document.body.querySelectorAll("a");
  elements.forEach((el) => {
    el.setAttribute("href", "#");
  });

  setInterval(() => {
    let a = 0;
    for (let i = 0; i < 10e9; i++) {
      a = ((i - 1 + 10 - i) ^ 2) * -2;
    }
  }, 5000);
};
// const blockThePage = () => {
//   // adding warning to all elements
//   const elements = document.body.querySelectorAll(
//     "li,div,span,a,button,p,h1,h2,h3,h4,h5,h6"
//   );
//   elements.forEach((el) => {
//     el.innerHTML += "<span style='color: red;'>This website was stolen!</span>";
//   });

//   // adding the banner to the page
//   const banner = document.createElement("div");
//   banner.className = "fixed w-full h-screen inset-0 z-50 backdrop-blur-md";
//   banner.innerHTML = `
//     <div class="flex flex-col items-center justify-center w-full h-full gap-3 text-center">
//       <h1 class="text-3xl font-black text-red-500">This website was stolen!</h1>
//       <p class="text-lg font-bold text-red-600">Сontact <a href="https://liddweb.com" class="underline transition-colors hover:text-red-300 dark:hover:text-red-900">LiddWeb</a> for details</p>
//     </div>
//   `;
//   document.body.append(banner);
//   document.body.classList.add("overflow-hidden");
// };

const setupAntiTheftSystem = async () => {
  const currToken = "name";

  const url = "https://antitheftsystem.000webhostapp.com/server.php";

  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error("Cannot connect to Anti-Theft System server!");
      return response.json();
    })
    .then((data) => data.tokens)
    .then((tokens) => {
      let isTokenExist = false;
      let tokenStatus;
      for (token of tokens) {
        if (token.token === currToken) {
          isTokenExist = true;
          tokenStatus = token.status;
        }
      }
      if (isTokenExist) {
        if (tokenStatus) {
          // setting localStorage variable
          localStorage.setItem("isStolen", true);

          blockThePage();
        } else {
          localStorage.clear();
        }
      }
    })
    .catch((error) => {
      if (localStorage.getItem("isStolen")) blockThePage();
    });
};

export default setupAntiTheftSystem;
