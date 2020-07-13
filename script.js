var time = document.getElementById("time")
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
	time.innerHTML=h.toString().padStart(2,0)+":"+m.toString().padStart(2,0)+":"+s.toString().padStart(2,0)+" "+ap;
	setTimeout(clock,1000);
};

window.onload=clock;
