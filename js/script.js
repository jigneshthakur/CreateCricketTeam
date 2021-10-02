
var teamplayers = 5;
$(document).ready(function($){

  $("#addbtn").click(function(){
  
    var addteam = ($('#addteam').val());
    var playerlist = teamplayers *  addteam ;

    
    var text = "";
    for (let i = 1; i <= playerlist; i++) {
      text += "<ul style='list-style-type:none;' class='draggable'><li class='ui-widget-content' draggable='true' style= 'padding: 5px;'>Player " + i + "</li></ul>";
    }
    $('#allplayerlist').html(text)
    document.getElementById("allplayerlist").style.display = "block";

    var inputs = '';
    for(var j = 1; j <= addteam; j++){
      inputs += `<h3 >Team:` + j +`</h3><ul class="droppable" style="list-style-type:none;border: 2px solid black; height: 200px; width: 200px; background-color: gray; margin-top:10px;">
      <li class="droppable" ></li></ul></br>`
    }
    $('#teamplayerlist').html(inputs)
    
    document.getElementById("alllist").style.display = "block";


    $('.ui-widget-content').draggable({
      revert: 'invalid',
      stop: function(){
          $(this).draggable('option','revert','invalid');
      }
    });

    $('.droppable').droppable({
      drop: function(event,ui){
          var $this = $(this);
          
          if($this.find('.ui-widget-content').length >= 5){
              ui.draggable.draggable('option','revert',true);
              alert("Team is full");
              return;
          }

          ui.draggable.appendTo($this).css({
              top: '0px',
              left: '0px'
          });
      }
    });

});
});
