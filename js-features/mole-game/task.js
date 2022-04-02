

for(let index = 0; index < 9; index++) {
  getHole = index => document.getElementById(`hole${index}`);

  console.log(getHole(index));
  
  getHole(index).onclick = function(){     
       if (hole.className.includes( 'hole_has-mole' )){

        } else {

        }
    }
}