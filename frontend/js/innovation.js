async function loadInnovation() {
  try {
    const faculty = await fetchAPI("/faculty/");
    const innovations = await fetchAPI("/innovation/");
    const container = document.getElementById("faculty-list");

    faculty.forEach(f => {
      const card = document.createElement("div");
      card.className = "faculty-card";

      const relatedInnovations = innovations.filter(
        i => i.faculty === f.name
      );

      card.innerHTML = `
        ${f.profile_image ? `<img src="${f.profile_image}" alt="${f.name}">` : ""}
        <h3>${f.name}</h3>
        <div class="designation">${f.designation} — ${f.department}</div>

        ${
          relatedInnovations.length
            ? relatedInnovations.map(i => `
                <div class="innovation">
                  <strong>${i.title} (${i.year})</strong>
                  <p>${i.description}</p>
                  ${i.proof_image ? `<img src="${i.proof_image}">` : ""}
                </div>
              `).join("")
            : "<p>No innovation records.</p>"
        }
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Failed to load innovation data", err);
  }
}

loadInnovation();
