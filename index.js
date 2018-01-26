var displayError = () => $('#errors').html("Error: please try again")

var renderCommit = (commit) => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}

$(document).ready(function (){
});
