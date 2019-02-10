

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

// loop through to add window.geemails object content thru DOM
for (var i=0; i<window.geemails.length; i++) {

    // make message class to hold message details
    var mailDetailBox = document.createElement('div');
    mailDetailBox.className = 'mailDetail';
    mailBox.appendChild(mailDetailBox);

    // append subject to message class
    var subjectBox = document.createElement('div');
    subjectBox.className = 'subject';
    subjectBox.innerHTML = window.geemails[i].subject;
    mailDetailBox.appendChild(subjectBox);

    // append sender to message class
    var senderBox = document.createElement('div');
    senderBox.className = 'sender';
    senderBox.innerHTML = window.geemails[i].sender;
    mailDetailBox.appendChild(senderBox);

    // append date to message class
    var dateBox = document.createElement('div');
    dateBox.className = 'date';
    var fmtDate = window.geemails[i].date.toISOString().slice(0, 16).replace("T", " ");
    dateBox.innerHTML = fmtDate;
    mailDetailBox.appendChild(dateBox);

    // append body to message class
    var bodyBox = document.createElement('div');
    bodyBox.className = 'body';
    bodyBox.value = window.geemails[i].body;
    mailDetailBox.appendChild(bodyBox);
}


var mailDetailClass = document.getElementsByClassName('mailDetail');

for (var i=0; i<mailDetailClass.length; i++) {
    mailDetailClass[i].addEventListener('click', drillEmail);
}

function drillEmail() {
    emailSubject.innerHTML = this.querySelectorAll('.subject')[0].innerHTML;
    emailSender.innerHTML = this.querySelectorAll('.sender')[0].innerHTML;
    emailDate.innerHTML = this.querySelectorAll('.date')[0].innerHTML;
    emailBody.innerHTML = this.querySelectorAll('.body')[0].value;
}
