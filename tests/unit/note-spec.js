var testText = "this is my first note";
var testPreview = "this is my first not";
var note1 = new Note(testText);


// run these tests:
testExists(note1, 'note1');
testResult(note1.getText(), testText, 'note1.getText()');
testResult(note1.getPreview(), testPreview, 'note1.getPreview()');
