<!DOCTYPE html>
<html>
<HEAD>
<title>FORMS</title><!-- Title of the project-->
<form>
	<fieldset>
		<legend >Your details <!-- details of the user-->
		</legend>
		<Label> Name:<input type="text" name="Name"><br>
		</label><br>
		<Label>Email:<input type="email" name="Email"><br>
		</label>
	</fieldset>
	<fieldset>
		<legend >Your Review <!-- Review by the user-->
		</legend>
		<Label> How did you hear about us?:
		<select way="google"> <!-- Drop box commands-->
	  <option value="Google">google
		</option>
		<option value="facebook">facebook
		</option>
		<option value="whats app">whats app
		</option>
		</select>
		<br>
		<br>
		<Label> Would ypu visit again?<br>
			<input type="radio" name="option"value="yes" checked="checked"/>yes<!-- Radio button commands-->
      <input type="radio" name="option"value="no" checked="checked"/>no
      <input type="radio" name="option"value="may be" checked="checked"/>may be
		</label><br>
			<br>
	<textarea name="comments" rows="8" cols="80">Enter your comments...
	</textarea><br><br>
<label><input type="checkbox">Sign me up for email updates<!-- checkbox command-->
</label><br><br>
<input type="submit"value="Submit Review"><!-- submission of details-->
</form>
</head>
</html>
