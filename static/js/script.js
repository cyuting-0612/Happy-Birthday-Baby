// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}


jQuery(document).ready(function($) {
    $(".left-label").attr('contenteditable', 'false');
    $(".label-value").attr('contenteditable', 'false');
    $(".info-title").attr('contenteditable', 'false');
    $("h3").attr('contenteditable', 'false');
    $("p").attr('contenteditable', 'falsse');
    $(".right-paragraph p").attr('contenteditable', 'false');
    $("#username").attr('contenteditable', 'false');
    $("#persona-tag").attr('contenteditable', 'false');
  
    
    $(".info-unit").filter(function(index) {
        return ($(this).children('ul').length);
    }).children("h2").append('<span class="item-add"></span>');

    $(".info-unit h2").append('<span class="unit-remove"></span>');
    

    var portrait_modal = $('[data-remodal-id=portrait-modal]').remodal();
    $(".portrait").click(function(event) {
        portrait_modal.open();
    });
    $('[data-remodal-id=portrait-modal] button').click(function(event) {
        $(".portrait").css('background-image', 'url("{0}")'.format($("#avatar-url").val()));
    });











 
    $("progress").click(function(event) {
        $(this).attr("value", event.offsetX/$(this).width()/0.8 * $(this).attr("max"));
    });
    // $("*").removeAttr('contenteditable');

});
