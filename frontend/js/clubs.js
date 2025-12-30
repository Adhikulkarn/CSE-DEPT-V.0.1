async function loadClubs() {
  try {
    const clubs = await fetchAPI("/clubs/");
    const container = document.getElementById("clubs");

    if (clubs.length === 0) {
      container.innerHTML = "<p>No clubs available.</p>";
      return;
    }

    clubs.forEach(club => {
      const card = document.createElement("div");
      card.className = "club-card";

      card.innerHTML = `
        ${club.cover_image ? `<img src="${club.cover_image}" alt="${club.name}">` : ""}
        <div class="content">
          <h3>${club.name}</h3>
          <p>${club.description}</p>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load clubs", err);
  }
}

loadClubs();
