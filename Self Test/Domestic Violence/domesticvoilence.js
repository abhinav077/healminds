var score = 0;
var selfVar= 1;
var ageVar=1;
var genVar=1;
var lossVar=2;
var set = set1;
var i=0;



var set1=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];

var set2=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];


var set3=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];


var set4=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];

var set5=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];


var set6=["Do you feel anxious or nervous around your partner? "," Do you keep a watch on what you’re doing to avoid making your partner angry or upset? ","Are you afraid of voicing a different opinion than your partner? "," Does your partner criticize or embarrasses you in front of others? ","Does your partner check up on you often and doesn’t believe you when you tell them what you’re doing or often accuses you of having affairs? ","Does your partner physically abuse you and tells you they’ll stop when you start behaving yourself (blame you for their toxic and violent behavior)? ","Does your partner’s behavior often make you feel that you’re wrong? ","Does your partner keep you from going out or doing things you want to do? ","Do you feel like nothing you do is ever good enough for your partner? ","Does your partner threaten to kill themselves if you try to leave them? " ];











function shown(){
    document.getElementById('box').style.display="none";
	var disc = "<div id='disclamairHead'>Health is Wealth! </div>"+
    "<div id='descriptionText'>"+
    "It's a common adage that if you're healthy, nothing can stop you from being wealthy. We constantly abide by this rule, but sometimes we fail to remember that health is not just about bodily well-being; mental well-being is just as significant. The most crucial aspect is mental wellness, and it must never be neglected! We sometimes don't even become aware that we have this illness. Additionally, due to societal anxieties, when people learn about this sickness, they strive to hide it. But having sadness or something like is entirely natural or acceptable. It's similar to any other ailment in that it has to be caught early to prevent any dangerous situations! We must first do certain screening tests at our level in order to achieve that. This quick exam is created for depression self-screening. The time it takes to complete this test—barely more than 10 minutes—could save your life or the lives of those dear to you! Data is solely requested for assessment reasons because it is an anonymous test. You may take this exam if you are at least 16 years old."+
    '</div>'+
    '<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'+
    '<div >This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div>'+
    '<button id="startText" class="mainBtn" title="Click Here To Start The Test" onclick="startTheTest()">Start The Test</button>';
	document.getElementById('box2').innerHTML = disc;
    document.getElementById('box2').style.display="flex";
}


function never(num){
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function some(num){
	score += 1;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function half(num){
	score+= 3;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function always(num){
	score += 5;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function setOne(dig){
	var template = '<div class="question">'+set1[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
}
function setTwo(dig){
	var template = '<div class="question">'+set2[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
function setThree(dig){
	var template = '<div class="question">'+set3[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFour(dig){
	var template ='<div class="question">'+set4[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFive(dig){
	var template = '<div class="question">'+set5[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setSix(dig){
	var template = '<div class="question">'+set6[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }


function showQues(j,n){
	if(n==1){
		setOne(j);
	}
	else if(n==2){
		setTwo(j);
	}
	else if(n==3){
		setThree(j);
	}
	else if(n==4){
		setFour(j);
	}
	else if(n==5){
		setFive(j);
	}
	else if(n==6){
		setSix(j);
	}
	var buttonShow = '<div id="buttonQuesFlex">'+'<button class="buttonOption" onclick="never('+n+')">Never</button>'+'<button class="buttonOption"  onclick="some('+n+')">Sometimes</button>'+'<button class="buttonOption" onclick="half('+n+')">Half Of The Time</button>'+'<button class="buttonOption b" onclick="always('+n+')">Everytime</button>'+'</div>';
	document.getElementById('box2').innerHTML += buttonShow;
}

function selfs(val){
	selfVar=val.value;

}


function ages(age){
	ageVar=age.value;

}

function gens(gen){
	genVar=gen.value;


}

function loss(los){
	lossVar = los.value;

}


let error = "";
function start(){
	error=""
	if(genVar===1 || lossVar === 1 || ageVar===1) { error = "Fill all the details";    document.getElementById('error').innerHTML = error;

	return};
if(genVar==2){
	score += 1;
}
else if(genVar==3){
	score += 2;
}
if(lossVar==1){
	score +=3;
}
if(ageVar==1){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,1);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,2);
	}
}
else if(ageVar==2){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,3);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,4);
	}
}
else if(ageVar==3){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,5);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,6);
	}
}


}

function reload(){
	location.reload();
}

function endMsg(advise){
	var temp = '<div class="alertFlex">'
	+'<div id="scoreWhole">'
	+'<div id="score"> Score After Evaluation : '+score+' </div>'
	+'<div id="advise">'+advise+'</div>'
	+'</div>'
	+'  <hr>'
	+'  <div id="wish">Happy Mental Health </div>'
	+'<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'
	+'<div>This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div>'
	+'<button id="startNew" class="mainBtn " title="Click Here To Start The Test" onclick="startTheTest()">Take Test Again</button>'
	+'<button onclick="reload()" title="Click here to go to home page!" class="mainBtn" id="goHomePageBtn">Go To Home Page</button>';
	document.getElementById('box2').innerHTML += temp;	
}

function results(){
	console.log('You have successfully answered all the questions!!')
    document.getElementById('box2').innerHTML = "";
	var templates;
	if(score>=40){
		templates = '<div class="alertHead" id="veryhighAlert">You are at a very High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("You're at a peak level of alertness, demonstrating impressive attentiveness. This intensity can drive productivity and creativity. Leverage this heightened state to accomplish tasks efficiently, and remember to balance it with moments of rest and self-care!");
	}
	else if(score>=27 && score<40){
		templates = '<div class="alertHead" id="highAlert">You are at a High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("You're operating with heightened focus and awareness, which is fantastic. This level of alertness can be harnessed for effective problem-solving and decision-making. Use this state to tackle tasks with clarity and purpose!");
		
	}
	else if(score>=16 && score<27){
		templates = '<div class="alertHead" id="mediumAlert">You are at a Medium Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("Your awareness is growing, and you're in a balanced state. This is a good place to start implementing positive changes. Recognize the progress you're making and use this as a foundation for further growth!");
		
	}
	else if(score>=6 && score<16){
		templates = '<div class="alertHead" id="lessAlert">You are at Less Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("You're navigating with a gentle awareness. If you feel ready, consider taking small steps forward. It's perfectly okay to proceed at a pace that feels comfortable for you!");
		
	}
	else if(score>=0 && score<6){
		templates = '<div class="alertHead" id="veryLessAlert">You are at a very Low Risk ! </div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("You're in a calm state right now, and that's completely fine. It's okay to embrace moments of relaxation. Take your time, and when you're ready, you can gently ease into the next steps!");
		
	}
}



function startTheTest(){
	shown();
    document.getElementById('box2').innerHTML = "";
    var infoTemp = '<div id="infoFlex">'+
    '<div id="headInfo">Please provide the primary info</div>'+
    '<div id="optionOne" class="options">'+
      '<select class="optional" onchange="ages(this)">'+
        '<option selected>Your Age</option>'+
        '<option value="1">Between 16 to 35</option>'+
        '<option value="2">Between 36 to 50</option>'+
        '<option value="3">Above 50</option>'+
      '</select>'+
      '<br>'+
      '<select class="optional" onchange="gens(this)">'+
       '<option selected>Your Gender</option>'+
        '<option value="1">Male</option>'+
        '<option value="2">Female</option>'+
        '<option value="3">Other</option>'+
      '</select>'+
      '<br>'+
      '<div class="labelLoss">Any mishappening has happened to you or your loved one like the loss of anyone close, any financial crisis, any relationship issues, etc.</div>'+
      '<select id="lossOption" class="optional" onchange="loss(this)">'+
        '<option selected>Select</option>'+
        '<option value="1">Yes</option>'+
        '<option value="2">No</option>'+
      '</select>'+
  '<br>'+
    '</select>'+
    '</div>'+
    '<button id="nextTest" onclick="start()">NEXT</button>'+
	'<p id="error"></p>'+

    '</div>';

    document.getElementById('box2').innerHTML = infoTemp;

}
