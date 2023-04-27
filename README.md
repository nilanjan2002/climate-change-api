<h1>Climate-Change Web Scraping API</h1>
<p>A web scraping API built using Node.js, Express.js, Axios, and Cheerio.js to extract climate change-related news articles from various sources.</p>

<h2>Endpoints</h2>

<ul>
  <li><code>/news</code> - Returns a list of climate change-related articles scraped from The Guardian website.</li>
  <li><code>/newspaper</code> - Returns a list of climate change-related articles scraped from multiple news sources.</li>
  <li><code>/newspaper/:newsID</code> - Returns a list of climate change-related articles from a specific news source.</li>
</ul>

<h2>Technologies and Frameworks Used</h2>

<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Axios</li>
  <li>Cheerio.js</li>
</ul>

<h2>Usage</h2>

<p>To use this API, clone the repository to your local machine and run the following commands:</p>

<code>
  $ cd climate-change-web-scraping-api <br>
  $ npm install <br>
  $ npm start
</code>

<p>This will start the server on <code>http://localhost:8001</code>.</p>
