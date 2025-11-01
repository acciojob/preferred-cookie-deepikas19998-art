// Apply saved preferences from cookies
function applyPreferences() {
  const cookies = document.cookie.split("; ").reduce((acc, c) => {
    const [k, v] = c.split("=");
    acc[k] = v;
    return acc;
  }, {});

  if (cookies.fontsize) {
    document.documentElement.style.setProperty("--fontsize", cookies.fontsize + "px");
    document.getElementById("fontsize").value = cookies.fontsize;
  }

  if (cookies.fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", cookies.fontcolor);
    document.getElementById("fontcolor").value = cookies.fontcolor;
  }
}

window.addEventListener("load", applyPreferences);

document.getElementById("font-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  if (fontsize < 8 || fontsize > 72) {
    alert("Font size must be between 8 and 72.");
    return;
  }

  // Set cookies with path=/ to be accessible on the page
  document.cookie = `fontsize=${fontsize}; path=/`;
  document.cookie = `fontcolor=${fontcolor}; path=/`;

  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);

  alert("Preferences saved!");
});

