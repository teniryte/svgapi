# svgapi

Access to 200k+ SVG Icons

> [SVG API](https://svgapi.com) wrapper

## Search icons

```js
import { search } from 'svgapi';

const result = await search(domainKey, 'apple', page, limit);

```

## Create instance

```js
import { create } from 'svgapi';

const api = create(domainKey, limit);

const result = await api.search('apple', page, limit);
```

## Result

```js
{
  {
  total: 298,
  term: 'apple',
  page: 1,
  limit: 50,
  count: 50,
  icons: [
    {
      id: '6482',
      slug: 'apple',
      title: 'Apple',
      url: 'https://cdn.svgapi.com/vector/6482/apple.svg',
      svg: '<svg version="1.1">...</svg>'
    },
    // ...
  ],
}
```

## Types

### Result Interface

```js
interface SvgApiResultInterface {
  term: string;
  total: number;
  count: number;
  page: number;
  limit: number;
  icons: SvgApiIconInterface[];
}

```

### Icon interface

```js
interface SvgApiIconInterface {
  id: string;
  slug: string;
  title: string;
  url: string;
  svg?: string;
}
```
