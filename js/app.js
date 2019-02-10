console.log('hello world');
console.log(window.geemails);
console.log(window.geemails[0].date);

//window.geemails is populaged via the message object
//message.date
//message.subject 
//message.sender
//message.body

// container for header
var headerBox = document.createElement('div');
headerBox.id = 'header';
document.body.appendChild(headerBox);

// header img
var geeMailImg = document.createElement('img');
geeMailImg.className ='gmHeader';
geeMailImg.id='gmHeaderImg';
//original source: 'http://www.tuesdaytactics.com/wp-content/uploads/2011/12/tt127-3mailchimp.jpg';
geeMailImg.src = 'assets/geeMail chimp.png';
headerBox.appendChild(geeMailImg);

// header title
var geeMailTitle = document.createElement('div');
geeMailTitle.className='gmHeader';
geeMailTitle.id='gmHeaderTitle';
headerBox.appendChild(geeMailTitle);

// header label
var geeMailLabel = document.createElement('h1');
geeMailLabel.className='gmTitle';
geeMailLabel.id='gmHeaderLabel';
geeMailLabel.innerHTML='Gee-Mail';
geeMailTitle.appendChild(geeMailLabel);

// header tag line
var geeMailSlogan = document.createElement('h4');
geeMailSlogan.className='gmTitle';
geeMailSlogan.id='gmHeaderSlogan';
geeMailSlogan.innerHTML='Gee-rillas at your e-service!';
geeMailTitle.appendChild(geeMailSlogan);

// make messagePane to hold messages
var messagePaneBox = document.createElement('div');
messagePaneBox.id = 'messagePane';
document.body.appendChild(messagePaneBox);

// loop through to add window.geemails object content thru DOM
for (var i=0; i<window.geemails.length; i++) {

    // make message class to hold message details
    var messageBox = document.createElement('div');
    messageBox.className = 'message';
    messagePaneBox.appendChild(messageBox);

    // append date to message class
    var dateBox = document.createElement('div');
    dateBox.className = 'date';
    dateBox.innerHTML = window.geemails[i].date;
    messageBox.appendChild(dateBox);

    // append subject to message class
    var subjectBox = document.createElement('div');
    subjectBox.className = 'subject';
    subjectBox.innerHTML = window.geemails[i].subject;
    messageBox.appendChild(subjectBox);

    // append sender to message class
    var senderBox = document.createElement('div');
    senderBox.className = 'sender';
    senderBox.innerHTML = window.geemails[i].sender;
    messageBox.appendChild(senderBox);

    // append body to message class
    var bodyBox = document.createElement('div');
    bodyBox.className = 'sender';
    bodyBox.innerHTML = window.geemails[i].body;
    messageBox.appendChild(bodyBox);
}
