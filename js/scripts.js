//Business logic
function Taskname (task) {
  this.taskName = task;
}

//user interface logic
$(document).ready(function(){
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var addTask = $("input#addTask").val();
    var newTaskname = new Taskname(addTask);
    $("ul#list").append("<li><span class='font'>" + newTaskname.taskName + "</span><button id='deleteTaskbutton'>Done</button></li>");
    $("#hide").fadeIn();
    $("ul#list").on("click", "button", function(event){
      event.preventDefault();
      $(this).parent().remove();
    });

  })
});
