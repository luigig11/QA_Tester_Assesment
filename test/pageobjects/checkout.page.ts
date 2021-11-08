import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get continueButtom() { return $('[data-test="continue"]') }
    get firstNameField() { return $('#first-name') }
    get lastNameField() { return $('#last-name') }
    get postalCodeField() { return $('#postal-code') }

    /**
     * Get error alert element
     */
    getErrorElement() {
        const element = $('h3[data-test="error"]');
        return element;
    }

     /**
      * Set checkout information 
      */
    setRequiredFields(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        this.firstNameField.setValue(firstName);
        this.lastNameField.setValue(lastName);
        this.postalCodeField.setValue(postalCode);
    }

    /**
     * Move to checkout step two page
    */
    goToCheckOutOverViewForm() {
        this.continueButtom.click();
    }

    /**
     * Open checkout page
     */
    open(path: string) {
        return super.open(path);
    }
}

export default new CheckOutPage();
