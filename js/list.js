var List = function() {
  this._notes = [];
};

List.prototype.getNotes = function () {
  return this._notes;
};

List.prototype.addNotes = function (note) {
  this._notes.push(note);
};
