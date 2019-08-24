const init = index => {
  [].forEach.call(getAllElements(), (element, index) => {
    element.setAttribute("nav-index", index);
  });

  const selectedElement =
    index == null ? getAllElements()[0] : getAllElements()[index];
  selectedElement.setAttribute("nav-selected", "true");
  selectedElement.setAttribute("nav-index", index == null ? 0 : index);
  selectedElement.focus();

  if (!isElementInViewport(selectedElement)) {
    scrollToElement(selectedElement);
  }
};

const getAllElements = () => document.querySelectorAll("[nav-selectable]");

const getCurrentElement = () => document.querySelector("[nav-selected=true]");

const getTheIndexOfTheSelectedElement = current => {
  const currentElement = current || getCurrentElement();
  console.log(
    "Current index:" + parseInt(currentElement.getAttribute("nav-index"))
  );
  return currentElement
    ? parseInt(currentElement.getAttribute("nav-index"))
    : 0;
};

const getCurrentItem = () => {
  const item = getCurrentElement();
  const index = getTheIndexOfTheSelectedElement(item);
  return {
    element: item,
    index: index
  };
};

const selectElement = selectElement => {
  [].forEach.call(getAllElements(), (element, index) => {
    const selectThisElement = element === selectElement;
    element.setAttribute("nav-selected", selectThisElement);
    element.setAttribute("nav-index", index);

    if (selectThisElement && !isElementInViewport(selectElement)) {
      scrollToElement(selectElement);
    }

    if (element.nodeName === "INPUT") {
      selectThisElement ? element.focus() : element.blur();
    }
  });
};

const Down = () => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const goToFirstElement = currentIndex + 1 > allElements.length - 1;
  const setIndex = goToFirstElement ? 0 : currentIndex + 1;
  selectElement(allElements[setIndex] || allElements[0]);
};

const Up = () => {
  const allElements = getAllElements();
  const currentIndex = getTheIndexOfTheSelectedElement();
  const goToLastElement = currentIndex === 0;
  const setIndex = goToLastElement ? allElements.length - 1 : currentIndex - 1;
  selectElement(allElements[setIndex] || allElements[0]);
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function scrollToElement(element) {
  var rect = element.getBoundingClientRect();

  if (rect.top < 0) {
    let moveUp = rect.top - 28;
    document.querySelector("#app").scrollBy({
      top: moveUp
    });
  }

  if (rect.bottom > window.innerHeight) {
    let moveDown = rect.bottom - window.innerHeight + 28;
    document.querySelector("#app").scrollBy({
      top: moveDown
    });
  }
}

export default { init, Up, Down, getCurrentItem };
