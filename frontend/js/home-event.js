async function loadUpcomingEvents() {
  try {
    const events = await fetchAPI("/events/");
    const container = document.getElementById("events");

    // Filter upcoming events
    const today = new Date();

    const upcoming = events.filter(event => {
      return new Date(event.date) >= today;
    }).slice(0, 5); // limit to 5

    if (upcoming.length === 0) {
      container.innerHTML = "<p>No upcoming events.</p>";
      return;
    }

    upcoming.forEach(event => {
      const div = document.createElement("div");
      div.className = "event-card";
      div.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error("Failed to load events", err);
  }
}

loadUpcomingEvents();
