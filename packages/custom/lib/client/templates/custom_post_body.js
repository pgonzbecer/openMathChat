

Template.post_body.helpers({
	update:	function()	{
		// Variables
		var	text=	this.htmlBody;
		var	index=	-1;
		var	nested=	0;
		var	lp=	-1;
		var	rp=	-1;
		var	sp=	-1;
		var	ep=	-1;
		
		while(true)
		{
			index=	text.indexOf("plot(", index+1);
			if(index=== -1)
				break;
			nested=	0;
			sp=	index+5;
			do
			{
				lp=	text.indexOf("(", index+1);
				rp=	text.indexOf(")", index+1);
				if(lp!== -1 && lp< rp)
				{
					index=	lp;
					nested++;
				}
				else if(rp!== -1 && (lp=== -1 || rp< lp))
				{
					index=	rp;
					nested--;
				}
			}while(nested> 0 && rp!== -1);
			ep=	rp;
			text=	text.replace(text.substring(sp-5, ep+1), "</p><div class='plot'>"+text.substring(sp, ep)+"</div><p>");
		}
		
		this.htmlBody=	text;
	}
});