class Copy {
    selectors = {
        copy: '[data-js-copy]',
        facilityCardValues: '[data-js-facility-card-values]',
        facilityCardValue: '[data-js-facility-card-value]'
    }

    constructor() {
        this.copyElement = document.querySelector(this.selectors.copy)
        
        this.bindEvents()
    }

    onCopy = () => {
        const wrapper = this.copyElement.closest(this.selectors.facilityCardValues)
        
        const text = wrapper.querySelector(this.selectors.facilityCardValue).textContent

        navigator.clipboard.writeText(text)
        alert('Copied to clipboard')
    }

    bindEvents() {
        this.copyElement.addEventListener('click', this.onCopy)
    }
}

export default Copy;