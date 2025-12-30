function loadNavbar() {
  const navbar = document.createElement("div");
  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="logo">CSE · ACSESS</div>
    <div>
      <a href="index.html">Home</a>
      <a href="clubs.html">Clubs</a>
      <a href="events.html">Events</a>
      <a href="innovation.html">Innovation</a>
    </div>
  `;
  document.body.prepend(navbar);
}

loadNavbar();
