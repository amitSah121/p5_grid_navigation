let key_arr = [];
let orange,black;
let nav = false;
let bx,by,bw,bh,num;
let o = [];
let fx,fy,hx,hy;
let hold = false;
let point_updated = false;

function init_controls(){
  strokeWeight(2);
  orange = color(255,100,50);
  black = color(0);
  bx=by=bw=bh=num=-1;
  fx=fy=hx=hy=-1;
}

function update_controls(){
  draw_3_rect(bx,by,bw,bh)
  for(let i=0 ; i<o.length ; i++){
    draw_3_rect(o[i].bx,o[i].by,o[i].bw,o[i].bh,o[i].num);
  }
  controls();
}


function obj(bx,by,bw,bh,num){
  this.bx = bx;
  this.by = by;
  this.bw = bw;
  this.bh = bh;
  this.num = num;
}

function controls(){
  point_updated = false;
  if(key_arr.length != 0){
    if(!hold && !nav && key_arr.shift().match(/[aA]/)){
      nav = true;
      bx = 0;
      by = 0;
      bw = width;
      bh = height;
    }else if(nav){
      let p = key_arr.shift();
      if(p.match(/[123456789]/)){
        num = parseInt(p);
        //draw_3_rect(bx,by,bw,bh,num);
        o.push(new obj(bx,by,bw,bh,num));
        let i = (num-1) % 3;
        let j = (num-i-1)/3;
        bx = bx + i*bw/3;
        by = by + j*bh/3;
        bw=bw/3;
        bh=bh/3;
      }else if(p.match(/[eE]/)){
        if(!hold) nav = false;
        let g = o[o.length-1];
        if(!hold) fx = bx+bw/2;
        if(!hold) fy = by+bh/2;
        if(!hold) point_updated = true;
        if(hold) hx=bx+bw/2;
        if(hold) hy=by+bh/2;
        if(!hold) bx=by=bw=bh=num=-1;
        else {
          bx = 0;
          by = 0;
          bw = width;
          bh = height;
        }
        o = [];
      }else if(p.match(/[hH]/)){
        hold = !hold;
        if(hold){
          let g = o[o.length-1];
          fx = bx+bw/2;
          fy = by+bh/2;
          point_updated = true;
        }
        if(!hold) hx=hy=-1;
        key_arr.push('e');
      }
    }
  }
}

function draw_3_rect(bx,by,bw,bh,num){
  if(bx == -1){
    return;
  }
  let n = 3;
  push();
  noFill();
  for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<3 ; j++){
      stroke(black);
      rect(bx+i*bw/n,by+j*bh/3,bw/3,bh/3);
    }
  }
  let i = (num-1) % 3;
  let j = (num-i-1)/3;
  strokeWeight(2);
  stroke(orange);
  rect(bx+i*bw/n+1,by+j*bh/3+1,bw/3-1,bh/3-1);
  pop();
}


function keyPressed(event){
  key_arr.push(event.key);
  run_extra_key_code(event);
}