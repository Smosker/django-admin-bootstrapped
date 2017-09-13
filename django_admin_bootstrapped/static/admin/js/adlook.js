/**
 * Created by smosker on 13.09.17.
 */
$(document).ready(function() {
  $('.required').not( $('.inline-related').find('.required') ).append('*').attr("style","color: #FF0000 !important");
  $('.change-form > #container > #content > h1').after('<p style="color:#FF0000 !important"><br/>* denotes required fields.</p>');
});
