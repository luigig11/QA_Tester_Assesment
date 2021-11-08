import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutCompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    get farewellMessage() { return $('.complete-header=THANK YOU FOR YOUR ORDER') }
   
    /**
     * Open checkout complete page
     */
    open(path: string) {
        return super.open(path);
    }
}

export default new CheckOutCompletePage();
