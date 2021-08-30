/*
=====Tip:Sorry, I can't speak English=====
=====WorkName:userbr(User behavior record)=====
=====Introduce:Record user operation data to facilitate data analyst research=====
=====Author:chenchen=====
=====CreateTime:2021/08/30=====
=====Agreement:MIT=====
=====AuthorTips:If you make a profit through this plug-in, I hope you can give the author some reward support. Thank you.
=====
*/
var userbr_list = new Array();
for (let i = 0; i < document.getElementsByClassName('userbr').length; i++) {

	document.getElementsByClassName('userbr')[i].addEventListener('mouseout', function() {
		// ==Commissioning use===
		console.log('normal')
		// ======================
		// create_DOM_object
		var obj = new Array();
		// DOM_tag
		obj.tag = document.getElementsByClassName('userbr')[i].nodeName;
		// DOM_index
		obj.index = i;
		// DOM_describe
		obj.describe = document.getElementsByClassName('userbr')[i].getAttribute("data-cc");
		// DOM_click_time
		obj.click_time = Math.round(new Date().getTime() / 1000).toString();
		// DOM_count
		obj.count = document.getElementsByClassName('userbr').length;
		// add_array
		userbr_list.push(obj)
	})
}
