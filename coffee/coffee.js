function sendRequest(url){
	request.onreadystatechange = serveDrink;
	request.open("GET", url, true);
	request.send(null);
}

function getSize(){
	var sizeGroup = document.forms[0].size;
	for (i=0; i<sizeGroup.length; i++){
		if(sizeGroup[i].checked == true){
			return sizeGroup[i].value;
		}
	}
}

function getBeverage(){
	var beverageGroup = document.forms[0].beverage;
	for (i=0; i<beverageGroup.length; i++) {
		if (beverageGroup[i].checked == true) {
			return beverageGroup[i].value;
		}
	}
}

function orderCoffee(){
	var name = document.getElementById.("name").value;
	var beverage = getBeverage();
	var size = getSize();

	var coffeemakerStatusDiv1 = document.getElementById("coffeemaker1-status");
	var status = getText(coffeemakerStatusDiv1);
	if(status =="待機中"){
		replaceText(coffeemakerStatusDiv1,"現在" + name +"さんの"+ size + "" + beverage + "を作っています");
		document.forms[0].reset();

		var url = "coffeemaker.php?name" + escape(name) +
				"&size=" + escape(size) + 
				"&beverage=" + escape(beverage) +
				"&coffeemaker=1";

		sendRequest(url);
	}else{
		var coffeemakerSrarusDiv2 = document.getElementById("coffeemaker2-status");
		status = getText(coffeemakerSrarusDiv2);
		if status == ""){
			replaceText(coffeemakerSrarusDiv2, "現在" + name + "さんの" +
							size + "" + beverage + "を作っています");
			document.forms[0].reset();
			var url = "coffeemaker.php?name=" + escape(name) +
						"&size=" + escape(size) +
						"&beverage" + escape(beverage) +
						"&coffeemaker=2";
			sendRequest(request2, url);
		}else{
		alert("申し訳ございません!コーヒーメーカーは２台とも使用中です。" + "後ほど改めてご利用ください");
		}
}

function serveDRINK(){
	if(request.readyState == 4) {
		if(request.status == 200) {
			var response = request.responseText;
			var whichCoffemaker = response.substring(0,1);
			var name = response.substring(1, response.length);
			if (whichCoffeemaker == "1"){
				var coffeemakerStatusDiv1 = document.getElementById("coffeemaker1-status");
				replaceText(CoffeemakerStatusDiv1, "待機中");
				}

			alert(name + "さんのコーヒーができました！");
			} else
			alert("エラー！リクエストステータス:" + request.status);
			}
		}


		}else
			alert("エラー!リクエストステータス:" + request.status);
		}
	}

