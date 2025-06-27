/**
 * uiManager - Basic User Interface Visibility Controller
 * Author: IlReDelTrucco
 * License: Custom
 */

const uiManager = {
    /**
     * Shows a DOM element by setting its display property.
     * @param {string} selector - CSS selector of the element.
     * @param {string} [displayType='block'] - CSS display value.
     */
    show(selector, displayType = 'block') {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[uiManager] Element "${selector}" not found.`);
            return;
        }
        element.style.display = displayType;
    },

    /**
     * Hides a DOM element by setting its display to 'none'.
     * @param {string} selector - CSS selector of the element.
     */
    hide(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[uiManager] Element "${selector}" not found.`);
            return;
        }
        element.style.display = 'none';
    },

    /**
     * Toggles the visibility of a DOM element.
     * @param {string} selector - CSS selector of the element.
     */
    toggle(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[uiManager] Element "${selector}" not found.`);
            return;
        }
        element.style.display = (element.style.display === 'none' || getComputedStyle(element).display === 'none') ? 'block' : 'none';
    }
};

// Example usage:
// uiManager.show('#menu');
// uiManager.hide('#popup');
// uiManager.toggle('#settings');

module.exports = uiManager;
