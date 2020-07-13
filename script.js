var d,h,m,s,animate,ap;
var sec = document.getElementById("sec")
var min = document.getElementById("min")
var hr = document.getElementById("hr")

function init(){
	d=new Date();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	ap = "AM"
	clock();
};

function clock(){
	s++;
	if(s==60){
	s=0;
	m++;
		if(m==60){
		m=0;
		h++;
			if(hr==24){
			hr=0;
			}

		}
	}
	sec.innerHTML=s.toString().padStart(2,0);
	min.innerHTML=m.toString().padStart(2,0);
	hr.innerHTML=h.toString().padStart(2,0);
	animate=setTimeout(clock,1000);
};
window.onload=init;
