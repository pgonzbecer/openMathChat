

// Variables
var	closedProperty=	{
	propertyName:	"closed",
	propertySchema:	{
		type:	Boolean,
		optional:	false,
		defaultValue:	false
	}
};

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

addToPostSchema.push(closedProperty);

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

// End of File
