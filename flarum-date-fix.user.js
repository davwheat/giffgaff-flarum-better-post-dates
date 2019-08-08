// ==UserScript==
// @name           giffgaff Flarum date fixer
// @description    Some people don't like the 47 minutes ago, 2 hours ago, a day ago styling of dates on the new forum, so I made something to fix that!
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-better-post-dates)
// @namespace      https://github.com/davwheat/giffgaff-flarum-better-post-dates
// @version        1.3.2
// @icon           https://github.com/davwheat/giffgaff-flarum-better-post-dates/blob/master/icon.png?raw=true
// @match          *://preview.community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// @require        https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js
// ==/UserScript==

(function($) {
    "use strict";

    setTimeout(() => {
        let twoDaysAgoDate = new Date();
        twoDaysAgoDate.setDate(new Date().getDate() - 1);
        twoDaysAgoDate.setHours(0);
        twoDaysAgoDate.setMinutes(0);
        twoDaysAgoDate.setMilliseconds(0);

        $(".Post .PostMeta time[data-humantime=true]").each((_, el) => {
            let $te = $(el);
            let dt = new Date($te.attr("datetime"));

            if (dt > twoDaysAgoDate) {
                let today = new Date();
                today.setHours(0);
                today.setMinutes(0);
                today.setMilliseconds(0);
                $te.html(
                    `${dt > today ? "Today" : "Yesterday"} at ${dt.toLocaleTimeString(
                        "en-GB",
                        { hour: "2-digit", minute: "2-digit" }
                    )}`
                );
            }
        });
    }, 500);
}.bind(this)(jQuery));

jQuery.noConflict();
