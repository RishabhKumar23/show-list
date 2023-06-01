export const fetchFromApi = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await response.json();
    return data;
  };
  