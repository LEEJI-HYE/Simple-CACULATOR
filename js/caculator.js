   function puls(input1,input2){
   		var resultNumber = input1 + input2;
   		return resultNumber;
    } 
   function minus(input1,input2){
   		 var resultNumber = input1 - input2;
   		 return resultNumber;
   	}
   	function multiple(input1,input2){
   		 var resultNumber = input1 * input2;
   		 return resultNumber;
   	}
   	function division(input1,input2){
   		 var resultNumber = input1 / input2;
   		 return resultNumber;
   	}

   function caculator(){
   	    var inputTag1 = getValueOfTag('input1');
   	    var inputTag2 = getValueOfTag('input2');
  		// var inputTag1 = Number(document.getElementById('caculator1').value);
  		// var inputTag2 = Number(document.getElementById('caculator2').value);

  		var target = document.getElementById('operators');

  		var op = getOptionValue(target);
  		// var op = target.options[target.selectedUndex].value;
  		var numOp = Number(op);

  		console.log(inputTag1);
  		console.log(inputTag2);


  		var result = 9999999999999999;
  		if(numOp == 1){
  			result = puls(inputTag1,inputTag2);
  		} else if (numOp == 2){
  			result = minus(inputTag1,inputTag2);
			//  result = inputTag1 - inputTag2;
  		} else if (numOp == 3){
  			result = multiple(inputTag1,inputTag2);
  			//  result = inputTag1 * inputTAg2;
  		} else if (numOp == 4){
  			result = division(diinputTag1,inputTag2);
  			//  result = inputTag1 / inputTag2;
  		}
  		printResult('result',result);
  		// document.getElementById('result').innerHTML = result;
}