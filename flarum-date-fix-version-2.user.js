// ==UserScript==
// @name           giffgaff Flarum date fixer Version #2
// @description    Some people don't like the 47 minutes ago, 2 hours ago, a day ago styling of dates on the new forum, so I made something to fix that!
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-better-post-dates)
// @namespace      https://github.com/davwheat/giffgaff-flarum-better-post-dates
// @version        3.1.0
// @icon           https://github.com/davwheat/giffgaff-flarum-better-post-dates/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

// jquery.initialize.min.js
(function($){"use strict";var combinators=[" ",">","+","~"];var fraternisers=["+","~"];var complexTypes=["ATTR","PSEUDO","ID","CLASS"];function grok(msobserver){if(!$.find.tokenize){msobserver.isCombinatorial=true;msobserver.isFraternal=true;msobserver.isComplex=true;return}msobserver.isCombinatorial=false;msobserver.isFraternal=false;msobserver.isComplex=false;var token=$.find.tokenize(msobserver.selector);for(var i=0;i<token.length;i++){for(var j=0;j<token[i].length;j++){if(combinators.indexOf(token[i][j].type)!=-1)msobserver.isCombinatorial=true;if(fraternisers.indexOf(token[i][j].type)!=-1)msobserver.isFraternal=true;if(complexTypes.indexOf(token[i][j].type)!=-1)msobserver.isComplex=true}}}var MutationSelectorObserver=function(selector,callback,options){this.selector=selector.trim();this.callback=callback;this.options=options;grok(this)};var msobservers=[];msobservers.initialize=function(selector,callback,options){var seen=[];var callbackOnce=function(){if(seen.indexOf(this)==-1){seen.push(this);$(this).each(callback)}};$(options.target).find(selector).each(callbackOnce);var msobserver=new MutationSelectorObserver(selector,callbackOnce,options);this.push(msobserver);var observer=new MutationObserver(function(mutations){var matches=[];for(var m=0;m<mutations.length;m++){if(mutations[m].type=="attributes"){if(mutations[m].target.matches(msobserver.selector))matches.push(mutations[m].target);if(msobserver.isFraternal)matches.push.apply(matches,mutations[m].target.parentElement.querySelectorAll(msobserver.selector));else matches.push.apply(matches,mutations[m].target.querySelectorAll(msobserver.selector))}if(mutations[m].type=="childList"){for(var n=0;n<mutations[m].addedNodes.length;n++){if(!(mutations[m].addedNodes[n]instanceof Element))continue;if(mutations[m].addedNodes[n].matches(msobserver.selector))matches.push(mutations[m].addedNodes[n]);if(msobserver.isFraternal)matches.push.apply(matches,mutations[m].addedNodes[n].parentElement.querySelectorAll(msobserver.selector));else matches.push.apply(matches,mutations[m].addedNodes[n].querySelectorAll(msobserver.selector))}}}for(var i=0;i<matches.length;i++)$(matches[i]).each(msobserver.callback)});var defaultObeserverOpts={childList:true,subtree:true,attributes:msobserver.isComplex};observer.observe(options.target,options.observer||defaultObeserverOpts);return observer};$.fn.initialize=function(callback,options){return msobservers.initialize(this.selector,callback,$.extend({},$.initialize.defaults,options))};$.initialize=function(selector,callback,options){return msobservers.initialize(selector,callback,$.extend({},$.initialize.defaults,options))};$.initialize.defaults={target:document.documentElement,observer:null}})(jQuery);

$.initialize(".Post .PostMeta time[data-humantime=true]", function()  {
    let twoDaysAgoDate = new Date();
    twoDaysAgoDate.setDate(new Date().getDate() - 1);
    
    let $te = $(this);
    let dt = new Date($te.attr("datetime"));

    if (dt > twoDaysAgoDate) {
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setMilliseconds(0);
        let yesterday = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setMilliseconds(0);
        $te.html(
            `${dt > today ? "Today" : dt > yesterday ? "Yesterday" : "2 days ago"} at ${dt.toLocaleTimeString(
                "en-GB",
                { hour: "2-digit", minute: "2-digit" }
            )}`
        );
        
        console.log("Applied better date.")
    }
});
