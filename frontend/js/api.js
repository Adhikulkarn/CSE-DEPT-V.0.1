const API_BASE_URL = "http://127.0.0.1:8000/api";

async function fetchAPI(endpoint) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error("API request failed");
  }
  return res.json();
}
