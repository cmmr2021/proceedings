function worldClock(){
	setInterval("dispTime()",1000);
}

function dispTime(){
	//getting option values
	var num = document.wrdClock.city.selectedIndex;
	var diff = parseInt(document.wrdClock.city.options[num].value);
	
	var japanStandardTime = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })).getTime();
	var {date, time}  = timeSet(japanStandardTime, 0, 1);
	document.getElementById("view_clock").innerHTML = "JST (Tokyo) : "+ date + " "+ time;

	var {date, time} =  timeSet(new Date('2021-11-15 16:00:00'), diff, 0);
	document.getElementById("day15th_pm").innerHTML =  date + " "+ time + "- (15th AM 16:00 (JST))";

	var {date, time} =  timeSet(new Date('2021-11-16 09:00:00'), diff, 0);
	document.getElementById("day16th_am").innerHTML =  date + " "+ time + "- (16th AM 09:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-16 16:00:00'), diff, 0);
	document.getElementById("day16th_pm").innerHTML =  date + " "+ time + "- (16th PM 16:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-17 09:00:00'), diff, 0);
	document.getElementById("day17th_am").innerHTML =  date + " "+ time + "- (17th AM 09:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-17 16:00:00'), diff, 0);
	document.getElementById("day17th_pm").innerHTML =  date + " "+ time + "- (17th PM 16:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-18 09:00:00'), diff, 0);
	document.getElementById("day18th_am").innerHTML =  date + " "+ time + "- (18th AM 09:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-18 16:00:00'), diff, 0);
	document.getElementById("day18th_pm").innerHTML =  date + " "+ time + "- (18th PM 16:00 (JST))";
	
	var {date, time} =  timeSet(new Date('2021-11-19 09:00:00'), diff, 0);
	document.getElementById("day19th_am").innerHTML =  date + " "+ time + "- (19th AM 09:00 (JST))";
	
}

function timeSet(baseClock, diff, flg){
	// setting
	var baseTime = new Date(baseClock).getTime();
	var convert_time = new Date( baseTime + diff*60*60*1000 );
	var year = convert_time.getYear()+1900;
	var month= convert_time.getMonth()+1;
	var day  = convert_time.getDate();
	var hour = convert_time.getHours();
	var minu = convert_time.getMinutes();
	var sec  = convert_time.getSeconds();

	if (hour < 10) hour="0"+hour;
	if (minu < 10) minu="0"+minu;
	if (sec  < 10) sec ="0"+sec;

	//Display the date and time.
	if (flg == 0){
		var wDate = month +"/"+ day;
		var wTime = hour+":" + minu;
		return {date: wDate, time: wTime};
	}
	else{
		var wDate = month +"/"+ day + "/" + year;
		var wTime = hour+":"+minu+":"+sec;
		return {date: wDate, time: wTime};
	}
}