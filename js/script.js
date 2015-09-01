/*put your javascript here*/
window.document.body.style.backgroundColor = 'lightgreen';

document.write('<h2>Add Game to Games List</h2><li onclick="newGame()">Add A Game +</li><li onclick="removeGame()">-</li><ul><li>apple</li><li>chess</li><li>poker</li><li>Monopoly</li></ul><form action="demo">type to add:<input type="text" name="add"/><input type="submit" value="Submit"</form>');

function newGame() {

    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + "<li>"+ngame+"</li>";
    //alert(document.getElementsByTagName('ul')[0].length);
};
function removeGame() {
	ngame=prompt("name");
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML.replace("<li>" + ngame+"</li>", '');
    
};