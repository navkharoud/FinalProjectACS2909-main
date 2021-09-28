
const api = new TimeTrackerApi(api_key_reports, api_url);

document.addEventListener('DOMContentLoaded', () => {
   const report = new Reports (api, company_id); //create new instance of Reports
});
