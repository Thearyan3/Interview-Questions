// DAY 3

// Question No. 1 - Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.
function add(){
    let mern = document.getElementsByTagName("h1");
    mern[0].innerText = "MERN stack";
}


// Question No. 2 - Write code to get 1st H1 element from a webpage using DOM.
function add(){
    let mern = document.getElementsByTagName("h1");
    mern[0].innerText = "MERN stack";
}


// Question No. 3 - Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.
function timer(){
    let clock = new Date();
    let hours = clock.getHours();
    let mins = clock.getMinutes();
    let sec = clock.getSeconds();
    let time = hours + ":" + mins + ":" + sec;
    document.getElementsByTagName("h2")[0].innerText = time;
    setTimeout(timer, 1000);
}


// Question No. 4 - Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button, page content should be changed to "Welcome to Elevation academy".
function contentChange(){
    let content = document.getElementsByTagName("div");
    content[0].innerText = "Welcome to Elevation academy";
}


// Question No. 5 - Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.
function hideText(){
    let doc = document.getElementsByTagName("div");
    doc[1].innerText = "";
}