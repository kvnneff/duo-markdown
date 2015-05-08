
# duo-markdown

  require markdown files as html strings within [duo](https://github.com/duojs/duo).

## Installation

```
npm install duo-markdown
```

## Example

```js
yield Duo(root)
  .use(markdown())
  .run()
```

in your markdown file:

```md
# Hello World!
```

Then in your javascript file:

```js
var html = require('./template.md'); //=> '<h1>Hello World!</h1>'

```

## API

### markdown(opts)

Initialize the markdown transform with `opts` which are passed into [markdown-it](https://markdown-it.github.io/markdown-it/).

## Test

```
npm install
make test
```

## License

(The MIT License)

Copyright (c) 2015 river grimm &lt;river.grimm@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
