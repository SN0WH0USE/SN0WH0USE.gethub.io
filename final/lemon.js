function Lemon(lemx,lemy,lems){
  this.lemx=lemx;
  this.lemy=lemy;
  this.lems=lems;


}


Lemon.prototype.draw = function(helmet,bullet,greenman) {
  fill(225, 225, 0);
   ellipse(this.lemx,this.lemy,this.lems*2,this.lems);
  //console.log("der");
  for (var h = 0; h < helmet.length; h++) {
    if (this.lemx >= helmet[h].helmetx && this.lemx<=helmet[h].helmetx+50 && this.lemy >= helmet[h].helmety-5 && this.lemy<=helmet[h].helmety+50 && helmet[h].helmetx>=110){
      helmet[h].visible=false;
    }}


    for (var b = 0; b < bullet.length; b++) {
      if (this.lemx >= bullet[b].bulletx && this.lemx<=bullet[b].bulletx+50 && this.lemy >= bullet[b].bullety-5 && this.lemy<=bullet[b].bullety+50 && bullet[b].bulletx>=110){
        bullet[b].visible=false;
    }}


    for (var g = 0; g < greenman.length; g++) {
      if (this.lemx >= greenman[g].greenx && this.lemx<=greenman[g].greenx+50 && this.lemy >= greenman[g].greeny-5 && this.lemy<=greenman[g].greeny+50 && greenman[g].greenx>=110) {
      greenman[g].visible=false;
    }}
};
//   if (shot & lemx<= .5*width) {
//     //ellipse(lemx, lemy, 25, 15);
//     lemx+=20;
//   else if(lemx>=.5*width) {
//     shot=false;
//     lemx=megax+50;
//     lemy=megay+25;
//   }
//
//   else {
//     ellipse(lemx, lemy, 25, 15);
//   }
// }
//
//
//





// shotsout[1,2,3]
// if (shot=true & shotout<3){
// shotsout+1
// }
// if (shot=false) {
// shotsout-1
// }
