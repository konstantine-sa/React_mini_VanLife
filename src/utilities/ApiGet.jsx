export async function getVansData(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data.vans;
}
