/**
 * @var api_url
 * @type {string}
 * The URL that points to the main API path. All commands use this primary URL
 */
let api_url = 'https://acs2909.lusciousorange.com/t-api/';


/**
 * API KEYS
 * @type {string}
 * The three API keys for the three segments of the project. You must replace these YOUR KEYS for your respective roles.
 */
let api_key_time_tracking = 'pr2kn37-qz6fgn0p27rjd5b8-7j1nfw3'; // Aashirwad Kataria - Track
let api_key_reports = 'nm6spj3-ztvkc16f3g5spdq9-sg8fvw8';  // Jaskirat Singh - Reports
let api_key_projects = 'x3mzn47-13m4q0pjk5dzrwy9-5n4k8h4'; // Navkaran Singh - Projects

/**
 *
 * @var {string} my_api_key
 * YOUR api key which is used for basic connections. When submitting for the final project, any of the three API keys
 * can be included here, but for any development work, you must use your own API key.
 */
let my_api_key = 'nm6spj3-ztvkc16f3g5spdq9-sg8fvw8'; //for workflow to work

/**
 * @var {int} company_id
 * Your company ID, you must replace this is your value once you know your company ID
 */
let company_id = '21';


/**
 * PROFILE CALL
 * This profile call must remain here as the first thing that happens in the config. It uses your API key to get the
 * profile of who is currently working.
 */
let my_api = new TimeTrackerApi(my_api_key, api_url);
my_api.makeRequest('GET', 'acs/profile', {}, saveUserID);
my_api = null;



function saveUserID(profile_object) {
	console.log('----- saveUserID -----', profile_object);
	// sets user_id to the localstorage
	localStorage.setItem("user_id",profile_object.user_id);
	
}

function convertSecondsToHoursMinutesSeconds(seconds) {
	console.log('----- convertSecondsToHoursMinutesSeconds -----', seconds);
	// Makes sure parameter is a number
	seconds = Number(seconds);
	//Math.Floor returns the largest integer less than or equal to a given number.
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor(seconds % 3600 / 60);
	let secs = Math.floor(seconds % 3600 % 60);
	// use .slice to return 2 characters from the end
	return (hours) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + secs).slice(-2);
}

/**
 * The todaysDate function takes 
 * @param timestamp the number of seconds at which a project was saved
 * converts it to todays date including the time in requested format.
 */
function convertTimestampToDateFormat(timestamp) {
	console.log('----- convertTimestampToDateFormat -----', timestamp);
	const date = new Date(timestamp);
    let mm = date.getMonth()+1; //+1 to handle -1 error
    const dd = date.getDate();
	const yyyy = date.getFullYear();
	
	const secs = date.getSeconds();
	const mins = date.getMinutes();
	const hrs = date.getHours();

	// return the formatted date
    return `${yyyy}-${mm}-${dd} ${properTimeSyntax(hrs)}:${properTimeSyntax(mins)}:${properTimeSyntax(secs)}`;
}

/**
 * The showError method takes
 * @param error_details an object with the details pertaining to the error
 * and displays it in the document body.
 */
function showError(error_details) {

	console.error('----- showError -----', error_details);
	// creating error box of element type div
	let errorBox = document.createElement('div');
	// appending error box in div
	document.body.appendChild(errorBox);
	// creating classs for error box to edit in css
	errorBox.className = "error_box";
	// storing error response code in error code
	let errorCode = error_details.error_code;
	console.log(errorCode);
	// storing error message in the error name
	let errorName = error_details.error_message;
	// displaying the error in the error box
	errorBox.innerHTML = `ERROR: ${errorCode} : ${errorName}`;

}

// Additional Utility function to get proper number of digits for time
// 00:00:00 format
function properTimeSyntax(i){
   return ( i < 10 ? '0' + i : i );
}

