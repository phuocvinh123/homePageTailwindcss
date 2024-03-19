export function countAnimate() {
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
}
export function hanleGroupHoverUseMouse() {
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
}