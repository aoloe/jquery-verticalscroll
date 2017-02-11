# JQuery Vertical Scroll

A small and simple JQuery plugin for vertical scrolling a list of DIVs.

This plugin is based on this answer on Stackoverflow: <https://stackoverflow.com/a/13222226/5239250>

## Features:

- Multiple scrolling DIVs on a page.
- Stops on mouseover.
- Elements can have different height.

## Usage

- Include JQuery and the verticalScroll plugin in your html file.
- Create a DIV of DIVs:

  ~~~.html
  <div class="verticalScroll">
    <div>1 Lorem ipsum dolor sit</div>
    <div>2 Lorem ipsum dolor sit</div>
    <div>3 Lorem ipsum dolor sit</div>
    <div>4 Lorem ipsum dolor sit</div>
  </div>
  ~~~
- Define the outer DIV as a fixed sized box around the inner DIVs:

  ~~~.css
  .verticalScroll {
    position: relative;
    height: 180px;
    overflow: hidden;
  }

  .verticalScroll > div {
    position:absolute;
  }
  ~~~

- attach the plugin to the DIV:

  ~~~.js
  $(document).ready(function() {
      $(".verticalScroll").verticalScroll();
  });
  ~~~

## Alternatives

If you need more features, there are better, full featured, JQuery plugins:

- <http://risq.github.io/jquery-advanced-news-ticker/index.html>
