# Lazy Loading In Websom

Deferring your images is essential to achieving a reasonable score in Page Speed Insights. Without it you may be stuck loading images that aren't even visible yet, eating up bandwidth and delaying the [largest contentful paint](https://web.dev/lcp/).

In days past you'd usually need to use a third-party tool which would hook into the scroll event and wait until the user reached a certain threshold to load any images. However, we now have a super easy attribute which does this for us **natively**.

Enter `loading="lazy"`. This attribute will tell [supported browsers](https://caniuse.com/loading-lazy-attr) to wait until an image is within the viewport before loading it, giving us a fast clean way to speed up our sites!


```html

<img src="cat.jpg" loading="lazy">

```

It's that simple! See [web.dev lazy loading](https://web.dev/browser-level-image-lazy-loading/) for more info.