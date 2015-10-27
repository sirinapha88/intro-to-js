<!DOCTYPE html>
<html>
<head>
	<title>Intro to JS - Primitive and Reference Types</title>
	 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	
</head>
<body>
	<div class="container-fluid">
		<div class="row">				
		  <div class="col-md-8 col-md-offset-2 text-center">
		  
		  <h2 class="text-danger text-center">Primitive and Reference Types</h2>
		  <a href="https://repl.it/"><h3 class="bg-success">A link to Repl.it</h3></a>
			
			<table class="table table-striped ">
				
				<tr>
					<th class="info text-center">Primitives Types</th>
					<th class="info text-center"> Example </th>
				</tr>
				<tr><td>Number</td>
					<td>6, 4.5, 3.14, 6, 2990</td></tr>
				<tr><td>String</td>
					<td>"I'm a string","23", "dog", "578", "bird"</td></tr>
				<tr><td>Boolean</td>
					<td>true, false </td></tr>
				<tr><td>Null</td>
					<td>null</td></tr>
				<tr><td>Undefined</td>
					<td>undefined</td></tr>
			
				<tr>
					<th class="info text-center">Comparison Operators</th>
					<th class="info text-center"> Example </th>
				</tr>
				<tr><td> < </td><td> 3 < 5 </td></tr>
				<tr><td> <= </td><td> 5 <= 10 </td></tr>
				<tr><td> > </td><td> 8 > 4 </td></tr>
				<tr><td> >= </td><td> 8 >= 4 </td></tr>
				<tr><td> == </td><td> 5 == "5" </td></tr>
				<tr><td> != </td><td> 5 != 5</td></tr>
				<tr><td> === </td><td> 6 === "6"</td></tr>
				<tr><td> !== </td><td> "dog" !== "cat"</td></tr>
						
			
				<tr>
					<th class="info text-center">Logical Operators</th>
					<th class="info text-center"> Example </th>
				</tr>
				<tr><td> && </td><td> true  && true; </td></tr>
				<tr><td> || </td><td> "Cat" || "Dog"; </td></tr>
				<tr><td> ! </td><td> !false; </td></tr>
			
			
				<tr>
					<th class="info text-center">Variable Names</th>
					<th class="info text-center"> Example </th>
				</tr>
				<tr><td>Valid variable names</td>
					<td> var month = "July"; </td>
				</tr>
				<tr><td>Invalid variable names</td>
					<td>JavaScript variable names should not start with a numeral (0-9). Example var 123test = 5; </td>
				</tr>
			
			
				<tr>
					<th class="info text-center">Code Snipper</th>
					<th class="info text-center"> Example </th>
				</tr>
				<tr><td> If Statement Example</td>
					<td> <code> if("dog" === "cat")
							console.log("That's so cute")
						</code></td>
				</tr>


				<tr><td>For loop Example</td>
					<td> <code> for ( var i = 0; i <= 10; i++) {
								console.log(i) 
								} 
						</code></td>
				</tr>

				<tr><td>While loop Example</td>
					<td> <code> var i =1;
							while( i <= 5)
							{
								console.log( i);
								i++
							}
						</code></td>
				</tr>

			
			
				<tr>
					<th class="info text-center">String and Number Methods</th>
					<th class="info text-center">Eexplanations </th>
				</tr>
				<div class="text-left">
				<tr><td class="text-left">Number.parseInt(string[, radix])</td>
					<td class="text-left">The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.</td>
				</tr>
				<tr><td class="text-left">Number.isNaN(value)</td>
					<td class="text-left">The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN().</td>
				</tr>
				<tr><td class="text-left"> Number.MAX_VALUE</td>
					<td class="text-left">The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.</td>
				</tr>
				<tr><td class="text-left">Number.MIN_VALUE</td>
					<td class="text-left">The Number.MIN_VALUE property represents the smallest positive numeric value representable in JavaScript.</td>
				</tr>
				<tr><td class="text-left">str.charAt(index)</td>
					<td class="text-left">The charAt() method returns the specified character from a string.
					</td>
				</tr>
				<tr><td class="text-left">str.indexOf(searchValue[, fromIndex])</td>
					<td class="text-left">The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
					</td>
				</tr>
				<tr><td class="text-left">str.replace(regexp|substr, newSubStr|function[, flags])</td>
					<td class="text-left">he replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.</td>
				</tr>
				<tr><td class="text-left">str.split([separator[, limit]])</td>
					<td class="text-left">The split() method splits a String object into an array of strings by separating the string into substrings.</td>
				</tr>
				<tr><td class="text-left">str.toLowerCase()</td>
					<td class="text-left">The toLowerCase() method returns the calling string value converted to lowercase.</td>
				</tr>
				<tr><td class="text-left">str.toUpperCase()</td>
					<td class="text-left">The toUpperCase() method returns the calling string value converted to uppercase.</td>
				</tr>
				<tr><td class="text-left">str.trim()</td>
					<td class="text-left">The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).</td>
				</tr>
			</table>
		</div>
	</div>
	</div>

</body>
</html>