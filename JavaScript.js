<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>

<script type="text/javascript">

function fun1()
{
	var un=document.forms["form1"]["un"].value;
	var em=document.forms["form1"]["em"].value;
	var mo=document.forms["form1"]["mo"].value;
	var p1=document.forms["form1"]["p1"].value;
	var p2=document.forms["form1"]["p2"].value;
	if (un==null || un=="")
	{
		document.getElementById("error").innerHTML="Enter the UserName";
		return false;
	}
	if (em==null || em=="")
	{
		document.getElementById("error").innerHTML="Enter the EmailD";
		return false;
	}
	if (mo==null || mo=="")
	{
		document.getElementById("error").innerHTML="Enter the MobileNo";
		return false;
	}
	if (p1==null || p1=="")
	{
		document.getElementById("error").innerHTML="Enter the Password";
		return false;
	}
	if (p2==null || p2=="")
	{
		document.getElementById("error").innerHTML="Conform the Password";
		return false;
	}
	if (p1!=p2)
	{
		document.getElementById("error").innerHTML="Password is mismatch";
		return false;
	}
	if (p1 == p2)
	{
		alert("Registered Successfully...!")
	}
	
}

</script>

<body>

	<form action="RegisterBack.jsp" name="form1"  onsubmit="return fun1()">
		<table>
			<tr><th>UserName : </th><td><input type="text" name="un" placeholder="Please enter your name"></td></tr>
			<tr><th>E-mail : </th><td><input type="text" name="em" placeholder="Please enter your mail"></td></tr>
			<tr><th>Mobile : </th><td><input type="text" name="mo" placeholder="Plese enter your mobile no"></td></tr>
			<tr><th>Password : </th><td><input type="password" name="p1" placeholder="Enter password"></td></tr>
			<tr><th>Re-Enter Password : </th><td><input type="password" name="p2" placeholder="Conform password"></td></tr>
			<tr><td><p id="error"></p></td></tr>
			<tr><td><input type="submit" value="Register"></td><td><input type="reset" value="Clear"></td></tr>
	
		</table>
	</form>

</body>
</html>