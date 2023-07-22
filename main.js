var a=[20,20,30,40,50,23,23,33,23,33];
document.write("a=[20,20,30,40,50,23,33,23,33]"+"<br>"+"<br>");
var b=[];
a.sort();
var temp;
let c=[];
for(let i=0;i<a.length;i++){
	if(a[i]!==temp){
		b.push(a[i]);
		temp=a[i];
	}
	else{
		c.push(a[i]);
	}
	
}
document.write("dublicate value remove the array b="+b+"<br>"+"<br>");
document.write("dublicate value c="+c);