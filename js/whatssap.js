(function () {
    var options = {
        whatsapp: "+55(17)988414120",  
        call_to_action: "Fale Conosco !", 
        position: "right", 
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})(); 