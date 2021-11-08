import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPageTwo extends Page {
    /**
     * define selectors using getter methods
     */
    get finishButtom() { return $('#finish') }
    get itemPriceOne() { return $('.inventory_item_price=$29.99') }
    get itemPriceTwo() { return $('.inventory_item_price=$7.99') }
    get itemSubTotal() { return $('.summary_subtotal_label=Item total: $37.98') }
    get tax() { return $('.summary_tax_label=Tax: $3.04') }
    get itemTotal() { return $('.summary_total_label=Total: $41.02') }

    /**
     * Convert item price to number
     */
    getValue(element: any): number {
        let value = element.getText();
        value = value.slice(value.indexOf('$') + 1);
        let numericValue = Number(value);
        numericValue = Math.round((numericValue + Number.EPSILON) * 100) / 100;
        return numericValue;
    }

    /**
     * Get sub total price
     */
    getSubTotal(): number {
        let item1 = this.getValue(this.itemPriceOne);
        let item2 = this.getValue(this.itemPriceTwo);
        return item1 + item2;
    }

    /**
     * Get total price
     */
    getTotal(): number {
        let taxValue = this.getValue(this.tax);
        let subTotalValue = this.getSubTotal();
        let total = Math.round(((taxValue + subTotalValue) + Number.EPSILON) * 100) / 100
        return total;
    }

    /**
     * Move to checkout complete page
     */
    goToFinish() {
        this.finishButtom.click();
    }

    /**
     * Open checkout step two page
     */
    open(path: string) {
        return super.open(path);
    }
}

export default new CheckOutPageTwo();
