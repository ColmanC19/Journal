import './styles.css';
import { Entry } from "./../src/journal.js";

$(document).ready(function(){
  $(".formGroup").submit(function(event){
    event.preventDefault();
    var userName = $("#inputName").val();
    var userJournal = $("#inputJournal").val();
    var userEntry = new Entry(userJournal);
    var wordTotal = userEntry.numberOfWords();
    $("#result").text(wordTotal);
  });
});
