# Flarum Better Post Dates

This TamperMonkey user script changes how dates are shown on giffgaff's new Flarum forum.

Some people don't like the `47 minutes ago`, `2 hours ago`, `a day ago` dates on the new forum, so I made something to fix that!

Dates within the past two days (date based, not 48 hours) will have their date text replaced to something nicer and accurate. See the example table below.

## Installation

### Choose a version

There are two different versions of the script: **Version #1** and **Version #2**.

Version #1 shows *ALL* timestamps in `DD/MM/YYYY at HH:MM:SS`.

Version #2 only changes timestamps from the past two days into the above format. Dates longer than 2 days ago will be "fuzzy".

**Examples below.**

### Instructions

1. Install **TamperMonkey** from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) or the [Firefox Addons Store](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/) (or any other browser extension store).
2. Choose your version: [Version #1](https://github.com/davwheat/giffgaff-flarum-better-post-dates/raw/master/flarum-date-fix-version-1.user.js), [Version #2](https://github.com/davwheat/giffgaff-flarum-better-post-dates/raw/master/flarum-date-fix-version-2.user.js).
3. Click **Install**
4. Enjoy better post dates

## Also see

* [Help and Support auto refresh](https://github.com/davwheat/giffgaff-flarum-auto-refresh#readme)
* [Flarum Infinite Scrolling](https://github.com/davwheat/giffgaff-flarum-infinite-scroll#readme)

## Examples

Current date: 08/08/2019 23:00 (DD/MM/YYYY)

| Post Date | Original | Version #1 | Version #2 |
| :-------: | :------- | :------- | :------- |
| 08/08/2019 22:50| 10 minutes ago | 08/08/2019 @ 22:50 | Today at 22:50 |
| 08/08/2019 18:30 | 5 hours ago | 08/08/2019 @ 18:30 | Today at 18:30 |
| 07/08/2019 06:30 | 1 day ago | 07/08/2019 @ 06:30 | Yesterday at 06:30 |
| 06/08/2019 06:30 | 2 days ago | 06/08/2019 @ 06:30 | UNCHANGED |
