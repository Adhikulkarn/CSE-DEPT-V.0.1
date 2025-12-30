async function loadEvents() {
  try {
    const events = await fetchAPI("/events/");
    const upcomingContainer = document.getElementById("upcoming-events");
    const pastContainer = document.getElementById("past-events");

    const today = new Date();

    const upcoming = [];
    const past = [];

    events.forEach(event => {
      const eventDate = new Date(event.date);
      if (eventDate >= today) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = "<p>No upcoming events.</p>";
    }

    if (past.length === 0) {
      pastContainer.innerHTML = "<p>No past events.</p>";
    }

    upcoming.forEach(event => {
      upcomingContainer.appendChild(createEventCard(event));
    });

    past.forEach(event => {
      pastContainer.appendChild(createEventCard(event));
    });

  } catch (err) {
    console.error("Failed to load events", err);
  }
}

function createEventCard(event) {
  const div = document.createElement("div");
  div.className = "event-card";

  div.innerHTML = `
    ${event.image ? `<img src="${event.image}" alt="${event.title}">` : ""}
    <h3>${event.title}</h3>
    <div class="date">${event.date}</div>
    <p>${event.description}</p>
  `;

  return div;
}

loadEvents();
