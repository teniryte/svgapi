[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/teniryte/svgapi/graphs/commit-activity) [![Maintaner](https://img.shields.io/badge/Maintainer-teniryte-blue)](https://img.shields.io/badge/maintainer-teniryte-blue) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://svgapi.sencort.com/) [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/) [![GitHub license](https://img.shields.io/github/license/teniryte/svgapi.svg)](https://github.com/teniryte/svgapi/blob/master/LICENSE) [![Profile views](https://gpvc.arturio.dev/teniryte)](https://gpvc.arturio.dev/teniryte) [![GitHub contributors](https://img.shields.io/github/contributors/teniryte/svgapi.svg)](https://GitHub.com/teniryte/svgapi/graphs/contributors/) [![GitHub issues](https://img.shields.io/github/issues/teniryte/svgapi.svg)](https://GitHub.com/teniryte/svgapi/issues/)

[![GitHub forks](https://img.shields.io/github/forks/teniryte/svgapi.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/teniryte/svgapi/network/) [![GitHub stars](https://img.shields.io/github/stars/teniryte/svgapi.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/teniryte/svgapi/stargazers/) [![GitHub watchers](https://img.shields.io/github/watchers/teniryte/svgapi.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/teniryte/svgapi/watchers/) [![GitHub followers](https://img.shields.io/github/followers/teniryte.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/teniryte?tab=followers)

# svgapi

Access to 200k+ SVG Icons

> [SVG API](https://svgapi.com) wrapper

## Installation

```sh
yarn add svgapi
```

or

```sh
npm install --save svgapi
```

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
