# Flarum Better Post Dates

This Chrome extension changes how dates are shown on giffgaff's new Flarum forum.

Some people don't like the `47 minutes ago`, `2 hours ago`, `a day ago` dates on the new forum, so I made something to fix that!

Dates within the past two days (date based, not 48 hours) will have their date text replaced to something nicer and accurate. See the example table below.

## Installation

### Choose a version

There are two different versions of the script: **original** and **alternative**.

**Alternative** shows ALL timestamps in `DD/MM/YYYY at HH:MM:SS`.

**Original** only changes timestamps from the past two days, as shown [below](#Example).

### Instructions

1. Install **TamperMonkey** from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) or the [Firefox Addons Store](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)
2. Choose your version: [original](https://github.com/davwheat/giffgaff-flarum-better-post-dates/raw/master/flarum-date-fix.user.js), [alternative](https://github.com/davwheat/giffgaff-flarum-better-post-dates/raw/master/flarum-date-fix-all.user.js).
3. Click **Install**
4. Enjoy better post dates

## Also see

* [Flarum Dark Mode](https://github.com/davwheat/giffgaff-flarum-dark-mode)

## Original Example

Current date: 08/08/2019 23:00 (DD/MM/YYYY)

| Post Date | Original | Replaced |
| :-------: | :------- | :------- |
| 08/08/2019 22:50| 10 minutes ago | Today at 22:50 |
| 08/08/2019 18:30 | 5 hours ago | Today at 18:30 |
| 07/08/2019 06:30 | 1 day ago | Yesterday at 06:30 |
| 06/08/2019 06:30 | 2 days ago | UNCHANGED |
