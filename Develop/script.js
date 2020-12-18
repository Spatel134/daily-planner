function generateSchedule() {

  var today = getDateNow();
  $("#currentDay").append(today);


  var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  for(var j = 0; j < 9; j++){
    console.log("Enter j");
    if(localStorage.getItem(timeArray[j])==null){
      console.log("clear");
      localStorage.setItem(timeArray[j], "");
    }
  }

  for (var i = 0; i < 9; i++) {
    var timeArea = $("<textArea disabled class='time-block hour col-1'>" + timeArray[i] + "</textArea>");
    var descriptionArea = $("<textArea class='description col-10' id='"+ timeArray[i]+"'>"+localStorage.getItem(timeArray[i])+"</textArea>");
    var saveButtonArea = $("<button class='saveBtn col-1' onclick='" +"callSaveDescription(\""+ timeArray[i]+"\")'></button>");
    $(".container").append(timeArea);
    $(".container").append(descriptionArea);
    $(".container").append(saveButtonArea);
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

// function getPastPresentFuture(time){
//   if()

// }