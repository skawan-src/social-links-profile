(function myScope() {
  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("media-gitHub")) {
      window.open("https://github.com/skawan-src");
    }

    if (el.classList.contains("media-frontMentor")) {
      window.open("https://www.frontendmentor.io/?ref=challenge");
    }

    if (el.classList.contains("media-linkedIn")) {
      window.open("https://www.linkedin.com/in/pedro-kawan-085ti");
    }

    if (el.classList.contains("media-instagram")) {
      window.open("https://www.instagram.com/pkawan_/");
    }
  });
})();
