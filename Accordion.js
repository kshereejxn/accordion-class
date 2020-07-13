class Accordion {
    constructor(summaryText, detailsBody) {
        this.detailsBody = JSON.stringify(detailsBody)
        this.summaryText = summaryText
        this.element = null
        this.generate()
    }
    generate () {
        const detailsElement = document.createElement('details')
        const summaryElement = document.createElement('summary')
        detailsElement.append(summaryElement)
        summaryElement.append(this.summaryText)
        detailsElement.append(this.detailsBody)
        this.element = detailsElement
    }
    appendTo (parentElement) {
        parentElement.append(this.element)
    }
    getElement () {
        return this.element
    }
    toString () {
        return this.summaryText
    }
}

let myAccordion = new Accordion("Click to see inside", "Here's a bunch of text inside the accordion")

myAccordion.appendTo(document.querySelector('main'))

users.forEach((user) => {
    let currentAcc = new Accordion(user.name, user)
    currentAcc.appendTo(document.querySelector('main'))
})