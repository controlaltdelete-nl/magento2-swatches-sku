var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'ControlAltDelete_SwatchesSku/js/model/sku-switch': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'ControlAltDelete_SwatchesSku/js/model/swatch-sku-switch': true
            }
        }
    }
};
