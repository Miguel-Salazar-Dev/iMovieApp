export async function getTopShows() {
  let key = 0;
  const TOP_SHOWS = process.env.EXPO_PUBLIC_API_URL;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.EXPO_PUBLIC_API_AUTH,
    },
  };
  const rawData = await fetch(TOP_SHOWS, options);
  const json = await rawData.json();
  const items = json.results;

  return items.map((item) => {
    key++;
    const {
      id,
      original_language,
      original_title,
      overview,
      poster_path,
      release_date,
      title,
      vote_average,
    } = item;

    // Construir el Path de la imagen
    const img = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
    const ave = Math.round(vote_average * 10);

    return {
      key: key,
      id,
      original_language,
      original_title,
      overview,
      movie_image: img,
      release_date,
      title,
      vote_average: ave,
    };
  });
}
