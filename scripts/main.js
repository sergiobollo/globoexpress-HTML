$("#tab-bar a").bind('click', function(e) {
    e.preventDefault();
    console.log($(e.target.hash))
    var nextPage = $(e.target.hash);
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");
    $("#tab-bar").attr("className", e.target.hash.slice(1));
});