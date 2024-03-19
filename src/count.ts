export function countNumber() {
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
}