# Profile-enhancement-service

#  Profile Enrichment Service

This backend service receives user information via an API, enriches it by scraping the full name from an external profile webpage, and returns the combined data as a JSON response.

---

##  Features

- Accepts `username`, `email`, and `profileUrl`
- Scrapes the provided URL and extracts the `<h1>` content as the full name
- Combines scraped data with input and returns enriched profile
- Simulates database save (via console log)
- Returns `201 Created` response with enriched profile JSON

---

##  Tech Stack

- Node.js
- Express.js
- Axios (HTTP client)
- Cheerio (HTML scraper)

---

## 🔧 Installation

```bash
git clone https://github.com/shantanuchavhan/Profile-enhancement-service.git
cd Profile-enhancement-service
npm install



node index.js


Request Body (JSON)

{
  "username": "Herman",
  "email": "hermanmelville@test.com",
  "profileUrl": "https://httpbin.org/html"
}
