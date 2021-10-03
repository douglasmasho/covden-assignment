console.log("Hello")

const button = document.getElementById("btn-back-to-top");
const notifications = document.querySelector(".notifications-btn");
const notificationsMsg = document.querySelector(".notifications-message");

function functionScroll() {
    if (document.body.scrollTop > 10 ||document.documentElement.scrollTop > 10) {
      button.style.opacity = 1;
      button.style.display = "block";
    } else {
      button.style.opacity = 0;
      button.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

window.onscroll = function () {
    functionScroll();
  };



  button.addEventListener("click", scrollToTop);
  button.addEventListener("mouseover", ()=>{
    document.querySelector(".scrollIcon").classList.add("active")
  })

  button.addEventListener("mouseout", ()=>{
    document.querySelector(".scrollIcon").classList.remove("active")
  })


  notifications.addEventListener("mouseover", ()=>{
    notificationsMsg.style.opacity = 1;
    notificationsMsg.style.width = "200px";
  })

  notifications.addEventListener("mouseout", ()=>{
    notificationsMsg.style.opacity = 0;
    notificationsMsg.style.width = 0;
  })
