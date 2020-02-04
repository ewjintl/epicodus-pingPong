
function journalLog() {
  this.journals = [];
  this.currentId = 0;
}
function journal(title, body) {
  this.title = title;
  this.body = body;
}      

journalLog.prototype.addJournal = function(journal) {
  journal.id = this.assignId();
  this.journals.push(journal);
};

journalLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

journal.prototype.wordCount = function(string) {
  return string.split(" ").length;
};

journal.prototype.vowelCount = function(string) {
  var totalVowels =  string.split("");
  for (var i=0; i < totalVowels.length; i++){
    if (["a", "i", "u", "e", "o"].includes(totalVowels[i])) {
      return totalVowels[i].length; 
    }
  }
};
journal.prototype.consoCount = function(string) {
  var totalVowels =  string.split("");
  for (var i=0; i < totalVowels.length; i++){
    if (!["a", "i", "u", "e", "o", "."].includes(totalVowels[i])) {
      return totalVowels[i].length; 
    }
  }
};
journal.prototype.getTeaser = function(string) {
  return string.split(" ").splice(0, 7);
};