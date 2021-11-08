import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemSauceLabsBackpack () { return $('[data-test="add-to-cart-sauce-labs-backpack"]') }
    get itemSauceLabsOnesie () { return $('[data-test="add-to-cart-sauce-labs-onesie"]') }
    get shopingCartLink () { return $('a.shopping_cart_link') }

    /**
     * Add items to shopping Cart
     */
    addItemsToCart() {
        this.itemSauceLabsBackpack.click();
        this.itemSauceLabsOnesie.click();
    }

    /**
     * Move to cart page
     */
    goToCartForm () {
        this.shopingCartLink.click();
    }
    

    /**
     * Open inventory page
     */
    open (path: string) {
        return super.open(path);
    }
}

export default new InventoryPage();
