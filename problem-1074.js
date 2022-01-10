var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i=1;i<=lines[0];i++){
	if(lines[i]%2!==0 && lines[i]<0){
  	console.log('ODD NEGATIVE');
  }else if(lines[i]%2!==0 && lines[i]>0){
  	console.log('ODD POSITIVE');
  }else if(lines[i]%2===0 && lines[i]<0){
  	console.log('EVEN NEGATIVE');
  }else if(lines[i]%2===0 && lines[i]>0){
  	console.log('EVEN POSITIVE');
  }else{
  	console.log('NULL');
  }
};

