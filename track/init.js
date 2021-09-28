
const api = new TimeTrackerApi(api_key_time_tracking, api_url);

// INSERT YOUR CODE HERE
//wait for the page to load before creating an instance of Track
document.addEventListener('DOMContentLoaded', () => {
    const Tracker = new Track (api, company_id); //create new instance of Track in order to load projects
});
