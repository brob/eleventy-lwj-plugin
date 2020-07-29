---
title: homepage
layout: base.njk
---


This is a sample homepage with the absolute minimum if we want to test here.

When we're ready to test our plugin in another site, we'll `cd` over to the LWJ demo base, then:

```js
const lwjPlugin = require('../pathToLWJPlugin/')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lwjPlugin)
}
```

## Have some more MD if you want to test

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio felis, aliquam sed nisi eu, eleifend pulvinar ipsum. Donec eu mattis enim, ut ullamcorper sapien. Donec imperdiet interdum purus, nec malesuada diam varius quis. Cras feugiat ex libero, at feugiat est iaculis vitae. Morbi at risus orci. Proin eu erat vitae velit condimentum vulputate. Nunc id eros sodales, varius dolor sed, porta orci. Morbi posuere interdum turpis, eget aliquet felis pellentesque quis. Ut viverra diam eget hendrerit aliquet.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio felis, aliquam sed nisi eu, eleifend pulvinar ipsum. Donec eu mattis enim, ut ullamcorper sapien. Donec imperdiet interdum purus, nec malesuada diam varius quis. Cras feugiat ex libero, at feugiat est iaculis vitae. Morbi at risus orci. Proin eu erat vitae velit condimentum vulputate. Nunc id eros sodales, varius dolor sed, porta orci. Morbi posuere interdum turpis, eget aliquet felis pellentesque quis. Ut viverra diam eget hendrerit aliquet.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio felis, aliquam sed nisi eu, eleifend pulvinar ipsum. Donec eu mattis enim, ut ullamcorper sapien. Donec imperdiet interdum purus, nec malesuada diam varius quis. Cras feugiat ex libero, at feugiat est iaculis vitae. Morbi at risus orci. Proin eu erat vitae velit condimentum vulputate. Nunc id eros sodales, varius dolor sed, porta orci. Morbi posuere interdum turpis, eget aliquet felis pellentesque quis. Ut viverra diam eget hendrerit aliquet.


