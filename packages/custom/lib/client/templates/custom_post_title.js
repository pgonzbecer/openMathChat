// important: the helper must be defined on the *old* "post_title" template

Template.post_title.helpers({
    update: function () {
        //mathJaxUpdate(); 
        //console.log(this.htmlBody);
        // Typeset just the body 
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.htmlBody]);
    }
});

// End of File
