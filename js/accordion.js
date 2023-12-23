
accordion = {
    sections: [],
    collapseSection: function(section) {
        section.sectionMinusElement.classList.add('hidden')
        section.sectionPlusElement.classList.remove('hidden')
        section.sectionDescription.classList.add('hidden')
    },
    collapseAllSections: function() {
        this.sections.forEach((section) => {
            this.collapseSection(section)
        })
    },
    expandSection: function(section) {
        this.collapseAllSections()
        section.sectionMinusElement.classList.remove('hidden')
        section.sectionPlusElement.classList.add('hidden')
        section.sectionDescription.classList.remove('hidden')
    },
    initSection: function(section) {
        section.sectionMinusElement.addEventListener('click', (event) => {
            this.collapseSection(section)
        });
        section.sectionPlusElement.addEventListener('click',(event) => {
            this.expandSection(section)
        });
        this.sections.push(section)
    },
    initSections: function() {
        let sectionElements = document.querySelectorAll(".accordion-section");
        sectionElements.forEach((sectionElement) => {
            let sectionPlusElement = sectionElement.querySelector(".accordion-section-header-icon-plus")
            let sectionMinusElement = sectionElement.querySelector(".accordion-section-header-icon-minus")
            let sectionDescription = sectionElement.querySelector(".accordion-section-description")
            let section = {
                sectionElement,
                sectionPlusElement,
                sectionMinusElement,
                sectionDescription,
                active: false
            }
            this.initSection(section)
        });
        if (this.sections.length > 0) {
            this.expandSection(this.sections[0])
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    accordion.initSections()
});