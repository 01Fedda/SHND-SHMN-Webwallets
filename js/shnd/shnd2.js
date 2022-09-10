//Fedda

//Account Info and backup download
function yurinfo() {
	var wlladdr = document.getElementById("adr").value;
	//var wiffy = document.getElementById("wif").innerHTML;
	var wiffy = document.getElementById("wif").value;
	
	var filename = "SHND Webwallet Account Info.txt";
	
	var blob = new Blob(['\r\n' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"Please Do Not Lose Your Account Info!"' + '\r\n\r\n\r\n\r\n', "\xa0Your Wallet Address:" + "  " + wlladdr + '\r\n\r\n', "\xa0\xa0\xa0\xa0Your Private Key:" + "  " + wiffy], {type: "text/plain;charset=utf-8"});
	saveAs(blob, filename);
}

//Account Info and backup download as pdf file	
/*function yurinfo() {
	var mssge = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"Please Do Not Lose Your Account Info!"';
	var wlladdr = " Your Wallet Address: \xa0";
	var wiffy = " \xa0\xa0\xa0\xa0\xa0Your Private Key: \xa0";
	var newlin = "<br />";
	
	const element = newlin + mssge + newlin + newlin + newlin + newlin + wlladdr + document.getElementById('adr').value + newlin + newlin + wiffy + document.getElementById("wif").innerHTML;

	html2pdf().from(element).save();
}*/

//KeyCode generator 50 chars
/*function genkycode() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"+'"';
	var string_length = 50;
	var randomstring = '';
	
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}	
	document.getElementById("keyCode").value = randomstring;
}*/

//Passphrase generator from 200 - 700 chars
function genPassphrase(min, max) {
	num = Math.ceil(Math.random()*500)+200;
	var texty = "";
	var difchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"+'"'+' '+'\xa0\xa0'+'\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0\xa0';

	for (var i = 0; i < num; i++)
		texty += difchar.charAt(Math.floor(Math.random() * difchar.length));

	document.getElementById("passphrase2").value = texty;
}

//KeyCode generator from 300 - 1000 chars
/*function genkycode(min, max) {
	num = Math.ceil(Math.random()*700)+300;
	var texty = "";
	var difchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"+'"';

	for (var i = 0; i < num; i++)
		texty += difchar.charAt(Math.floor(Math.random() * difchar.length));

	document.getElementById("keyCode").value = texty;
}*/

function genkycode(min, max) {
	num = Math.ceil(Math.random()*700)+300;
	numHid = Math.ceil(Math.random()*1000)+500;
	var texty = "";
	var textyHid = "";
	var difchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~诶比西迪伊艾弗吉艾尺艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾丝提伊吾维豆贝尔维艾克斯吾艾贼德ēàúāí"+'"';
	var difcharHid = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~诶比西迪伊弗吉艾尺艾杰开艾勒马艾娜哦屁吉吾艾儿艾丝提伊吾豆贝尔维艾克斯吾艾贼德ēàúāí"+'"'+' '+'\xa0\xa0'+'\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0\xa0';
	var ranwrds = ['Rock', 'When we think of quotes', 'we don\'t usually', 'think about', 'one word quotes', 'but', 'one word quotes can often be the perfect', 'quote due', 'toes', 'its', 'brevity and pinpoint accuracy. The single word', 'DatabasE', 'should make you think', 'and immediately bring an', 'image to mind. This is the reason we created this one', 'word quotes generator.', 'You might be looking', 'for the perfect 1 word to quote and', 'this generator may be', 'the right tool to help you accomplish that.', 'Even better', 'it\'s simple to', 'cartoon', 'use and has', 'hundreds', 'of one word', 'quotes', 'in its', 'database', 'for you to discover.', 'When you', 'first', 'come to this page you\'ll have a random one word quote displayed. If that happens to be the perfect 1 word quote you were searching for', 'everything is golden. If not, you have the option of clicking to the next one word phrase. The great thing is that you can continue', 'to do this as many times as you need until you find the exact quote you were looking for. Some people flip through them quickly until', 'they find one that just hits them right while others spend some time considering', 'each one word quote before', 'deciding whether', 'or not to move onto the next. These quotes are', 'generated', 'Fedda', 'randomly so you never know exactly what the next quote will be.', 'The truth is that almost any single word could be a quote given the correct context. Many of the one word quotes found in our generator database are sayings that you might hear when someone is describing someone they admire or who is doing well. A lot of people who use this tool do so in order', 'to find the perfect one word quotes they want to post to their social media accounts for the day.', 'It\'s a wonderful way to', 'find good 1 word phrases to post that expresses your feelings and frame of', 'mind for the day.', 'The key to 1 word quotes is that the meaning and what you get out of them is often', 'onomatopoeia', 'dictated by your own perspective and where you happen to be in life when seeing it. The meaning and its impact often comes within each individual', 'and doesn\'t always have a set', 'meaning that\'s', 'the same for', 'wood', 'everyone. You can look at the one word quote and decide for yourself what it means and how it', 'applies to what you\'re currently', 'experiencing, while the person next to you will see the same quote and receive', 'a different impression', 'from it. That\'s one of', 'the best', 'aspects', 'of 1 word quotes. They', 'allow each individual to find the important meaning within them when', 'that person', 'reads them', 'WOod-Stock', 'We hope that you\'ve', 'found this one word quotes tool useful.', 'We are always looking', 'for', 'ways to better our tools', 'and to make them more', 'useful for those who', 'find and use them. If you', 'found generator to be useful', 'we\'d love to hear', 'you on how you used it.', 'Hearing users helps', 'us', 'to', 'make improvements to the tool', 'when', 'we', 'make', 'updates.', 'We\'d also be quite', 'interested hearing any', 'suggestions you might have on ways we can', 'make the one word quotes', 'generator better.', 'Paper', 'Bronze FoR', 'Scissor', 'Wood-Stock', 'Steel'];
	var ranwrdsreslts = ranwrds[Math.floor(Math.random()*ranwrds.length)];
	var ranwrds2 = ['LoVe the World', 'stop pRetendIng', 'The truth is that almost any single word could be a quote given the correct context. Many of the one word quotes found in our generator database are sayings that you', 'might', 'hear when someone is describing', 'someone', 'they admire or who is doing well. A lot of people who use this tool do so in order', 'to find the perfect one word quotes they want to post to their', 'social media', 'accounts for the day.', 'It\'s a wonderful way to', 'find good 1 word phrases to post', 'that expresses', 'your feelings and frame of', 'mind for the day.', 'The key to 1 word quotes is that the meaning', 'apples', 'and what you get out of them is often dictated by your own', 'perspective', 'and where you happen to be in', 'life', 'when seeing it. The meaning and its impact often comes within each individual', 'and doesn\'t always have a set', 'meaning that\'s', 'the same for', 'wood', 'everyone. You can look at the one word quote and decide for yourself what it means and how it', 'If you haVe a DolLar', 'Don\'t hAte people', 'heLP eacH OTHEr'];
	var ranwrdsreslts2 = ranwrds2[Math.floor(Math.random()*ranwrds2.length)];

	for (var i = 0; i < num; i++)
		texty += difchar.charAt(Math.floor(Math.random() * difchar.length));
		
	for (var i = 0; i < numHid; i++)
		textyHid += difcharHid.charAt(Math.floor(Math.random() * difcharHid.length));
	
	// (Hash) Convert to 32bit integer
    function stringToHash(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash2(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 42) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash3(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 98) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash4(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 176) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	async function sha256(message) {
		// encode as UTF-8
		const msgBuffer = new TextEncoder().encode(message);                    

		// hash the message
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

		// convert ArrayBuffer to Array
		const hashArray = Array.from(new Uint8Array(hashBuffer));

		// convert bytes to hex string                  
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}
	
    var encodedString = btoa(ranwrdsreslts + ranwrdsreslts2);
	var mee = [SHA256(SHA256(texty)), 'Fedda', 'Addef'];
	var meereslts = mee[Math.floor(Math.random()*mee.length)];
	var ranString = [ranwrdsreslts2, ranwrdsreslts + ranwrdsreslts2, ranwrdsreslts];
	var ranString2 = ranString[Math.floor(Math.random()*ranString.length)];
	var hashy = [stringToHash4(texty), SHA256(texty) + stringToHash(texty), stringToHash3(texty) + sha256(texty), stringToHash(texty)];
	var hashy2 = hashy[Math.floor(Math.random()*hashy.length)];

	//document.getElementById("keyCode").value = texty;
	document.getElementById("keyCode").value = texty + hashy2 + 'LOL' + encodedString + ranString2 + stringToHash(texty) + sha256(texty) + meereslts + stringToHash2(texty) + SHA256(texty);
	document.getElementById("keyCodeHid").value = ranwrdsreslts + textyHid + ranwrdsreslts2;
}

//Generate new adresses, Pub and Priv keys
function gen_newaddr(min, max) {
	num = Math.ceil(Math.random()*700)+300;
	numHid = Math.ceil(Math.random()*1000)+500;
	var texty = "";
	var textyHid = "";
	var difchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~诶比西迪伊艾弗吉艾尺艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾丝提伊吾维豆贝尔维艾克斯吾艾贼德ēàúāí"+'"';
	var difcharHid = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~诶比西迪伊弗吉艾尺艾杰开艾勒马艾娜哦屁吉吾艾儿艾丝提伊吾豆贝尔维艾克斯吾艾贼德ēàúāí"+'"'+' '+'\xa0\xa0'+'\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0'+'\xa0\xa0\xa0\xa0\xa0';
	var ranwrds = ['Rock', 'When we think of quotes', 'we don\'t usually', 'think about', 'one word quotes', 'but', 'one word quotes can often be the perfect', 'quote due', 'toes', 'its', 'brevity and pinpoint accuracy. The single word', 'DatabasE', 'should make you think', 'and immediately bring an', 'image to mind. This is the reason we created this one', 'word quotes generator.', 'You might be looking', 'for the perfect 1 word to quote and', 'this generator may be', 'the right tool to help you accomplish that.', 'Even better', 'it\'s simple to', 'cartoon', 'use and has', 'hundreds', 'of one word', 'quotes', 'in its', 'database', 'for you to discover.', 'When you', 'first', 'come to this page you\'ll have a random one word quote displayed. If that happens to be the perfect 1 word quote you were searching for', 'everything is golden. If not, you have the option of clicking to the next one word phrase. The great thing is that you can continue', 'to do this as many times as you need until you find the exact quote you were looking for. Some people flip through them quickly until', 'they find one that just hits them right while others spend some time considering', 'each one word quote before', 'deciding whether', 'or not to move onto the next. These quotes are', 'generated', 'Fedda', 'randomly so you never know exactly what the next quote will be.', 'The truth is that almost any single word could be a quote given the correct context. Many of the one word quotes found in our generator database are sayings that you might hear when someone is describing someone they admire or who is doing well. A lot of people who use this tool do so in order', 'to find the perfect one word quotes they want to post to their social media accounts for the day.', 'It\'s a wonderful way to', 'find good 1 word phrases to post that expresses your feelings and frame of', 'mind for the day.', 'The key to 1 word quotes is that the meaning and what you get out of them is often', 'onomatopoeia', 'dictated by your own perspective and where you happen to be in life when seeing it. The meaning and its impact often comes within each individual', 'and doesn\'t always have a set', 'meaning that\'s', 'the same for', 'wood', 'everyone. You can look at the one word quote and decide for yourself what it means and how it', 'applies to what you\'re currently', 'experiencing, while the person next to you will see the same quote and receive', 'a different impression', 'from it. That\'s one of', 'the best', 'aspects', 'of 1 word quotes. They', 'allow each individual to find the important meaning within them when', 'that person', 'reads them', 'WOod-Stock', 'We hope that you\'ve', 'found this one word quotes tool useful.', 'We are always looking', 'for', 'ways to better our tools', 'and to make them more', 'useful for those who', 'find and use them. If you', 'found generator to be useful', 'we\'d love to hear', 'you on how you used it.', 'Hearing users helps', 'us', 'to', 'make improvements to the tool', 'when', 'we', 'make', 'updates.', 'We\'d also be quite', 'interested hearing any', 'suggestions you might have on ways we can', 'make the one word quotes', 'generator better.', 'Paper', 'Bronze FoR', 'Scissor', 'Wood-Stock', 'Steel'];
	var ranwrdsreslts = ranwrds[Math.floor(Math.random()*ranwrds.length)];
	var ranwrds2 = ['LoVe the World', 'stop pRetendIng', 'The truth is that almost any single word could be a quote given the correct context. Many of the one word quotes found in our generator database are sayings that you', 'might', 'hear when someone is describing', 'someone', 'they admire or who is doing well. A lot of people who use this tool do so in order', 'to find the perfect one word quotes they want to post to their', 'social media', 'accounts for the day.', 'It\'s a wonderful way to', 'find good 1 word phrases to post', 'that expresses', 'your feelings and frame of', 'mind for the day.', 'The key to 1 word quotes is that the meaning', 'apples', 'and what you get out of them is often dictated by your own', 'perspective', 'and where you happen to be in', 'life', 'when seeing it. The meaning and its impact often comes within each individual', 'and doesn\'t always have a set', 'meaning that\'s', 'the same for', 'wood', 'everyone. You can look at the one word quote and decide for yourself what it means and how it', 'If you haVe a DolLar', 'Don\'t hAte people', 'heLP eacH OTHEr'];
	var ranwrdsreslts2 = ranwrds2[Math.floor(Math.random()*ranwrds2.length)];

	for (var i = 0; i < num; i++)
		texty += difchar.charAt(Math.floor(Math.random() * difchar.length));
		
	for (var i = 0; i < numHid; i++)
		textyHid += difcharHid.charAt(Math.floor(Math.random() * difcharHid.length));
	
	// (Hash) Convert to 32bit integer
    function stringToHash(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash2(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 42) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash3(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 98) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	function stringToHash4(string) {
                  
		var hash = 0;
                  
        if (string.length == 0) return hash;
                  
        for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 176) - hash) + char;
            hash = hash & hash;
        }
                  
        return hash;
    }
	
	async function sha256(message) {
		// encode as UTF-8
		const msgBuffer = new TextEncoder().encode(message);                    

		// hash the message
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

		// convert ArrayBuffer to Array
		const hashArray = Array.from(new Uint8Array(hashBuffer));

		// convert bytes to hex string                  
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}
	
    var encodedString = btoa(ranwrdsreslts + ranwrdsreslts2);
	var mee = [SHA256(SHA256(texty)), 'Fedda', 'Addef'];
	var meereslts = mee[Math.floor(Math.random()*mee.length)];
	var ranString = [ranwrdsreslts2, ranwrdsreslts + ranwrdsreslts2, ranwrdsreslts];
	var ranString2 = ranString[Math.floor(Math.random()*ranString.length)];
	var hashy = [stringToHash4(texty), SHA256(texty) + stringToHash(texty), stringToHash3(texty) + sha256(texty), stringToHash(texty)];
	var hashy2 = hashy[Math.floor(Math.random()*hashy.length)];

	//document.getElementById("keyCode").value = texty;
	document.getElementById("genrateadd").value = texty + hashy2 + 'LOL' + encodedString + ranString2 + stringToHash(texty) + sha256(texty) + meereslts + stringToHash2(texty) + SHA256(texty);
	document.getElementById("genrateaddr").value = ranwrdsreslts + textyHid + ranwrdsreslts2;
	
	var nwpass = js.trim($('genrateadd').value);
	var nwkycode = js.trim($('genrateaddr').value);

	var nwboth = nwpass + nwkycode;
	newkeys = btc.get_newkeys(nwboth);
	
	$('newpubky').value = newkeys.newpubky;
	$('newprivyky').value = newkeys.newprivyky;
	
	$("newpubky").focus();
}

//Forms validation and submit
var shnd = { };

/*shnd.check_entropy = function(pass) {
	var pass = document.getElementById('passphrase').value;

	if(pass.length >= 10) {
		return true;
	}
	
	if(pass.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,}$/)) {
		return true;
	}
};*/

shnd.check_entropy = function(pass) {
	var pass = document.getElementById('passphrase2').value;

	/*if(pass.length >= 200) {
		return true;
	}*/
	
	if(pass.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{200,}$/)) {
		return true;
	}
};

/*shnd.check_entropy1 = function(pass) {
	var pass = document.getElementById('passphrase').value;
	var kycode = document.getElementById('keyCode').value;
	
	if(pass !== kycode) {
		return true;
	}
};*/

shnd.check_entropy1 = function(pass) {
	var pass = document.getElementById('passphrase2').value;
	var kycode = document.getElementById('keyCode').value;
	
	if(pass !== kycode) {
		return true;
	}
};

shnd.check_entropy2 = function(kycode) {
	var kycode = document.getElementById('keyCode').value;
	
	/*if(kycode.length >= 30) {
		return true;
	}*/
	
	/*if(kycode.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{30,}$/)) {
		return true;
	}*/
	
	if(kycode.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{300,}$/)) {
		return true;
	}
};

shnd.check_entropy3 = function(prrivky) {
	var prrivky = document.getElementById('privyky').value;
	
	if(prrivky.length != '') {
		return true;
	}
};

shnd.check_entropy4 = function(prrivky) {
	var prrivky = document.getElementById('privyky').value;
	
	if(prrivky.length == 52 && prrivky.startsWith('V')) {
		return true;
	}
};

//Show/hide priv key
/*function toggler() {
	var lbox = document.getElementById('walletShowKeys2');
	var pbox = document.getElementById('wif');
	
	if(lbox.value == 'Show') {
		lbox.value = 'Hide'
		pbox.show();
	} else {
		lbox.value = 'Show'
		//pbox.hide();
		pbox.style.display = 'none'
	}
}*/

function hoggler() {
	var bbox = document.getElementById('shwanddonshw');
	var cbox = document.getElementById('shwanddonshw2');
	
	if (cbox.style.display === "none") {
		bbox.value = 'Hide Wallet';
		cbox.style.display = "block";
    } else {
		bbox.value = 'Show Wallet';
		cbox.style.display = "none";
    }
}

function toggler() {
	var lbox = document.getElementById('walletShowKeys2');
	var pbox = document.getElementById('wif');
	
	if(pbox.type === "password") {
		lbox.innerHTML = 'Hide';
		pbox.type = 'text';
	} else {
		lbox.innerHTML = 'Show';
		pbox.type = 'password';
	}
}

//SHND icon: show/hide Passphrase, KeyCode and Private Key
/*function pwrd() {
	var x = document.getElementById("passphrase");
	
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}*/

function pwrd123() {
	var x = document.getElementById("passphrase2");
	
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function kwrd() {
	var x = document.getElementById("keyCode");
  
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function prwrd() {
	var x = document.getElementById("privyky");
  
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function newprwrd1() {
	var x = document.getElementById("newprivyky");
  
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

//Copy wallet public address button
function copyaddr() {
	const adre = document.getElementById("adr");
	const cpyaddr = document.getElementById("cpyaddr");

	adre.select();
	document.execCommand('Copy');
}

//Removes characters except numbers and decimals
function removeSpaces(string) {
	return string.split(/[^0-9.]/g).join('');
}

//**********************************************************************************************************************************************************************************************************************************************
