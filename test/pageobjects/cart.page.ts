import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * get Checkout buttom
     */
    get checkOut () { return $('[data-test="checkout"]') }

    /**
     * Get the existing items in the shopping Cart
     */   
    getProduct(name: string) {
        const element = $(`.inventory_item_name=${name}`);
        return element;
    }    

    /**
     * 
     * Move to checkout page
     */
    goToCheckOutForm () {
        this.checkOut.click();
    }

    /**
     * Open Cart page
     */
    open (path: string) {
        return super.open(path);
    }
}

export default new CartPage();
