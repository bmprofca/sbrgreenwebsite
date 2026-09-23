const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function fetchSiteData() {
  const response = await fetch(`${API_URL}/public/site`);
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "Failed to load site data");
  }
  return payload.data;
}

export async function submitContact(body) {
  const response = await fetch(`${API_URL}/public/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "Failed to send message");
  }
  return payload;
}
