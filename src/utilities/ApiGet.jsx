export async function getVansData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans data",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();

  return data.vans;
}
