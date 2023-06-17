// let s = "";


// function setup(){
//   createCanvas(400,400);
//   s += "Hello world I (not your) 124 124.223";
//   let temp = parse(s);
//   for(let k of Object.keys(parse_type)){
//     for(let j=0 ; j<temp.length ; j++){
//       if(temp[j][0] == parse_type[k]){
//         console.log(temp[j],k)
//       }
//     }
//   }
// }

// function draw(){
//   background(125);
// }



 
// It is the code for using keyboard control
// press 'a' to activate the grid
// then press '1 to 9' to select the cell 
// againg press from '1 to 9' to select further precision
// to end press 'e'

let arr = [];

function setup() {
  createCanvas(400, 400);
  init_controls();
}

function draw() {
  background(220);
  push();
  noFill();
  stroke(color(250,0,250));
  beginShape();
  for(let i=0 ; i<arr.length ; i++){
    vertex(arr[i].x,arr[i].y);
  }
  endShape();
  pop();
  if(point_updated && fx>=0 && fy>=0){
    arr.push(new vector(fx,fy));
  }
  push();
  fill(0,255,0);
  if(fx >0 && fy>0 )ellipse(fx,fy,10);
  if(hold) fill(0,255,255);
  if(fx >0 && fy>0 && hold)ellipse(hx,hy,10);
  pop();
  update_controls();
}

function key_check(event){
  if(event.key.match(/[pP]/)){
    arr.pop();
  }
}

class vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
