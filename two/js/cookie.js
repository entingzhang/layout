// 存cookie
function addCookie(key, value, time, path) {
	key = escape(key);
	value = escape(value);
	var expires = new Date();
	expires.setTime(expires.getTime() + time * 1000);
	path = path == "" ? "" : ";path=" + path;
	expires = (typeof expires == "string") ? "" : ";expires=" + expires.toUTCString();

	document.cookie = key + "=" + value + expires + path;

}

/**
 * 
 * user_id=123; user_name=xiaoming; user_phone=13888888888
 * 
 * */

// 读cookie
function getCookie(key) {
	var cookies = document.cookie;

//	console.log(cookies);
	key += "=";
	var pos = cookies.indexOf(key);
	if(pos < 0) {
		return "";
	} else {
		var start = pos + key.length;
		var end = cookies.indexOf(";", start);
		if(end < 0) {
			end = cookies.length;
		}
		return cookies.substring(start, end);
	}

}


/**
 * 删除cookie
 * */
function deleteCookie(key,path){
	addCookie(key,"",0,path);
}
