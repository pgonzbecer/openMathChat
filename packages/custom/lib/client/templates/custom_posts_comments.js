

Template.comment_submit.helpers({
	closePost:	function()	{
		return "console.log(Posts.current());";
	},
	update:	function()	{
		
	}
});

Blaze._globalHelpers["canComment"]=	function()
{
	return (Users.can.comment(Meteor.user()) || Posts.current().closed);
};

// End of File