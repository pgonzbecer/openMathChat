

Template.menuItems.replace("viewsMenu", [
  {
    route:  "posts_top",
    label:  "top",
    description:  "most_popular_posts"
  },
  {
    route: "posts_new",
    label:  "new",
    description:  "newest_posts"
  }
]);

Posts.schema.closed:  {
  type: Boolean,
  optional: false
}

Posts.view.add("closed", function(args)
{
  return {
    options: {sort: {sticky: -1, closed: true}}
  }
})

// End of File
