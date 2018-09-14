function getReceipt() {
	//Initializes our string, so it can get passed from function to function, growing line by line into a full receipt.
	var text1 = "";
	var text2 = "";
//String that shows a list of selected items. The original string "<h3>You Ordered:</h3>" will get concatenated with the new string "Large Pizza<br>" to make up the new string value.
var runningTotal = 0;
var sizeTotal = 0; 
var sizeArray = document.getElementsByClassName("size");

for (var i = 0; i < sizeArray.length; i++) {
	if(sizeArray[i].checked) { 
	//This condition will check each item in the iteration to see if that particular item has been checked or not. Any items that our users select will be denoted with the "checked" value. 
		var selectedSize = sizeArray[i].value;		
		text1 = text1+selectedSize+"<br>";
	};
};
 //Ctrl + Shift + K = Removes the comment tag.
	//Ctrl + K= Adds the comment tag. Can do both of these
	//with multiple lines.

if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
		}
		runningTotal = sizeTotal;
		getMeat(runningTotal,text1,text2);
};		
//Make sure you're closing your functions. If you don't close them, it can cause problems with the other functions you made. You can tell if you didn't close them by highlighting the opening curly bracket. If it doesn't turn red, you didn't close it properly. 
		 function getMeat(runningTotal,text1,text2) {
			var meatTotal = 0;
			var selectedMeat = []; 
			var meatArray = document.getElementsByClassName("meats");
		
		for (var j = 0; j < meatArray.length; j++) {
			if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value); 
				
				//The if statement is nested within the for loop.
				//This condition checks each item in the iteration to see if that particular item has been checked or not. A checked item = a user selected item.
				//Last line in the if statement is another concatenation. Concatenates a new selected value from the meat array to the previous value stored in "text1".
			}
		}
		var meatCount = selectedMeat.length;
		if (meatCount > 1) {
				meatTotal = (meatCount - 1);
		} else {
			meatTotal = 0;
		}
		// The total count will serve as the entire subtotal price for all of the selected meat items. Remember, we need to account for the customer receiving one free meat topping.
		runningTotal = (runningTotal + meatTotal);
		
		for (var j =0; j < selectedMeat.length; j++) {
			//console.log("Enter MeatArray loop");
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount -1;
			} else {
				text2= text2 + 1 + "<br>";
				meatCount = meatCount -1;
			}
		}
	getVeggie(runningTotal,text1,text2);
	};
	
	function getVeggie(runningTotal,text1,text2) {
		console.log("Entered getVeggie");
		var veggieTotal = 0;
		var selectedVeggie =[];
		var veggieArray = document.getElementsByClassName("veggies");
		console.log(veggieArray.length);
		
		for (var j =0; j < veggieArray.length; j++) {
			console.log("Entered text1: "+veggieArray[j]);
			//console.log("Enter VeggieArray loop");
			
			if (veggieArray[j].checked) {
				selectedVeggie.push(veggieArray[j].value); //Also, make sure you're closing out your lists with )
				text1 = text1+veggieArray[j].value+"<br>";
				console.log("text1 = "+text1);
			}
			else {
				console.log("Veg NOT Checked");
			}
			console.log(selectedVeggie);
		}
		
		var veggieCount=selectedVeggie.length; 
		if (veggieCount >= 1) {
			veggieTotal = (veggieCount - 1);
		} 
		else {
			veggieCount = 0;
		}
		runningTotal =(runningTotal + veggieTotal);
		
	for (var j = 0; j < selectedVeggie.length; j++) {
		console.log("Entered SelectedVeggie loop");
		//text1 = text1+selectedVeggie[j]+"<br>"
		if (veggieCount <= 1) {		
		text2 = text2 + 0 +"<br>";
			veggieCount = veggieCount - 1;
		} else {
			text2 = text2 + 1 + "<br>";
			veggieCount = veggieCount - 1;
		}
		getCheese(runningTotal,text1,text2);
		console.log("text1 = "+text1);
		console.log("text2 = "+text2);
	};
		
 function getCheese(runningTotal,text1,text2) {
		var cheeseTotal = 0;
		var selectedCheese = [];
		var cheeseArray = document.getElementsByClassName("cheeses"); //Make sure your class names 
		//match what you have in your HTML.
		for (var j = 0; j < cheeseArray.length; j++) {
			if (cheeseArray[j].checked) {
				selectedCheese = cheeseArray[j].value;
			}
			if (selectedCheese ===
			"Extra Cheese") {
				cheeseTotal = 3;
			}
		}
		text2 = text2+cheeseTotal+"<br>";
		text1 = text1+selectedCheese+"<br>";
		runningTotal = (runningTotal +
		cheeseTotal);
		getSauce(runningTotal,text1,text2);
 };
 		
		};

 function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauces");
	for (var j = 0;	j < sauceArray.length; j++) {
			if (sauceArray[j].checked) {
				selectedSauce = sauceArray[j].value;
				text1 = text1 + selectedSauce +"<br>";
			}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(runningTotal,text1,text2)
 };
 
 function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crusts");
	for (var j =0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed") {
				crustTotal = 3;
		}
	}
	
 runningTotal = (runningTotal + crustTotal);
	text2 = text2 +crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML=runningTotal;	
 };
	
function clearAll() {		
		document.getElementById("frmMenu").reset();
		document.getElementById("cart").style.opacity=0;
		};
		
