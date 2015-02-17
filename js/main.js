	var inspirebutton = document.getElementById('inspire');	
	var quotehere = document.getElementById('quotehere'); 	
	



	var quoteDrop = function() {
		quotehere.innerHTML = 'Youll Never finish this in time';	
		console.log('wat');	
	};
	inspirebutton.onclick = quoteDrop; 



//curl -X POST --data-urlencode 'payload={"text": "This is posted to <#susannabottest> and comes from *Mybot*.", "channel": "#susannabottest", "username": "Mybot", "icon_emoji": ":monkey_face:"}' https://slack.com/api/chat.postMessage\?token\=xoxp-3520991751-3641328250-3752113976-71ae8c\&channel\=%23susannabottest\&text\=Hi%20there\!\&username\=SusannaBot\&icon_emoji\=%3Amonkey_face%3A\&pretty\=1

//$.post('https://slack.com/api/chat.postMessage\?token\=xoxp-3520991751-3641328250-3752113976-71ae8c\&channel\=%23susannabottest\&text\=Hi%20there\!\&username\=SusannaBot\&icon_emoji\=%3Amonkey_face%3A\&pretty\=1');
//$.post()







