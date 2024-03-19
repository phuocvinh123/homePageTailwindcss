import './less.less'

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'
(<any>window).API = API;
(<any>window).Message = Message;

import { setupFormValid } from './validation.ts'
setupFormValid();
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};

// import { setupMenuMobile } from './menu-mobile.ts';
// setupMenuMobile(document.getElementsByClassName('handle-menu'));
// // swiper 10


// // echarts 5
// import { setupEchart } from './echart.ts'
// setupEchart();

// window.onload = async () => {
//   const test = await API.post('/authentication/jwt/login', {
//     deviceName:
//       "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
//     deviceNo: "Macintosh",
//     deviceType: "BROWSER",
//     password: "41234231",
//     remember: false,
//     username: "12342134",
//   });
//   console.log(test);
// };

function handleAddNavMenuItem() {
  const menuItems = document.querySelectorAll(".activated-narbar");
  menuItems?.forEach(items => {
    items.classList.add('active');
  })
}

import { handleChangeNav, handleAddNavMenu } from './hoverNav.ts';

document.getElementById("menuNav")?.addEventListener("click", handleChangeNav);
document.getElementById("closeNar")?.addEventListener("click", handleChangeNav);
document.querySelector(".backgroundBlack")?.addEventListener("click", handleChangeNav);
document.querySelector(".home")?.addEventListener("click", () => {
  handleAddNavMenu(".home")
  handleAddNavMenuItem();
});
document.querySelector(".pages")?.addEventListener("click", () => handleAddNavMenu(".pages"));
document.querySelector(".project")?.addEventListener("click", () => handleAddNavMenu(".project"));
document.querySelector(".blog")?.addEventListener("click", () => handleAddNavMenu(".blog"));
// button 
import { handleChangeActivated, handleChangeHidden } from "./activated.ts"

document.querySelector(".button-rent")?.addEventListener("click", () => handleChangeActivated(".button-rent"));
document.querySelector(".button-buy")?.addEventListener("click", () => handleChangeActivated(".button-buy"));
document.querySelector(".button-sell")?.addEventListener("click", () => handleChangeActivated(".button-sell"));


document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.querySelector(".count-animate");

  const targetNumber = 4000;
  let currentNumber = 0;
  const increment = Math.ceil(targetNumber / 100);
  if (countElement) {
    const interval = setInterval(function () {
      countElement.textContent = currentNumber.toLocaleString() + "+";

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }

      currentNumber += increment;
    }, 10);
  }

});
//count
document.addEventListener('DOMContentLoaded', function () {
  const countedElements: string[] = [];
  let allTargetsReached = false;

  function countUp(elementSelector: string, targetNumber: number, suffix = '', delay: number | undefined) {
    const countElement = document.querySelector(elementSelector) as HTMLElement | null;
    let currentNumber = 0; // Change from const to let
    const increment = Math.ceil(targetNumber / targetNumber);

    const interval = setInterval(function () {
      if (countElement) {
        countElement.textContent = currentNumber.toLocaleString() + suffix;
      }

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
        checkAllTargetsReached(); // Kiểm tra nếu tất cả các target đã được đạt đến
      }

      currentNumber += increment;
    }, delay);
  }

  function checkScrollAndCount() {
    const elementsToCount: { selector: string; target: number; suffix: string; delay: number }[] = [
      { selector: '.count-patients', target: 200, suffix: '', delay: 20 },
      { selector: '.count-hearts', target: 20, suffix: '', delay: 200 },
      { selector: '.count-doctors', target: 10, suffix: 'K', delay: 400 },
      { selector: '.count-works', target: 900, suffix: '', delay: -50 },
    ];

    elementsToCount.forEach(function (element) {
      const countElement = document.querySelector(element.selector) as HTMLElement | null;
      if (countElement && !countedElements.includes(element.selector)) {
        const elementPosition = countElement.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        const triggerPosition = screenHeight * 0.75;

        if (elementPosition < triggerPosition) {
          countUp(element.selector, element.target, element.suffix, element.delay);
          countedElements.push(element.selector);
        }
      }
    });
  }

  function checkAllTargetsReached() {
    if (!allTargetsReached && countedElements.length === 4) {
      allTargetsReached = true;
      console.log("Tất cả các target đã được đạt đến cùng một lúc.");
    }
  }

  checkScrollAndCount();
  window.addEventListener('scroll', function () {
    checkScrollAndCount();
  });
});



window.addEventListener('scroll', () => {
  const navMenu = document.querySelector('.nav-menu');
  if (window.scrollY > 123) {
    navMenu?.classList.add('sticky')
    navMenu?.classList.add('top-0')
    navMenu?.classList.add('left-0')
    navMenu?.classList.add('right-0')
    navMenu?.classList.add('opacity-85')
  } else {
    navMenu?.classList.remove('fixed')
    navMenu?.classList.remove('top-0')
    navMenu?.classList.remove('left-0')
    navMenu?.classList.remove('right-0')
    navMenu?.classList.remove('opacity-85')
  }
})

import { setupSwiper } from './swiper.ts';
setupSwiper();

const buttonOpenVideo = document.querySelector(".button-open-video");
buttonOpenVideo?.addEventListener("click", () => {
  handleChangeHidden();
});
const buttonCloseVideo = document.querySelector(".button-close-video");
buttonCloseVideo?.addEventListener("click", () => {
  handleChangeHidden();
});

document.addEventListener("DOMContentLoaded", () => {
  const mouseLeaves = document.querySelectorAll("#mouseLeave");

  mouseLeaves.forEach((mouseLeave) => {
    const plus = mouseLeave.querySelector("#plus");

    plus?.classList.remove("group-hover:ml-1");

    mouseLeave.addEventListener("mouseenter", () => {
      plus?.classList.add("group-hover:ml-1");
    });

    mouseLeave.addEventListener("mouseleave", function () {
      plus?.classList.remove("group-hover:ml-1");
    });
  });
});
// import { animationSlide } from "./gasp.ts";
// animationSlide(document.querySelector('#animation-slide')!, 0)

interface MenuItem {
  menuName: string;
  submenuItems: string[];
}

interface MenuData {
  menuItems: MenuItem[];
}

const data: MenuData = {
  menuItems: [
    {
      menuName: 'Home',
      submenuItems: ['Home One', 'Home Two', 'Home Three', 'Home Four', 'Home Five', 'Home Video', 'Home Map'],
    },
    {
      menuName: 'Pages',
      submenuItems: [
        'Property',
        'Property Sidebar',
        'Property Details',
        'Add new Listing',
        'Map Location',
        'About us',
        'FAQ',
        'Cheack out',
        'Cart',
        'Login',
        'Account',
      ],
    },
    {
      menuName: 'Project',
      submenuItems: ['Project', 'Project Details'],
    },
    {
      menuName: 'Blog',
      submenuItems: ['Blog Classic', 'Blog Details'],
    },
  ],
};

const template = Handlebars.compile(document.getElementById('menu-template')?.innerHTML);
const html = template(data);
const menuContainer = document.getElementById('menu-container');
if (menuContainer !== null && menuContainer !== undefined) {
  menuContainer.innerHTML = html;
}
