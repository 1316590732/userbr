# userbr
This is a web user behavior record plug-in

The final result is to generate a two-dimensional array
# code type
Use JavaScript language

# Tip
Sorry, I can't speak English
# What does it do
It allows development engineers, data analysts and various data related personnel to analyze the behavior and operation data of users accessing web pages
# Case display
 ![image]( https://github.com/1316590732/userbr/blob/main/images/demo.gif)
 
 When the user moves the mouse over the element, this information will be recorded. For example, when the user moves the mouse to the price area for many times, we should consider whether to reduce the sales price in order to increase the success rate of the transaction when chatting!
# Case code
```  <code>
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title></title>
		<style type="text/css">
			.nav{
				width: 100%;
				height: 80px;
				background-color: #eee;
			}
			.pay{
				width: 30%;
				height: 80px;
				background-color: #f00;
			}
			.footer{
				width: 100%;
				height: 80px;
				background-color: #f1f1f1;
			}
		</style>
	</head>
	<body>
		<ul>
			<div class="nav userbr" data-cc = 'nav'>
				this is nav
			</div>
			<div class="pay userbr" data-cc = 'pay'>
				this is pay
			</div>
			<div class="footer userbr" data-cc = 'footer'>
				this is footer
			</div>
			<button type="button" id="result">result</button>
		</ul>
		<script type="text/javascript">
			document.getElementById('result').addEventListener('click', function() {
				console.log(userbr_list)
			})
		</script>
	</body>
		<script src="userbr.js" type="text/javascript" charset="utf-8"></script>
	
</html>
<!-- Delete the following code -->
</code>
``` 
# instructions
 ![image]( https://github.com/1316590732/userbr/blob/main/images/introduce.png)
 
class = userbr

explain:Elements to be recorded

data-cc = custom

explain:Describe this record

# process
 ![image]( https://github.com/1316590732/userbr/blob/main/images/Process.jpg)

 
The user moves the mouse over the element

# Get results
 ![image]( https://github.com/1316590732/userbr/blob/main/images/result.png)
 
 Just output the variable the userbr_list

# AuthorTips
If you make a profit through this plug-in, I hope you can give the author some reward support. Thank you.

 ![image]( https://github.com/1316590732/userbr/blob/main/images/wxqrcode.png)
