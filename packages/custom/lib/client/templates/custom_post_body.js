

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
		var	url=	"";
		
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
			url=	"https://rawgit.com/johnRedden/OpenGraph/master/index.html?readType=iframe&"+(text.substring(sp, ep).replace(/\$/g, ""));
			/*
				Text here does a couple of things:
					-First it tries to replace the plot(*) and it gets out of the paragraph.
					-Second it tries to center the MathJax
					-Third it tries to setup an iframe that is used by opengraphingcalculator, although I don't know if it is better than rendering it by jsxgraph
					-Lastly it gives you a link to open it up in opengraphingcalculator
			*/
			text=	text.replace(text.substring(sp-5, ep+1), "</p><div class='graphText' style='align-text: center'>"+
				((text.substring(sp, ep).indexOf("$")!== -1) ? text.substring(sp, ep) : "$ "+text.substring(sp, ep)+" $")+
				"</div>"+
				"<iframe src='"+url+"' width='100%' height='200px' scrolling='no'></iframe><br/><button style='width: 100%;max-width:100%;' onclick='"+
				"location.assign(\""+url.replace("readType=iframe", "readType=text")+"\");'>Open in OpenGraphingCalculator.com</button><p>");
		}
		
		this.htmlBody=	text;
	}
});