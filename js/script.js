function generate(){
	var str = hex_md5(document.getElementById("password1").value) + hex_md5(document.getElementById("password2").value);
	var value = "";
	for(let i = 0; i < str.length; i+=7){
		value += str[i];
	}
	value = value.toUpperCase();
	for(let i = 11; i < str.length; i+=11){
		value += str[i];
	}
	var input = document.getElementById("value");
	input.value = value;
	// console.log(input.value);
	var clipboard = new Clipboard('#button'); //参数为一个选择器
	clipboard.on('success', function(e) {
		console.log(e); //复制成功的回调函数
	});
	clipboard.on('error', function(e) {
		console.log(e); //复制失败的回调函数
	});
}