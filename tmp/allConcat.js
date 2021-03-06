$(document).ready(function() {
  $('.journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new entry(title, body);
    $('#display').html('<p>Your entry has been created</p><h2>Title:'+title+'</h2><p>'+body+'</p>');
    debugger;
    $('#stats').html(
      '<p>Words:'+newEntry.wordCount()+
      '<br>'+
      '<p>Characters: '+newEntry.charCount()+
      '<p>Date Created: '+newEntry.dateCreated);
  })
})

var moment = require('moment');

function entry(title, body) {
  this.title = title;
  this.body = body;
  this.dateCreated = moment().format('MMMM Do YYYY, h:mm a');
}

entry.prototype.wordCount = function() {
  var bodyArray = this.body.split(" ");
  var bodyWordCount = bodyArray.length;
  return bodyWordCount;
}

entry.prototype.charCount = function() {
  var bodyArray = this.body.split("");
  var bodyCharCount = bodyArray.length;
  return bodyCharCount;
}

entry.prototype.getDate = function() {
  return this.dateCreated();
}
