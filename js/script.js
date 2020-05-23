/* Responsive menu */
let topNav = document.getElementById("mobile");
let topNavSwitch = document.getElementById("mobile-bars");

topNavSwitch.addEventListener("click", function () {
   topNav.classList.toggle("mobile-menu");
});

/* Banner Video */
const bannerVideo = document.getElementById("video");

function playAndPause() {
   if (bannerVideo.paused) bannerVideo.play();
   else bannerVideo.pause();
}

/* Getting history data */
const historyData = (historyArray) => {
   const historyContainer = document.querySelector(".history");
   let resultsHTML = " ";
   for (let i = 0; i < historyArray.length; i++) {
      resultsHTML += ` <section class="flexbox">
                       <p class="bold">${historyArray[i].title}</p>
                       <p>${historyArray[i].event_date_utc}</p>
                       <p>${historyArray[i].details}</p>
                       <p><a href="${historyArray[i].links.article}" target="_blank">Read more</a></p> 
                       </section>
                        `;
   }
   historyContainer.innerHTML = resultsHTML;
};
/* Getting launches data */
const launchesData = (launchesArray) => {
   const launchesContainer = document.querySelector("#launches");
   let resultsHTML = " ";
   for (let i = 0; i < launchesArray.length; i++) {
      resultsHTML += `                       
                      <section class="flexbox launches">
                      <p><span class="bold">Misson Name:</span> ${launchesArray[i].mission_name}</p>
                      <p><span class="bold">Launch Date:</span> ${launchesArray[i].launch_date_local}</p>
                      <p><span class="bold">Rocket Name:</span> ${launchesArray[i].rocket.rocket_name}</p>
                      <p><span class="bold">Launch Site:</span> ${launchesArray[i].launch_site.site_name_long}</p>                    
                      </section>
                        `;
   }
   launchesContainer.innerHTML = resultsHTML;
};
/* Subscribe */
const subscribeForm = document.querySelector("#subscribe");

subscribeForm.addEventListener("submit", validateSubscribe);

function validateSubscribe(event) {
   event.preventDefault();
   console.log("You have subscribed");

   const email = document.querySelector("#subscribeEmail");
   const invalidEmailError = document.querySelector("#subscribeError");
   const emailValue = email.value;

   if (validateEmail(emailValue) === true) {
      invalidEmailError.style.display = "none";
   } else {
      invalidEmailError.style.display = "block";
   }
}
/* Validate email */
function validateEmail(email) {
   const regEx = /\S+@\S+\.\S+/;
   return regEx.test(email);
}
