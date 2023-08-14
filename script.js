function display(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("sidebar__icon");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "flex";
    document.getElementById(pageName).style.width = "inherit";
    elmnt.style.backgroundColor = "rgba(0, 96, 190, 0.30)";

    if (pageName === 'groupChat') {
        document.getElementById('groupAddIcon').style.display = "block";
    } else {
        document.getElementById('groupAddIcon').style.display = "none";
    }

    chatContainer = document.getElementById("chat-container");
    callContainer = document.getElementById("call-container");
    var partcipantModal = document.getElementById("participant-modal");
    if (partcipantModal.style.display === "block"){
        partcipantModal.style.display = "none";
    }
    if (pageName === 'call') {
        chatContainer.style.display = "none";
        callContainer.style.display = "block";
    }else{
        callContainer.style.display = "none";
        chatContainer.style.display = "block";
    }
}
document.getElementById("defaultOpen").click();

const messageInput = document.getElementById('messageInput');
messageInput.addEventListener('input', function () {
    console.log(this.scrollHeight);
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
    const chatContainer = this.closest('.chat__container--message');
    if (chatContainer) {
        chatContainer.style.height = (this.scrollHeight + 20) + 'px';
    }
});

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown when clicking outside of it
window.onclick = function (event) {
    var dropdown = document.getElementById("dropdown");
    var clientProfileModal = document.getElementById("client-profile");
    var userProfile = document.getElementById("user-profile");  

    if (!event.target.matches('.nes-header__profile') && !event.target.matches('#dropdown') && !event.target.matches('#profileImage')
        && !event.target.matches('#client-profile') && !event.target.matches('#clientImage')
        && !event.target.matches('#user-profile') && !event.target.matches('#userprofile')) {
        dropdown.style.display = "none";
        if (!event.target.closest('.client__profile--container')) {
            clientProfileModal.style.display = "none";
            userProfile.style.display = "none";
        }
    }
}

function toggleClientProfile() {
    var clientProfileModal = document.getElementById("client-profile");
    clientProfileModal.style.display = (clientProfileModal.style.display === "block") ? "none" : "block";
    var overviewTab = document.getElementById("overviewTab");
    overviewTab.style.display = "block";
    var userProfileModal = document.getElementById("user-profile");
    var partcipantModal = document.getElementById("participant-modal");
    if ((userProfileModal.style.display === "block")){
        userProfileModal.style.display = "none";
    }
    else if(partcipantModal.style.display === "block"){
        partcipantModal.style.display = "none";   
    }
}

function toggleUserProfile() {
    var userProfileModal = document.getElementById("user-profile");
    userProfileModal.style.display = (userProfileModal.style.display === "block") ? "none" : "block";
    var overviewTab = document.getElementById("overviewuserTab");
    overviewTab.style.display = "block";
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
    var clientProfileModal = document.getElementById("client-profile");
    var partcipantModal = document.getElementById("participant-modal");
    if(clientProfileModal.style.display === "block"){
        clientProfileModal.style.display = "none";   
    }
    else if(partcipantModal.style.display === "block"){
        partcipantModal.style.display = "none";   
    }
}

function toggleParticipant() {
    var partcipantModal = document.getElementById("participant-modal");
    partcipantModal.style.display = (partcipantModal.style.display === "block") ? "none" : "block";
    var userProfileModal = document.getElementById("user-profile");
    var clientProfileModal = document.getElementById("client-profile");
    if ((userProfileModal.style.display === "block")){
        userProfileModal.style.display = "none";
    }
    else if(clientProfileModal.style.display === "block"){
        clientProfileModal.style.display = "none";   
    }
}

function showTab(tabName) {
    var overviewTab = document.getElementById("overviewTab");
    var filesTab = document.getElementById("filesTab");
    var clientProfileModal = document.getElementById("client-profile");
    overviewTab.style.display = "block";
    filesTab.style.display = "none";

    if (tabName === "files") {
        overviewTab.style.display = "none";
        filesTab.style.display = "block";
    }

    clientProfileModal.style.display = "block";
}

function showUserTab(tabName) {
    var overviewTab = document.getElementById("overviewuserTab");
    var filesTab = document.getElementById("filesuserTab");
    var userProfileModal = document.getElementById("user-profile");

    overviewTab.style.display = "block";
    filesTab.style.display = "none";

    if (tabName === "files") {
        overviewTab.style.display = "none";
        filesTab.style.display = "block";
    }

    userProfileModal.style.display = "block";
}
