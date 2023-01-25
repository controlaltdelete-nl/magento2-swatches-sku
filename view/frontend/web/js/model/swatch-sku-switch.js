define([
    'jquery',
    'mage/utils/wrapper',
    'ControlAltDelete_SwatchesSku/js/model/selected-product-sku'
], function ($, wrapper, selectedProductSku) {
    'use strict';

    return function(targetModule){
        var updatePrice = targetModule.prototype._UpdatePrice;

        targetModule.prototype.configurableSku = $('div.product-info-main .sku .value').html();
        targetModule.prototype._UpdatePrice = wrapper.wrap(updatePrice, function (original) {
            var allSelected = true;
            for (var i = 0; i < this.options.jsonConfig.attributes.length; i++) {
                if (!$('div.product-info-main .product-options-wrapper .swatch-attribute.' + this.options.jsonConfig.attributes[i].code).attr('option-selected')) {
                    allSelected = false;
                }
            }
            var simpleSku = this.configurableSku;
            if (allSelected) {
                var products = this._CalcProducts();
                simpleSku = this.options.jsonConfig.skus[products.slice().shift()];
            }
            selectedProductSku(simpleSku);
            return original();
        });

        return targetModule;
    };
});
