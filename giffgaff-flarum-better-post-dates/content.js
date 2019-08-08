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