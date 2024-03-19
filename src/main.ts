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

function handleDocumentIdClick(ClassItem: string, hanldeFunction: () => void) {
  document.getElementById(ClassItem)?.addEventListener("click", hanldeFunction);
}
function handleDocumentSelectorClick(ClassItem: string, hanldeFunction: () => void) {
  document.querySelector(ClassItem)?.addEventListener("click", hanldeFunction);
}

//handle button video
handleDocumentIdClick(".button-open-video", () => handleChangeHidden());
handleDocumentIdClick(".button-close-video", () => handleChangeHidden());


import { handleChangeNav, handleAddNavMenu } from './hoverNav.ts';

handleDocumentIdClick("menuNav", handleChangeNav);
handleDocumentIdClick("closeNar", handleChangeNav);
handleDocumentSelectorClick(".backgroundBlack", handleChangeNav);

document.querySelector(".home")?.addEventListener("click", () => {
  handleAddNavMenu(".home")
  handleAddNavMenuItem();
});

function addClickEventToSelector(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", () => handleAddNavMenu(selector));
  }
}

addClickEventToSelector(".pages");
addClickEventToSelector(".project");
addClickEventToSelector(".blog");

// button 
import { handleChangeActivated, handleChangeHidden } from "./activated.ts"

function addClickEventToActivated(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", () => handleChangeActivated(selector));
  }
}
addClickEventToActivated(".button-rent");
addClickEventToActivated(".button-buy");
addClickEventToActivated(".button-sell");

// Using srcoll 
import { scrollWindow, breakPointProgress } from './scroll.ts'
scrollWindow();
breakPointProgress();

// Using swpier slice for img
import { setupSwiper } from './swiper.ts';
setupSwiper();

// Count Function
import { countNumber } from './count.ts';
countNumber();

// Handle bar for Nav
import { handleBar } from './handleBar.ts';
handleBar();

// General function 
import { hanleGroupHoverUseMouse, countAnimate } from './addEvent.ts'
countAnimate();
hanleGroupHoverUseMouse();