# transformer.number-to-integer

[Transformer](http://github.com/jbenet/transformer) conversion: number to integer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '134321.432' | transform number integer
134321
```

### Javascript

```js
var transformer = require('dat-transformer');
var tNumberToInteger = transformer('number', 'integer');
tNumberToInteger([134321.432]); //   [134321]
```
