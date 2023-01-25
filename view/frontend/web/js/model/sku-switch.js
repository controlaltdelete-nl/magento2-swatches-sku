define([
    'jquery',
    'mage/utils/wrapper',
    'ControlAltDelete_SwatchesSku/js/model/selected-product-sku'
], function ($, wrapper, selectedProductSku) {
    'use strict';

    return function(targetModule){
        var reloadPrice = targetModule.prototype._reloadPrice;

        targetModule.prototype._reloadPrice = wrapper.wrap(reloadPrice, function (original) {
            var result = original();
            var simpleSku = this.options.spConfig.skus[this.simpleProduct];

            if (simpleSku !== '') {
                selectedProductSku(simpleSku);
            }
            return result;
        });

        return targetModule;
    };
});
