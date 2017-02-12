/*!
 * Scroll a list of DIVs inside of a DIV.
 * https://github.com/aoloe/jquery-verticalscroll
 *
 * Copyright Ale Rimoldi
 * Released under the MIT license.
 *
 * Date: 11.2.2017
 */

(function ($) {

    $.fn.verticalScroll = function() {
        function scroll($elem) {
          var padding = 10;

          if (!$elem.data("running")) {
            setTimeout(function() {
              scroll($elem)
            }, 2400);
            return;
          }

          //  create a sorted list of sub divs
          var items = [];
          $('div', $elem).each(function(j, divdiv) {
            // if it's above the top, move the item to the bottom
            var innerHeight = $elem.data("innerHeight");
            var top = parseInt($(divdiv).css("top"));
            if(top < 0) {
                top =  innerHeight - $(divdiv).height() - padding;
                $(divdiv).css("top", top);
            }
            items.push(divdiv);
          });
          items.sort(function(a, b) {return $(a).css("top") < $(b).css("top");});

          // shift each div by the height of the first (at the css top) item
          shift = parseInt($(items[0]).css("height"));
          $(items).each(function(key, divdiv) {
            var top = parseInt($(divdiv).css("top")) - shift - padding;
            if (top > innerHeight) {
              $(divdiv).css("top", top); // don't animate if it's invisible
            } else {
              $(divdiv).animate({ top: top }, 25 * shift);
            }
          });

          // when all animations are done, start the next round
          $('div', $elem).promise().done(function() {
            scroll($elem);
          });
        }

        $(this).each(function (i, div) {
          var padding = 10;
          var innerHeight = padding / 2;
          $(div).data("running", true);
          // TODO: maybe try to work on a fixed list of items instead of querying the dom
          // console.log('items', window.verticalScrol.items);
          // window.verticalScroll.items = [];
          $('div', div).each(function(j, divdiv) {
            $(this).css("top", innerHeight);
            innerHeight += $(this).height() + padding;
          });
          $(div).data("innerHeight", innerHeight);
          scroll($(this));

          $(div).mouseenter(function($elem){
              $($elem.currentTarget).data("running", false);
          });
              
          $(div).mouseleave(function($elem){
              $($elem.currentTarget).data("running", true);
          });
        });

        return this;
    };

}(jQuery));
