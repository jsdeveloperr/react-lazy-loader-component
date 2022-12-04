<h1 align="center">
  <br>
    <img src="https://github.com/jsdeveloperr/react-lazyload-component/blob/master/example/public/assets/logo-lazy.gif" alt="logo" width="300">
  <br><br>
  React Lazy Load Component
  <br>
  <br>
</h1>

<div align="center">

[![npm](https://img.shields.io/npm/v/react-lazyload-component?style=flat-square)](https://www.npmjs.com/package/react-lazyload-component)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-lazyload-component?style=flat-square)
![npm](https://img.shields.io/npm/dt/react-lazyload-component?style=flat-square)
![GitHub license](https://img.shields.io/npm/l/react-lazyload-component?style=flat-square)

</div>

## :books: Introduction

Fast 1.15KB, Gzip 0.63KB, React Component to lazy load and other components/elements and use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## :rocket: Example

Check our 👉 [example](https://codesandbox.io/p/sandbox/react-lazy-load-component-m5mkpv)

## :package: Installation

```bash
# install with npm
npm install react-lazyload-component
# install with yarn
yarn add react-lazyload-component
# install with pnpm
pnpm add react-lazyload-component
```

## Example Repo

- [In Repo](https://github.com/jsdeveloperr/react-lazyload-component/blob/master/example)

## Examples

### Basic Usage

```tsx
import React from "react";
import LazyLoad from "react-lazyload-component";

const MyComponent = () => (
  <LazyLoad>
    <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </LazyLoad>
);
```

### Loading the image 100px prior to scroll

```tsx
const MyComponent = () => (
  <LazyLoad rootMargin={100}>
    <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </LazyLoad>
);
```

### Loading image only when 15% of it is in the viewport.

```tsx
const MyComponent = () => (
  <LazyLoad rootMargin={100} threshold={0.15}>
    <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </LazyLoad>
);
```

### Performing a side effect once your image is loaded

```tsx
const MyComponent = () => (
  <LazyLoad rootMargin={400} threshold={0.15} freezeOnceVisible={true}>
    <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </LazyLoad>
);
```

### Suspense and Lazy import

```tsx
import React, { Suspense } from "react";
const LazyLoad = React.lazy(() => import("react-lazyload-component"));

const MyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyLoad rootMargin={100}>
      <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </LazyLoad>
  </Suspense>
);
```

## Props

#### tag

Type: `ComponentType | keyof JSX.IntrinsicElements`

The `tag` option allows you to set the html element's tag even when it has no content.

#### rootMargin

Type: `String` Default: `0%`

The `rootMargin` option allows you to specify how far below, above, to the left, and to the right of the viewport you want to _begin_ displaying your content. If you specify `0`, your content will be displayed as soon as it is visible in the viewport, if you want to load _100px_ below or above the viewport, use `100`.

#### threshold

Type: `number | number[]` Default: `0`

This `threshold` option allows you to specify how much of the element must be shown on the screen prior to loading. This requires a _width_ and _height_ to be set on the `<LazyLoad>` component in order for the browser to calcualte the viewable area.

#### className

Type: `String`

The `className` option allows you to set the element's className even when it has no content.

#### style

Type: `CSSProperties`

The `style` option allows you to set the element's style even when it has no content.

#### freezeOnceVisible

Type `Boolean`

A Boolean to execute when the content appears on the screen.

## Building LazyLoad

```
pnpm build
```

## Running examples

```
cd example
pnpm dev
```

## 📄 License

<div calign="center">
    🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @ReactLazyLoadComponent contributors
</div>
