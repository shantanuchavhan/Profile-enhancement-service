const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users/enrich', async (req, res) => {
  try {
    const { username, email, profileUrl } = req.body;

    if (!username || !email || !profileUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const response = await axios.get(profileUrl);
    const html = response.data;

    const $ = cheerio.load(html);
    const fullName = $('h1').first().text().trim();

    if (!fullName) {
      return res.status(422).json({ error: 'No <h1> tag found' });
    }

    const enrichedProfile = {
      username,
      email,
      fullName,
      sourceProfile: profileUrl
    };

    console.log('Saving:', enrichedProfile);

    return res.status(201).json(enrichedProfile);
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
