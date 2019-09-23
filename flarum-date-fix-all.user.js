// ==UserScript==
// @name           giffgaff Flarum date fixer
// @description    Some people don't like the 47 minutes ago, 2 hours ago, a day ago styling of dates on the new forum, so I made something to fix that!
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-better-post-dates)
// @namespace      https://github.com/davwheat/giffgaff-flarum-better-post-dates
// @version        1.7.1
// @icon           https://github.com/davwheat/giffgaff-flarum-better-post-dates/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

setInterval(() => {
    $(".Post .PostMeta time[data-humantime=true]").each((_, el) => {
        let d = new Date($te.attr("datetime"));

        $(el).html(`${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`);
    });
    
    console.log("Reapplied 'fixed' dates. (Prevents Flarum overwriting the times when the number of minutes/seconds changes)");
}, 4000);

$(() => {
    $(".Post .PostMeta time[data-humantime=true]").each((_, el) => {
        let d = new Date($te.attr("datetime"));

        $(el).html(`${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`);
    });
    
    console.log("Applied 'fixed' dates.");
});
