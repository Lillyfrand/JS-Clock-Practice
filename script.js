var sec = document.getElementById("sec")
var min = document.getElementById("min")
var hr = document.getElementById("hr")
var amPm= document.getElementById("ap")

function clock(){
	
	let d=new Date();
	let h=d.getHours();
	let m=d.getMinutes();
	let s=d.getSeconds();
	let ap="AM"

	if(h>=12){
		if(h!=12){ 
			h-=12;
		}
		ap="PM";
	}else{ 
		ap="AM";
	}
	sec.innerHTML=s.toString().padStart(2,0);
	min.innerHTML=m.toString().padStart(2,0);
	hr.innerHTML=h.toString().padStart(2,0);
	amPm.innerHTML=ap.toString()
	setTimeout(clock,1000);
};

window.onload=clock;
