class Copy {
    selectors = {
        copy: '[data-js-copy]',
        facilityCardValues: '[data-js-facility-card-values]',
        facilityCardValue: '[data-js-facility-card-value]'
    }

    constructor() {
        this.bindEvents()
    }

    onCopy = (event) => {
        const element = event.target.closest(this.selectors.copy)

        if (element) {
            navigator.clipboard.writeText(element.textContent.trim())
            .then(() => {
                alert('copied successfully')
            })
            .catch((err) => {
                alert('unable to copy', err)
            })
        }

    }

    bindEvents() {
        document.addEventListener('click', this.onCopy)
    }
}

export default Copy;
