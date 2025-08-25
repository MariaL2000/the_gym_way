export const exerciseOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, { ...exerciseOptions, ...options });
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
};
