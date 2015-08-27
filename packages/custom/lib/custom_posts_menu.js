
console.log(Posts.controllers);

Telescope.menuItems.viewsMenu=	[
	{
		route:	"posts_top",
		label:	"top",
		description:	"most_popular_posts"
	},
	{
		route:	"posts_new",
		label:	"new",
		description:	"newest_posts"
	},
	{
		route:	"posts_closed",
		label:	"closed",
		description:	"closed_posts"
	}
];

Posts.schema.closed=	{
	type:	Boolean,
	optional:	false,
	defaultValue:	false,
	editableBy:	["admin"]
};

Posts.views.add("closed", function(args)
{
	return {
		options:	{sort:	{sticky: -1, closed: true}}
	};
});

Posts.controllers.closed=	Posts.controllers.list.extend({
	view:	"closed"
});

Meteor.startup(function()
{
	Router.route("/closed/:limit?",	{
		name:	"posts_closed",
		controller:	Posts.controllers.closed
	});
});

/*
Template.menuItems.add("viewsMenu", [
  {
    route:  "posts_top",
    label:  "top",
    description:  "most_popular_posts"
  },
  {
    route: "posts_new",
    label:  "new",
    description:  "newest_posts"
  },
  {
    route: "posts_closed",
    label: "closed",
    description:  "closed_posts"
  }
]);
/*
Posts.schema.closed=  {
  type: Boolean,
  optional: false
};

Posts.attachSchema(Posts.schema);

Posts.view.add("closed", function(args)
{
  return {
    options: {sort: {sticky: -1, closed: true}}
  }
});*/

// End of File
