var d,h,m,s,animate,ap;
var sec = document.getElementById("sec")
var min = document.getElementById("min")
var hr = document.getElementById("hr")
var amPm= document.getElementById("ap")
function init(){
	d=new Date();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	ap=" AM"
	clock();
};

function clock(){
	if(s==60){
		s=0;
		m++;
	}
	if(m==60){
		m=0;
		h++;
	}
	if(h>=24){
		h=0
	}
	let temp=h
	if(temp>=12){
		if(temp!=12){ 
			temp-=12;
		}
		ap="PM";
	}else{ 
		ap="AM";
	}
	sec.innerHTML=s.toString().padStart(2,0);
	min.innerHTML=m.toString().padStart(2,0);
	hr.innerHTML=h.toString().padStart(2,0);
	amPm.innerHTML=ap.toString()
	s++
	animate=setTimeout(clock,1000);
};
window.onload=init;
