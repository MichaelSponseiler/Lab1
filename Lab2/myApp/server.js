import { ApplicationInsights } from '@microsoft/applicationinsights-web'
//'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is my development page!\n');
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);



const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: 'a4f7ec75-31c3-4384-a844-e2e2a7de67b7'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview