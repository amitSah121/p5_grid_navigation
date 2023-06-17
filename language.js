let parse_type = {};
parse_type.number = 0;
parse_type.string = 1;
parse_type.left_bracket = 2;
parse_type.right_bracket = 3;
parse_type.comma = 4;
parse_type.label = 5;

let mat = [/[0123456789]+.[0123456789]+?/,
           /"[A-Za-z0-9.+=?!~`@#$%^&*(){}\\/\-_]+"/,
          /[({]/,/[)}]/,/,/,/[A-Za-z0-9]+/];

function parse(s){
  let temp_p = [];
  let temp_s = "";
  context = 0;
  for(let i=0 ; i<s.length ; i++){
    if(s[i] != ' ' && s[i] != '\n'){
      temp_s += s[i];
    }
    for(let j=0 ; j<mat.length ; j++){
      if(temp_s.match(mat[j])){
        console.log(temp_s);
        if(j==0){
          if(context == j) continue;
          temp_p.push([parse_type.number,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else if(j==1){
          if(context == j) continue;
          temp_p.push([parse_type.string,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else if(j==2){
          if(context == j) continue;
          temp_p.push([parse_type.left_bracket,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else if(j==3){
          if(context == j) continue;
          temp_p.push([parse_type.right_bracket,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else if(j==4){
          if(context == j) continue;
          temp_p.push([parse_type.comma,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else if(j==5){
          if(context == j) continue;
          temp_p.push([parse_type.label,temp_s.substring(0,temp_s.length-1)]);
          context = j;
          i--;
        }else{
          
        }
       temp_s = ""; 
      }
    }
  }
  return temp_p;
}