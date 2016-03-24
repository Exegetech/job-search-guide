# Gloria's Flower Emporium

*Difficulty: Medium*

| Cohort | Date       |
|--------|------------|
| Nov-14 | 2014-02-06 |

---

__Oh no!__ Gloria's website isn't behaving like it should be!

As you can see in the screenshot below, there appears to be a problem with the grid that we've implemented. Your task is to, without removing or changing any existing code, fix the layout problems so that the two boxes `.col-8` and `.col-4` span accross 100% of the page.

### What it looks like now

![Before](http://i.imgur.com/6yWobav.png)

##### The HTML
```html
<div class="col-12">
  <h1>Gloria's Flower Emporium</h1>
</div>
<div class="col-8">
  <h2>This is a Header</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget est at libero scelerisque efficitur. In volutpat interdum mollis. Ut et ornare est, et tincidunt dui. Nunc dignissim quis nunc et condimentum. Aliquam quis molestie dolor, ut volutpat lorem. Donec gravida augue vitae tempor semper. Donec non eros laoreet, consectetur quam sed, laoreet libero. Etiam feugiat ligula erat. Donec vitae rutrum metus, dictum mattis orci. Nulla sit amet tincidunt odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ut urna quis nunc bibendum luctus. Vivamus nibh tellus, aliquam id nulla at, luctus convallis quam. Curabitur lacinia porttitor nisl quis congue. Vestibulum ac nunc vel erat scelerisque ultricies. Donec ultricies imperdiet nulla, et consequat ante sollicitudin vitae.
  </p>
  <p>
    Vivamus nec lectus sit amet turpis auctor volutpat quis tristique metus. Curabitur diam ipsum, varius sit amet faucibus id, finibus sed nibh. Maecenas malesuada mauris dignissim lectus posuere semper. Vestibulum finibus iaculis metus, ullamcorper mattis sapien. Nullam vitae vehicula metus, ac sollicitudin libero. Etiam lobortis, tellus a vulputate euismod, mauris nisl sodales nulla, quis ornare nisi tellus ac ex. Duis in sapien id lacus luctus molestie nec vel dui. Praesent eleifend varius tincidunt. Donec sit amet pharetra neque, sit amet iaculis mi. Ut vel porttitor est.
  </p>
 </p>
</div>
<div class="col-4">
  <h3>This is a Sidebar</h3>
  <p>
    Fusce condimentum risus ut diam dictum, a iaculis ligula molestie. Etiam tortor velit, mollis sed velit consectetur, fermentum tempor purus. Maecenas sagittis, lorem vel rutrum tempus, erat ligula cursus massa, sollicitudin mollis odio ligula vel nunc. Sed maximus dui magna, porta facilisis ipsum pellentesque a. Maecenas auctor, nibh in hendrerit facilisis, nibh mi sollicitudin massa, et egestas lorem mauris vel diam. Donec faucibus ante diam, a finibus sem vehicula in. Nulla facilisi. Nam non felis sit amet augue tincidunt pharetra. Mauris accumsan consectetur tempor. Nam eget ipsum ante. Quisque eu eros a diam pulvinar dignissim quis sed ipsum. Vestibulum molestie dui vel purus elementum, sit amet faucibus risus tristique. Quisque tincidunt consequat metus vel elementum. Pellentesque dignissim mattis cursus.
  </p>
</div>
```

##### The CSS
```css
body {
  font-family: sans-serif;
  color: #333333;
  line-height: 1.4;
}

.col-12 {
  width: 100%;
  background: #CFCFC4;
  padding: 1% 2%;
}

.col-8 {
  width: 66.666666667%;
  background: #B19CD9;
  padding: 1% 2%;
}

.col-4 {
  width: 33.333333333%;
  background: #AEC6CF;
  padding: 1% 2%;
}
```

### What it's supposed to look like

![After](http://i.imgur.com/CSLREV5.png)

Good luck!