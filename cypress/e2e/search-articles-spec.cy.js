import articles from "../fixtures/articles.json";
const MY_KEY = process.env.REACT_APP_API_KEY; //this is not hiding my API key. this seems to be what I need to do https://stackoverflow.com/questions/57818181/how-to-use-process-env-variables-in-browser-running-by-cypress#:~:text=In%20Cypress%2C%20environment%20variables%20(accessible,package%2C%20which%20is%20very%20popular.

//these tests are incomplete

describe('NYT news reader', () => {
  beforeEach(()=>{
    cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=HTTQW4cpVGb1plfaVuWnNc3NXyrH1qUO`, articles); // this is not ideal because I am exposing my API key in the cypress file
    // cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${MY_KEY}`, articles);  need to refactor this using the stack overflow above
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
  });
  
  it('Loads the main page', () => {
    cy.wait(1000)
      .location('pathname').should('eq', '/')
      .get('h1').contains('New York Times')
      .get('h1').contains('Top Stories')
      .get('.search-bar').contains('Find Articles')
      .get('.search-button').should('be.disabled')
      .get('.headline-card').contains('Set to Seal Victory')
  })

  it('Shows the top stories', () => {
    cy.wait(1000)
      .get('.headline-card').contains('Set to Seal Victory')
      .get('.headline-card').contains('Patrick Kingsley')
      .get('.headline-card').contains('Published: 2022-11-03')
      .get('.more-details-button').should('exist')
      .get('.more-details-button').should('not.be.disabled')
      .get('.headline-card').contains('Big Lie')
      .get('.headline-card').contains('Peter Baker')
      .get('.headline-card').contains('Published: 2022-11-02')
  })

  it('Should be able to search articles with a keyword to match a title', () => {
    cy.wait(1000)
      .location('pathname').should('eq', '/')
      .get('h1').contains('New York Times')
      .get('h1').contains('Top Stories')
      .get('.search-bar').contains('Find Articles')
      .get('.search-button').should('be.disabled')
      
  })

  it('Should be given a message if article is not found', () => {
    cy.wait(1000)
      .location('pathname').should('eq', '/')
      .get('h1').contains('New York Times')
      .get('h1').contains('Top Stories')
      .get('.search-bar').contains('Find Articles')
      .get('.search-button').should('be.disabled')
  })
})