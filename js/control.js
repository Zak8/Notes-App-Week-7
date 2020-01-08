

var control = (function () {

  var newNoteButton = document.getElementById("show-new-note-button");
  var saveNewNote = document.getElementById("save-new-note");
  var noteText = document.getElementById("note-text");
  var submitNewNoteForm = document.getElementById("submit-new-note-form");
  var notesList = new List();

  var init = function () {
      newNoteButton.addEventListener("click", function() {
        submitNewNoteForm.style.display = "block";
        newNoteButton.style.display = "none";
      });
      saveNewNote.addEventListener("click", function() {
        var note = new Note(noteText.value);
        notesList.addNotes(note);
        refreshList();
        submitNewNoteForm.style.display = "none";
        newNoteButton.style.display = "block";
        event.preventDefault();
        noteText.value = "";
      });
      list.addEventListener('click', insert, false);
  };

  function insert(e) {
      var a = e.target.getAttribute("id");
      var element = document.getElementById(a);
      var expandedNote = document.getElementById("note-text"+a);
      if (expandedNote.style.display === "none") {
          expandedNote.style.display = "block";
      }
      else if (expandedNote.style.display === "block") {
          expandedNote.style.display = "none";
      }
  }

  var refreshList = function () {
    previews.innerHTML = "";
    for (var i = 0; i < notesList.getNotes().length; i++) {
      previews.insertAdjacentHTML("beforeend", "<li id="+i+">"+((notesList.getNotes())[i]).getPreview()+"</li>");
      previews.insertAdjacentHTML("beforeend", "<div class='expanded-note' style='display: none;' id='note-text"+i+"''>"+((notesList.getNotes())[i]).getText()+"</div>");
    }
  };

  return {
    init: init
  };

}());
control.init();
