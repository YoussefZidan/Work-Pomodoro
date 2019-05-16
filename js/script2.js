var workT=0;
var breakT=0;
var workInterval;
var breakInterval;
// printed Time work and break
var workTime=document.getElementById('work');
var breakTime=document.getElementById('break');
// printed total Time work and total Time break
var workTotal=document.getElementById('totalWork');
var breakTotal=document.getElementById('totalBreak');
// buttons id
var startButton=document.getElementById('start');
var breakButton=document.getElementById('breakb');
var resumeButton=document.getElementById('resume');
var endButton=document.getElementById('end');
// 4 listener of buttons
startButton.addEventListener('click',startWork);
breakButton.addEventListener('click',startBreak);
resumeButton.addEventListener('click',resumeWork);
endButton.addEventListener('click',endWork);
function startWork()
{
	console.log('start work');
	workTotal.innerHTML="";
	breakTotal.innerHTML="";
	startButton.setAttribute('disabled',true);
	breakButton.removeAttribute('disabled');
	resumeButton.setAttribute('disabled',true);
	endButton.removeAttribute('disabled');
	startButton.style.backgroundColor='gray';
	resumeButton.style.backgroundColor='gray';
	breakButton.style.backgroundColor='#006666';
	endButton.style.backgroundColor='#006666';
	workInterval=setInterval(function(){
		workT++;
		if(parseInt(workT/3600)==8){
			clearInterval(workInterval);
		}
		workTime.innerHTML=timeFormat(workT);
	},1000);
}
function startBreak()
{
	clearInterval(workInterval);
	console.log("start Break");
	startButton.setAttribute('disabled',true);
	breakButton.setAttribute('disabled',true);
	resumeButton.removeAttribute('disabled');
	endButton.removeAttribute('disabled');
	startButton.style.backgroundColor='gray';
	breakButton.style.backgroundColor='gray';
	resumeButton.style.backgroundColor='#006666';
	endButton.style.backgroundColor='#006666';
	breakInterval=setInterval(function(){
		breakT++;
		if(parseInt(breakT/3600)==8){
			clearInterval(breakInterval);
		}
		breakTime.innerHTML=timeFormat(breakT);
	},1000);
}
function resumeWork()
{
	clearInterval(breakInterval);
	console.log("resume work");
	startButton.setAttribute('disabled',true);
	breakButton.removeAttribute('disabled');
	resumeButton.setAttribute('disabled',true);
	endButton.removeAttribute('disabled');
	startButton.style.backgroundColor='gray';
	resumeButton.style.backgroundColor='gray';
	breakButton.style.backgroundColor='#006666';
	endButton.style.backgroundColor='#006666';
	workInterval=setInterval(function(){
		workT++;
		if(parseInt(workT/3600)==8){
			clearInterval(workInterval);
		}
		workTime.innerHTML=timeFormat(workT);
	},1000);
	
}
function endWork()
{
	clearInterval(workInterval);
	clearInterval(breakInterval);
	console.log("end work");
	startButton.removeAttribute('disabled');
	breakButton.setAttribute('disabled',true);
	resumeButton.setAttribute('disabled',true);
	endButton.setAttribute('disabled',true);
	startButton.style.backgroundColor='#006666';
	resumeButton.style.backgroundColor='gray';
	breakButton.style.backgroundColor='gray';
	endButton.style.backgroundColor='gray';
	workTime.innerHTML="00 : 00";
	breakTime.innerHTML="00 : 00";
	workTotal.innerHTML="Total Work  "+"  <br>"+timeFormat(workT);
	breakTotal.innerHTML="Total Break  "+" <br> "+timeFormat(breakT);
	workT=0;
	breakT=0;
}
function timeFormat(t)
{
	var hours=parseInt(t/3600);
	var minute=parseInt((t-hours*3600)/60);
	var sec=t%60;
	if(sec>=9 && minute<=9)
	{
		return "0"+hours+" : 0"+minute+" : "+sec;
	}
	else if(sec>=9 && minute>=9)
	{
		return "0"+hours+" : "+minute+" : "+sec;
	}
	else if(sec<=9 && minute>=9)
	{
		return "0"+hours+" : "+minute+" : 0"+sec;
	}
	else
	{
		return "0"+hours+" : 0"+minute+" : 0"+sec;
	}

}