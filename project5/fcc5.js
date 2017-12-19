
var left="";
var right="";
var op="";

function bclick(value)
{
	var result = 0;
	switch(value)
	{
		case "one":
			if(op === "")
			{
				left+='1';
				document.getElementById('dis').value=left;
			}
			else
				{ right+='1';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('1');
			     document.getElementById('dis').value=temp;}

			break;
		
		case 'two':
				if(op === "")
			{
				left+='2';
				document.getElementById('dis').value=left;
			}
			else
				{right+='2';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('2');
			     document.getElementById('dis').value=temp;}
			break;

		case 'three':
			if(op === "")
			{
				left+='3';
				document.getElementById('dis').value=left;
			}
			else
				{
				 right+='3';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('3');
			     document.getElementById('dis').value=temp;}
			break;
		case 'four':
						if(op === "")
			{
				left+='4';
				document.getElementById('dis').value=left;
			}
			else
				{ right+='4';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('4');
			     document.getElementById('dis').value=temp;}
			break;
		case 'five':if(op === "")
			{
				left+='5';
				document.getElementById('dis').value=left;
			}
			else
				{right+='5';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('5');
			     document.getElementById('dis').value=temp;}
			break;
		case 'six':if(op === "")
			{
				left+='6';
				document.getElementById('dis').value=left;
			}
			else
				{right+='6';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('6');
			     document.getElementById('dis').value=temp;}
			break;
		case 'seven':
					if(op === "")
			{
				left+='7';
				document.getElementById('dis').value=left;
			}
			else
			{	right+='7';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('7');
			     document.getElementById('dis').value=temp;}
			break;
		case 'eight':if(op === "")
			{
				left+='8';
				document.getElementById('dis').value=left;
			}
			else
			{	right+='8';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('8');
			     document.getElementById('dis').value=temp;}
			break;
		case 'nine':if(op === "")
			{
				left+='9';
				document.getElementById('dis').value=left;
			}
			else
				{right+='9';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('9');
			     document.getElementById('dis').value=temp;}
			break;
		case 'zero':if(op === "")
			{
				left+='0';
				document.getElementById('dis').value=left;
			}
			else
				{right+='0';
				 var temp = document.getElementById('dis').value
				 temp = temp.concat('0');
			     document.getElementById('dis').value=temp;}
			break;
		case 'plus': op+='+';
					var temp = document.getElementById('dis').value;
					temp = temp.concat(op)
					document.getElementById('dis').value=temp;
					break;
		case 'minus':op+='-';
					var temp = document.getElementById('dis').value;
					temp = temp.concat(op)
					document.getElementById('dis').value=temp;
					break;

		case 'mul': op+='*';
					var temp = document.getElementById('dis').value;
					temp = temp.concat(op)
					document.getElementById('dis').value=temp;
					break;


		case 'eq': {
			if(op === '+'){
						result = parseInt(left)+parseInt(right);
					}
					if(op === '-'){
						result = parseInt(left)-parseInt(right);
						
					}
					if(op==='*'){
						result=parseInt(left)*parseInt(right);
					}

					document.getElementById('dis').value=result;
					break;	
		}
		case 'ac':document.getElementById('dis').value="";
		  			left="";
		  			right="";
		  			op="";
					break;

		case 'back': var temp = document.getElementById('dis').value;
					 var len=temp.length;
					 var last=temp.charAt(len-1);
					 temp = temp.slice(0,len-1);
					 document.getElementById('dis').value=temp;
					
					 switch(last)
					 {
					 	case '+':
					 	case '-':
					 	case '*': 
					 				op="";
					 				break;
					    default:
					    			if(op==="")
					    			{
					    				left=left.slice(0,(left.length)-1);

					    			}
					    			else
					    			{
					    				right=right.slice(0,(right.length)-1);
					    			}

					}
					break;
							

	}
}
