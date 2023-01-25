ControlAltDelete SwatchesSku Extension
=====================

Description
-----------
This module allows you to retrieve the SKU of the current selected SKU.

Usage
------------

Require it in your component:

```javascript
define([
    'uiComponent',
    'ControlAltDelete_SwatchesSku/js/model/selected-product-sku',
], function (
    sku
) {
    'use strict';

    return Component.extend({
        sku: sku
    });
});
```

And then in your HTML:
```html
<!-- Output the selected SKU -->
<span data-bind="text: sku"></span>
```

But you can also use it with computed observables:
```javascript
var result = ko.computed( function () {
    return 'The selected SKU is ' + sku();
});
```

Contribution
------------
Any contribution is highly appreciated. The best way to contribute code is to open a pull request on GitHub.

Licence
-------
[OSL - Open Software Licence 3.0](http://opensource.org/licenses/osl-3.0.php)

Copyright
---------
(c) [Control Alt Delete](https://www.controlaltdelete.dev)
