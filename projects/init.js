
const api = new TimeTrackerApi(api_key_projects, api_url);

// creates a new instance of the Project class after the browser loads
document.addEventListener('DOMContentLoaded', () => {
    const project = new Projects (api, company_id); //create new instance of Projects 
});

