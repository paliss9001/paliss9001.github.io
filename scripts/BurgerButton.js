class BurgerButton {
    selectors = {
        root: '[data-js-menu]',
        overlay: '[data-js-overlay]',
        sidebar: '[data-js-sidebar]',
        BurgerButton: '[data-js-burger-button]',
        cancelBurgerButton: '[data-js-burger-button-cancel]'
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.sidebarElement = this.rootElement.querySelector(this.selectors.sidebar)
        this.BurgerButtonElement = this.rootElement.querySelector(this.selectors.BurgerButton)
        this.cancelBurgerButtonElement = this.rootElement.querySelector(this.selectors.cancelBurgerButton)

        this.bindEvents()
    }

    onBurgerButtonClick = (event) => {
        this.sidebarElement.classList.add(this.stateClasses.isActive)
        this.overlayElement.classList.add(this.stateClasses.isActive)
    }

    onCloseBar = (event) => {
        const element = event.target

        if (element.closest(this.cancelBurgerButtonElement) || element == this.overlayElement) {
            this.sidebarElement.classList.remove(this.stateClasses.isActive)
            this.overlayElement.classList.remove(this.stateClasses.isActive)
        }
    }

    bindEvents() {
        this.BurgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        document.addEventListener('click', this.onCloseBar)
    }
}

export default BurgerButton;

