const markAll = document.getElementsByTagName('h6')[0];
const count = document.getElementsByTagName('span')[0];
const notification = document.getElementsByClassName("circle")[0];
const notification1 = document.getElementsByClassName("circle")[1];
const notification2 = document.getElementsByClassName("circle")[2];
const backgroundColor1 = document.getElementsByClassName('notification')[0];
const backgroundColor2 = document.getElementsByClassName('notification')[1];
const backgroundColor3 = document.getElementsByClassName('notification')[2];

function cleanNotifications(){
    count.style.display = "none";

    notification.style.display = 'none';
    notification1.style.display = 'none';
    notification2.style.display = 'none';

    backgroundColor1.style.backgroundColor = "white";
    backgroundColor2.style.backgroundColor = "white";
    backgroundColor3.style.backgroundColor = "white";
}
markAll.addEventListener('click', cleanNotifications);
notification.addEventListener('click', cleanNotifications);