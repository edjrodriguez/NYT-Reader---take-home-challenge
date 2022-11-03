// import articleStub from "../fixtures/articles";
const MY_KEY = process.env.REACT_APP_API_KEY;

describe('NYT news reader', () => {
  beforeEach(()=>{
    cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${MY_KEY}`, articleStub);
    cy.visit('http://localhost:3000/')
  });
  
  it('Loads the main page', () => {
    cy.get('h1').contains('New York Times')
      .get('h1').contains('Top Stories')
  })
})