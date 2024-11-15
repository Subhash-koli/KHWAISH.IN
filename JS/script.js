    // Script to hide the preloader after loading
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    });

    //sricky navbar
var navBar = $("#topNav");
var hdrHeight = $("header").height();


$(window).scroll(function() {
if( $(this).scrollTop() > hdrHeight + 50) {
  navBar.addClass("navScrolled");
} else {
  navBar.removeClass("navScrolled");
}
});




function filterEvents(category) {
// Find the radio button with the ID matching the category
const radioButton = document.getElementById(category);

if (radioButton) {
  // Set the radio button to checked, which triggers the CSS to show the correct category
  radioButton.checked = true;
}
}



function filterEvents(category) {
const radioButton = document.getElementById(category);
if (radioButton) {
  radioButton.checked = true;
  // Scroll to the events section
  document.querySelector('.events').scrollIntoView({ behavior: 'smooth' });
}
}
function toggleMenu() {
const navMenu = document.getElementById('navMenu');
navMenu.classList.toggle('show');
}

/* home contact slider */
jQuery(document).ready(function () {
jQuery('.contact-btn').click(function(){
    jQuery('#side-box').toggleClass('open-box');		
  });
  jQuery('.close-icon').click(function(){
    jQuery('#side-box').removeClass('open-box');		
  });
  
  jQuery('.contact-side').click(function(){
    jQuery('#conact-content').toggleClass('open-box');		
  });
  
  
  
  jQuery(document).click(function(e) {
        if (jQuery(e.target).closest('#side-box').length === 0 && jQuery(e.target).closest('.contact-btn').length === 0) {
            jQuery("#side-box").removeClass("open-box");
        }

    });
  });
  



  
// Show popup after 5 seconds
function showSchedulePopup() {
setTimeout(() => {
    document.getElementById('schedulePopup').style.display = 'flex';
}, 2000); // 5000 milliseconds = 5 seconds
}

// Close popup
function closePopup() {
document.getElementById('schedulePopup').style.display = 'none';
}

// Show selected day schedule
function showDay(dayId) {
// Hide all day schedules
document.querySelectorAll('.day-schedule').forEach(schedule => {
    schedule.style.display = 'none';
});
// Remove active class from all tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
});
// Show selected day schedule and set tab as active
document.getElementById(dayId).style.display = 'block';
document.querySelector(`[onclick="showDay('${dayId}')"]`).classList.add('active');
}

// Trigger popup on page load
window.onload = showSchedulePopup;
