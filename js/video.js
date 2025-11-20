var video;

//https://docs.google.com/document/d/1H4oC_xT2yE6KIH1p_Fe7HKowLyn0zMyo2NIY_HCH90c/edit?tab=t.0#heading=h.5lyzwtwq588r

//load
window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});


//play
document.querySelector("#play").addEventListener("click", function () {

	video.play();

	//check if this works

	var slider_val = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = slider_val + "%";
	video.volume = (slider_val/100);
	console.log("Played Video");
});


//pause
document.querySelector("#pause").addEventListener("click", function () {

	video.pause();
	console.log("Paused Video");
});


//slow down
document.querySelector("#slower").addEventListener("click", function () {
	//decrease by 10% from the previous time
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is now " + video.playbackRate * 100 + "%");

})


//speed up
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Speed is now " + video.playbackRate * 100 + "%");

})


//skip ahead
document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime< video.duration){
		video.currentTime = video.currentTime +10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("Video Timestamp: " + video.currentTime);
	video.play();
	
})


//mute
document.querySelector("#mute").addEventListener("click", function () {

	if (document.getElementById("mute").innerHTML == "Mute") {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}

	else {
		document.getElementById("mute").innerHTML = "Mute"
		video.muted = false;
	}

})


//volume slider
document.querySelector("#slider").addEventListener("change",function(){
	console.log("volume is changed");
	var slider_val = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = slider_val + "%";
	video.volume = (slider_val/100);
})


//styled
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("old school style");
	video.classList.add("oldSchool");

})



//original
document.querySelector("#orig").addEventListener("click", function () {
	if(video.classList.contains("oldSchool")){
	video.classList.remove("oldSchool");
	}

})