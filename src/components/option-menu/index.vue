<template>
  <div class="kai-option-menu" tabindex="0">
    <div class="kai-option-menu__overlay"></div>

    <div class="kai-option-menu__wrapper">
      <div class="kai-option-menu__wrapper__title">
        {{ title }}
      </div>
      <div class="kai-option-menu__wrapper__list">
        <div
          :nav-selectable="true"
          class="kai-option-menu__wrapper__list__item"
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option.text }}
        </div>
      </div>
      <div class="kai-option-menu__wrapper__key">
        {{ middleKeyTextUpperCase }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiOptionMenu",

  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },

    title: {
      type: String,
      default: "Options"
    },

    middleKeyText: {
      type: String,
      default: "Select"
    }
  },

  computed: {
    middleKeyTextUpperCase() {
      return this.middleKeyText.toUpperCase();
    }
  },

  mounted() {
    this.init();
    document
      .querySelector(".kai-option-menu")
      .addEventListener("keydown", this.onKeyDown);
  },

  methods: {
    init() {
      const allElements = this.getAllElements();
      [].forEach.call(allElements, (element, index) => {
        element.setAttribute("nav-index", index);
      });

      const selectedElement = allElements[0];
      selectedElement.setAttribute("nav-selected", "true");
    },

    getAllElements() {
      return document.querySelectorAll(".kai-option-menu [nav-selectable]");
    },

    onSelect() {},

    onKeyDown(event) {
      const self = this;
      const currentItem = document.querySelector("[nav-selected=true]");
      const currentIndex = currentItem
        ? parseInt(currentItem.getAttribute("nav-index"))
        : 0;

      switch (event.key) {
        case "Enter":
          self.$emit("on-select", this.options[currentIndex]);
          break;

        case "ArrowUp":
          this.onUp();
          break;

        case "ArrowDown":
          this.onDown();
          break;

        default:
          break;
      }
    },

    onDown() {
      const allElements = this.getAllElements();
      const currentItem = document.querySelector("[nav-selected=true]");
      const currentIndex = currentItem
        ? parseInt(currentItem.getAttribute("nav-index"))
        : 0;
      const goToFirstElement = currentIndex + 1 > allElements.length - 1;
      const setIndex = goToFirstElement ? 0 : currentIndex + 1;
      this.selectElement(allElements[setIndex] || allElements[0]);
    },

    onUp() {
      const allElements = this.getAllElements();
      const currentItem = document.querySelector("[nav-selected=true]");
      const currentIndex = currentItem
        ? parseInt(currentItem.getAttribute("nav-index"))
        : 0;
      const goToLastElement = currentIndex === 0;
      const setIndex = goToLastElement
        ? allElements.length - 1
        : currentIndex - 1;
      this.selectElement(allElements[setIndex] || allElements[0]);
    },

    selectElement(selectElement) {
      [].forEach.call(this.getAllElements(), (element, index) => {
        const selectThisElement = element === selectElement;
        element.setAttribute("nav-selected", selectThisElement);
        element.setAttribute("nav-index", index);

        if (selectThisElement) {
          this.scrollToElement(element);
        }

        if (element.nodeName === "INPUT") {
          selectThisElement ? selectElement.focus() : selectElement.blur();
        }
      });
    },

    scrollToElement(element) {
      const listElement = document.querySelector(
        ".kai-option-menu__wrapper__list"
      );
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight - listElement.clientHeight) {
        let moveUp = rect.top - window.innerHeight - listElement.clientHeight;
        listElement.scrollBy({
          top: moveUp
        });
      }

      if (rect.bottom > window.innerHeight) {
        let moveDown = rect.bottom - window.innerHeight + 28;
        listElement.scrollBy({
          top: moveDown
        });
      }
    },

    isElementInViewport(element) {
      const listElement = document.querySelector(
        ".kai-option-menu__wrapper__list"
      );
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= listElement.clientHeight &&
        rect.right <= listElement.clientWidth
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-option-menu {
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  &__wrapper {
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;

    &__title {
      text-align: center;
      color: @grey-text;
      font-size: @secondary-text-size;
      background-color: @dialog-title-background-color;
      height: @dialog-title-height;
      line-height: @dialog-title-height;
    }

    &__list {
      background-color: white;
      max-height: 21rem;
      overflow: scroll;
      padding-bottom: @dialog-title-height;

      &__item {
        font-size: @primary-text-size;
        height: @list-item-height;
        line-height: @list-item-height;
        box-sizing: border-box;
        padding: 0 1rem;
        border-bottom: 1px solid #ebedf0;

        &[nav-selected="true"] {
          background-color: @accent-color;
          color: #ffffff;
        }
      }
    }

    &__key {
      font-weight: bold;
      text-align: center;
      font-size: @secondary-text-size;
      background-color: @dialog-title-background-color;
      height: @dialog-title-height;
      line-height: @dialog-title-height;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: 5 auto;
      z-index: 1;
    }
  }
}
</style>
