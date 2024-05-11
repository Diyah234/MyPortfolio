const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { getJson } = require("serpapi");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from 'public' directory

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.state;
    const url = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${query}&hl=en&gl=us&api_key=d4d402df41402fdf67fb67d496f284d08891e51bdf599c066f162268852e4d4c`;

    
    // Using serpapi's getJson to fetch search results
    getJson({
        engine: "google_events",
        q: query,
        hl: "en",
        gl: "us",
        api_key: "d4d402df41402fdf67fb67d496f284d08891e51bdf599c066f162268852e4d4c"
    }, (json) => {
        try {

            
            console.log(json["events_results"]); // Log the events results to console
            if (json && json.events_results && json.events_results.length > 0) {
                const eventHtml = json.events_results.map(event => `<div class="box">
                <div class="image"> <img src=${event.image} /></div>
                <h2>${event.title}</h2>
                <p>${event.date.when}</p>
                <p>${event.description}</p>
                <a href= "${event.link}">Link</a></div>`).join("");

                const fullHtmlResponse = `
                <link rel="stylesheet" href="/css/style.css">
            <h2>Events in ${query.toUpperCase()}</h2>
            <div id="events-container">${eventHtml}</div>
            <script>
                // Append events HTML to events-container after page load
                document.addEventListener('DOMContentLoaded', function() {
                    const eventsContainer = document.getElementById('events-container');
                    eventsContainer.innerHTML = '${eventHtml}';
                });
            </script>
        `;
                res.send(fullHtmlResponse); // Send HTML response with all titles
            } else {
                console.log("No events found");
                res.send("<h2>No events found</h2>"); // Display message if no events found
            }
        } catch (error) {
            console.error("Error processing API response:", error);
            res.status(500).send("Internal Server Error");
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});