export async function getTopShows() {
  const TOP_SHOWS = "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e029f326cbmsh1d71f2d0afb6b07p1f60d6jsn241feb46bc88",
      "x-rapidapi-host": "imdb188.p.rapidapi.com",
    },
  };

  const rawData = await fetch(TOP_SHOWS, options);
  const json = await rawData.json();
  const items = json.data;

  return items.map((item) => {
    //const id = item.id;
    /*
    const title = item.originalTitleText.text;
    const imageUrl = item.primaryImage.imageUrl;
    const imageWidth = item.primaryImage.imageWidth;
    const imageHeight = item.primaryImage.imageHeight;
    const description = item.plot.plotText.plainText;
    const releaseYear = item.releaseYear.year;
    const rating = item.ratingsSummary.aggregateRating;
*/
    const {
      id,
      originalTitleText,
      primaryImage,
      plot,
      releaseYear,
      ratingsSummary,
    } = item;
    return {
      id,
      originalTitleText,
      primaryImage,
      plot,
      releaseYear,
      ratingsSummary,
    };
  });
}

/*
export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
*/
