
function generateSchedule() {

  var today = getDateNow();
  var hourNow = getHourNow();
  $("#currentDay").append(today);


  var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  for(var j = 0; j < 9; j++){
    if(localStorage.getItem(timeArray[j])==null){
      localStorage.setItem(timeArray[j], "");
    }
  }

  for (var i = 9; i < 18; i++) {
    var timeArea = $("<textArea disabled class='time-block hour col-md-1'>" + timeArray[i-9] + "</textArea>");
    var descriptionArea = $("<textArea class='description "+ "description" + i +" col-md-10' id='"+ timeArray[i-9]+"'>"+localStorage.getItem(timeArray[i-9])+"</textArea>");
    var saveButtonArea = $("<button class='saveBtn col-md-1' onclick='" +"callSaveDescription(\""+ timeArray[i-9]+"\")'></button>");
    $(".container").append(timeArea);
    $(".container").append(descriptionArea);
    $(".container").append(saveButtonArea);
    $(".description"+i).addClass(getPastPresentFuture(i,hourNow));
  }
}

function callSaveDescription(key){
  console.log("callSaveDescription " + key);
  saveDescription(key,$("#"+ key).val());
}

function saveDescription(key, value){
  console.log("saveDescription " + key + " " + value);
  localStorage.setItem(key, value);
}

generateSchedule();

function getDateNow(){
  return moment().format('dddd, MMMM Do YYYY');
}

function getHourNow(){
  return moment().hour();
}

function getPastPresentFuture(hour,hourNow){
  
  if(hour<hourNow){
    return "past";
  }
  else if(hour>hourNow){
    return "future";
  }
  else{
    return "present";
  }
}