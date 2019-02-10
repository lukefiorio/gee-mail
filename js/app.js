

// container for header
var headerBox = document.createElement('div');
headerBox.id = 'header';
document.body.appendChild(headerBox);

// header img; append to header
var geeMailImg = document.createElement('img');
geeMailImg.className ='gmHeader';
geeMailImg.id='gmHeaderImg';
//original source: 'http://www.tuesdaytactics.com/wp-content/uploads/2011/12/tt127-3mailchimp.jpg';
geeMailImg.src = 'assets/geeMail chimp.png';
headerBox.appendChild(geeMailImg);

// title container; append to header
var geeMailTitle = document.createElement('div');
geeMailTitle.className='gmHeader';
geeMailTitle.id='gmHeaderTitle';
headerBox.appendChild(geeMailTitle);

// header label; append to title
var geeMailLabel = document.createElement('h1');
geeMailLabel.className='gmTitle';
geeMailLabel.id='gmHeaderLabel';
geeMailLabel.innerHTML='Gee-Mail';
geeMailTitle.appendChild(geeMailLabel);

// header tag line; append to title
var geeMailSlogan = document.createElement('h4');
geeMailSlogan.className='gmTitle';
geeMailSlogan.id='gmHeaderSlogan';
geeMailSlogan.innerHTML='Gee-rillas at your e-service!';
geeMailTitle.appendChild(geeMailSlogan);

// make inboxBox to hold summary [count, mail] & message
var inboxBox = document.createElement('div');
inboxBox.id = 'inbox';
document.body.appendChild(inboxBox);

// make summary pane
var summaryPaneBox = document.createElement('div');
summaryPaneBox.id = 'summaryPane';
inboxBox.appendChild(summaryPaneBox);

// make count div
var countBox = document.createElement('div');
countBox.id = 'inboxCount';
summaryPaneBox.appendChild(countBox);

// make mailBox to hold mailDetailBox
var mailBox = document.createElement('div');
mailBox.id = 'mailBox';
summaryPaneBox.appendChild(mailBox);

// make expandEmail pane to drill into email
var expandEmail = document.createElement('div');
expandEmail.id = 'expandEmail';
inboxBox.appendChild(expandEmail);

// emailTitle container to hold message title
var emailTitle = document.createElement('div');
emailTitle.id = 'emailTitle';
expandEmail.appendChild(emailTitle);

// append subject/sender/date to emailTitle
var emailSubject = document.createElement('div');
var emailSender = document.createElement('div');
var emailDate = document.createElement('div');
emailSubject.id = 'emailSubject';
emailSender.id = 'emailSender';
emailDate.id = 'emailDate';
emailTitle.appendChild(emailSubject);
emailTitle.appendChild(emailSender);
emailTitle.appendChild(emailDate);

// make bodyBox to show message content;
var emailBody = document.createElement('div');
emailBody.id = 'emailBody';
expandEmail.appendChild(emailBody);



// makes containers for a new email and populates them with object values
function makeEmailContainer(obj) {

    // make message class to hold message details
    var mailDetailBox = document.createElement('div');
    mailDetailBox.className = 'mailDetail';
    // insert new message at the top before 1st child unless no msgs [children] yet
    if (mailBox.childElementCount===0) {
        mailBox.appendChild(mailDetailBox);
    } else {
        mailBox.insertBefore(mailDetailBox,mailBox.firstChild);
    }
    
    // append subject to message class
    var subjectBox = document.createElement('div');
    subjectBox.className = 'subject';
    subjectBox.innerHTML = obj.subject;
    mailDetailBox.appendChild(subjectBox);
    
    // append sender to message class
    var senderBox = document.createElement('div');
    senderBox.className = 'sender';
    senderBox.innerHTML = obj.sender;
    mailDetailBox.appendChild(senderBox);

    // append date to message class
    var dateBox = document.createElement('div');
    dateBox.className = 'date';
    var timezoneOffset = obj.date.getTimezoneOffset()/60;
    var localDate = new Date(obj.date.setHours(obj.date.getHours() - timezoneOffset));
    var fmtLocalDate = localDate.toISOString().slice(0, 16).replace("T", " ");
    dateBox.innerHTML = fmtLocalDate;
    mailDetailBox.appendChild(dateBox);

    // append body to message class
    var bodyBox = document.createElement('div');
    bodyBox.className = 'body';
    bodyBox.value = obj.body;
    mailDetailBox.appendChild(bodyBox);

}

// load inbox with original emails
for (var i=0; i<window.geemails.length; i++) {
    var msgObj = window.geemails[i];
    makeEmailContainer(msgObj);
}

var mailDetailClass = document.getElementsByClassName('mailDetail');
countBox.innerHTML = "Messages: "+mailDetailClass.length;

// add event listeners for inital set of emails
for (var i=0; i<mailDetailClass.length; i++) {
    mailDetailClass[i].addEventListener('click', drillEmail);
}

function drillEmail() {
    emailSubject.innerHTML = this.querySelectorAll('.subject')[0].innerHTML;
    emailSender.innerHTML = this.querySelectorAll('.sender')[0].innerHTML;
    emailDate.innerHTML = this.querySelectorAll('.date')[0].innerHTML;
    emailBody.innerHTML = this.querySelectorAll('.body')[0].value;
}

// new email every 10 seconds
setInterval(incomingMsg, 10000);

function incomingMsg() {
    var newestMessage = getNewMessage();
    makeEmailContainer(newestMessage);
    countBox.innerHTML = "Messages: "+mailDetailClass.length;
    mailDetailClass[0].addEventListener('click',drillEmail);
}