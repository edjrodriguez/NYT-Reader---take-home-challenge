const MY_KEY = process.env.REACT_APP_API_KEY;

let fetchHeadlines = () => 
  fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${MY_KEY}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return response.json();
    }
})

export { fetchHeadlines }