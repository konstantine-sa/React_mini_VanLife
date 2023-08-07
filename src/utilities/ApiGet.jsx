export async function getVansData(url, id) {
  const address = id ? `${url}/${id}` : url;
  const res = await fetch(address);

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

export async function getUsersVans(url, id) {
  const address = id ? `${url}/${id}` : url;
  const res = await fetch(address);

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
