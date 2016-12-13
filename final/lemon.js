function Lemon(lemx,lemy,leml,lemw){
this.lemx=lemx;
this.lemy=lemy;
this.leml=leml;
this.lemw=lemw;
}
Lemon.prototype.draw = function () {
  fill(225, 225, 0);
ellipse(this.lemx,this.lemy,this.leml,this.lemw)

};
  if (shot & lemx<= .5*width) {
    //ellipse(lemx, lemy, 25, 15);
    lemx+=20;
  else if(lemx>=.5*width) {
    shot=false;
    lemx=megax+50;
    lemy=megay+25;
  }

  else {
    ellipse(lemx, lemy, 25, 15);
  }
}


//shot (s)
function keyPressed(){
  if (keyCode===83) {
    shot = true;
  lemx=megax+50
  }
}





// shotsout[1,2,3]
// if (shot=true){
// shotsout+1
// }
// if (shot=false) {
// shotsout-1
// }
