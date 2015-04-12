<?php 
$coranwloc = array(); 	#correct answer location
$questnumber = array();
$quest = array();		#question field from the database
$answer1 = array();		#answer 1
$answer2 = array();		#answer 2
$answer3 = array();		#answer 3
$answer4 = array();		#answer 4
$hint= array();			#hint if an answer selected is wrong
$image1 = array();		#image 1 matches answer 1
$image2 = array();		#image 3 matches answer 2
$image3 = array();		#image 3 matches answer 3
$image4 = array();		#image 4 matches answer 4
$usertable="Questions_Answers";	#table inside database
$questno="v_Question_No";		#database question name
$questfield="v_Question";		#database question name
$correctanswer="v_R_Answer";	#database right answer name
$wronganswer1="v_W_Answer1";	#database wrong answer 1 name
$wronganswer2="v_W_Answer2";	#database wrong answer 2 name
$wronganswer3="v_W_Answer3";	#database wrong answer 3 name
$images1="v_Images_1";			#database image 1 name
$images2="v_Images_2";			#database image 2 name
$images3="v_Images_3";			#database image 3 name
$images4="v_Images_4";			#database image 4 name
$hinttext="v_Hint";				#database hint name
# Check If Record Exists

$query = "SELECT * FROM $usertable order by rand()";

$result = mysql_query($query);

if($result)
{
  while($row = mysql_fetch_array($result))
  {	
	$questnumber[] = $row["$questno"];
	$numbers = range(1, 4);
    shuffle($numbers);
	
	if($numbers[0] == 1) { 
			$answer1[] = $row["$correctanswer"];
			$image1[] = $row["$images1"];
			$coranwloc[] = 1; 
	} else if($numbers[0] == 2)  {
		$answer1[] = $row["$wronganswer1"];
		$image1[] = $row["$images2"];
	} else if($numbers[0] == 3)  {
		$answer1[] = $row["$wronganswer2"];
		$image1[] = $row["$images3"];
	} else if($numbers[0] == 4)  {
		$answer1[] = $row["$wronganswer3"];
		$image1[] = $row["$images4"];
	};
	
	if($numbers[1] == 1) { 
			$answer2[] = $row["$correctanswer"];
			$image2[] = $row["$images1"];
			$coranwloc[] = 2;
	} else if($numbers[1] == 2)  {
		$answer2[] = $row["$wronganswer1"];
		$image2[] = $row["$images2"];
	} else if($numbers[1] == 3)  {
		$answer2[] = $row["$wronganswer2"];
		$image2[] = $row["$images3"];
	} else if($numbers[1] == 4)  {
		$answer2[] = $row["$wronganswer3"];
		$image2[] = $row["$images4"];
	};
	
	if($numbers[2] == 1) { 
			$answer3[] = $row["$correctanswer"];
			$image3[] = $row["$images1"];
			$coranwloc[] = 3;
	} else if($numbers[2] == 2)  {
		$answer3[] = $row["$wronganswer1"];
		$image3[] = $row["$images2"];
	} else if($numbers[2] == 3)  {
		$answer3[] = $row["$wronganswer2"];
		$image3[] = $row["$images3"];
	} else if($numbers[2] == 4)  {
		$answer3[] = $row["$wronganswer3"];
		$image3[] = $row["$images4"];
	};
	
	if($numbers[3] == 1) { 
			$answer4[] = $row["$correctanswer"];
			$image4[] = $row["$images1"];
			$coranwloc[] = 4;
	} else if($numbers[3] == 2)  {
		$answer4[] = $row["$wronganswer1"];
		$image4[] = $row["$images2"];
	} else if($numbers[3] == 3)  {
		$answer4[] = $row["$wronganswer2"];
		$image4[] = $row["$images3"];
	} else if($numbers[3] == 4)  {
		$answer4[] = $row["$wronganswer3"];
		$image4[] = $row["$images4"];
	};
	
    $quest[] = $row["$questfield"];
	$hint[] = $row["$hinttext"];
	
  }
}


?>