import cartPage from '../pageobjects/cart.page';
import checkoutPage from '../pageobjects/checkout.page';
import checkoutCompletePage from '../pageobjects/checkoutComplete.page';
import checkoutTwoPage from '../pageobjects/checkoutTwo.page';
import inventoryPage from '../pageobjects/inventory.page';
import LoginPage from '../pageobjects/login.page';

describe('Verify Login', () => {

    it('Verify input are empty', () => {
        LoginPage.open('');
        expect(LoginPage.inputUsername.getText()).toBe('');
        expect(LoginPage.inputPassword.getText()).toBe('');
    });

    it('Verify that the input contains their respective values', () => {
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        expect(LoginPage.inputUsername).toHaveValue('standard_user');
        expect(LoginPage.inputPassword).toHaveValue('secret_sauce');
    });

    it('Verify user was logged in successfully', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

});

describe('Validate that 2 products are in the “Your Cart” form', () => {
    it('should add 2 items to the "your cart" form', () => {
        inventoryPage.addItemsToCart();
        inventoryPage.goToCartForm();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

    it('should find two specific items in the "your cart" form', () => {
        expect(cartPage.getProduct('Sauce Labs Backpack')).toExist();
        expect(cartPage.getProduct('Sauce Labs Onesie')).toExist();
        cartPage.goToCheckOutForm();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

});

describe('Validate that required fields in the checkout form', () => {
    it('should not leave current page', () => {
        checkoutPage.goToCheckOutOverViewForm();
        expect(checkoutPage.getErrorElement()).toExist();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('should complete required fields and move on to the next step', () => {
        checkoutPage.setRequiredFields('Luis', 'Garcia', '11111');
        checkoutPage.goToCheckOutOverViewForm();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });
});

describe('Validate the sum of the item total', () => {
    it('Sub total should be equal to 37.98', () => {
        expect(checkoutTwoPage.getSubTotal()).toBe(37.98);
        expect(checkoutTwoPage.itemSubTotal).toHaveTextContaining('Item total: $37.98');
    });

    it('Total should be equal to 41.02', () => {
        expect(checkoutTwoPage.getTotal()).toBe(41.02);
        expect(checkoutTwoPage.itemTotal).toHaveTextContaining('Total: $41.02');
    });

    it('should move to the final step', () => {
        checkoutTwoPage.goToFinish();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });
});

describe('Validate that “THANK YOU FOR YOUR ORDER” is displayed', () => {
    it('farewell message should be displayed', () => {
        expect(checkoutCompletePage.farewellMessage).toBeDisplayed();
        expect(checkoutCompletePage.farewellMessage.getText()).toBe('THANK YOU FOR YOUR ORDER');
    });
});




