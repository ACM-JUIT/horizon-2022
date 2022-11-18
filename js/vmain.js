let nav = document.getElementById("nav-menu");
let butOne = document.getElementById("open");
let butTwo = document.getElementById("close");
let nav_link = document.getElementsByClassName("nav__list")
let toggle = document.getElementById("nav-toggle")
let body = document.getElementById("body")

/*==================== SHOW MENU ====================*/
const showMenu = (nav, butOne, butTwo, toggle, body) => {
    // Validate that variables exist
    let opened = 0;
    if (toggle && nav) {
      // body.addEventListener("click", ()=> {
      //   // if(nav.classList.contains("show-menu")){
      //   //   nav.classList.toggle("show-menu");
      //   // }
      // })
      toggle.addEventListener("click", () => {
        // We add the show-menu class to the div tag with the nav__menu class
        nav.classList.toggle("show-menu");
        butOne.classList.toggle("hide");
        butTwo.classList.toggle("hide");
      });
      
    }
  };
  


  showMenu(nav, butOne, butTwo, toggle, body);
    nav_link[0].addEventListener("click", ()=>{
      nav.classList.toggle("show-menu");
        butOne.classList.toggle("hide");
        butTwo.classList.toggle("hide");
    })
  
  
  
  
  
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let birthday = "Dec 02, 2022 18:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
        if(distance>0)
        {let hourL  =(distance % day) / hour;
        hourL=Math.floor(hourL);
        let dayL=Math.floor(distance / day);
        let minuteL=Math.floor((distance % hour) / minute);
        let secondL=Math.floor((distance % minute) / second);
      
        (document.getElementById("days").innerText = dayL),
        (document.getElementById("hours").innerText = hourL),
        (document.getElementById("minutes").innerText = Math.floor(
          minuteL
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          secondL
        ));
        }
      //do something later when date is reached
      if (distance < 0) {
        let countdown = document.getElementById("countdown"),
          content = document.getElementById("content");
  
        // headline.innerText = "DO THIS!!!!";
        // countdown.style.display = "none";
        // content.style.display = "block";
        (document.getElementById("days").innerText = "00"),
        (document.getElementById("hours").innerText = "00"),
        (document.getElementById("minutes").innerText = "00"),
        (document.getElementById("seconds").innerText = "00");
  
        clearInterval(x);
      }
      //seconds
    }, 0);
  
