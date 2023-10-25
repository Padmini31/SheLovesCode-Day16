alert("helo");
function show(){
    axios.get("https://api.sampleapis.com/movies/classic").then(function (val){
    r=val.data;
    console.log(r);
    x=0;
    d=document.getElementsByTagName("div");
    l=JSON.stringify(r);//converting to view objects better. 
    rl=r.length;//lent of Array
    while(x<20){
        ob=r[x];
        s=JSON.stringify(r[x]);
        console.log(s,);//converting this object to jon strig. to view it in console. 
        //console.log(s.id);
        d[0].innerHTML=d[0].innerHTML+"<hr/>"+"Id - "+ob.id+" , title - "+ob.title+"."+"<br/>"+"Image - "+"<br/><img src="+ob.posterURL+">"+"<br>"+"imdbId - "+ob.imdbId;
        x++;
    }
    });
}



function take(mycallback,val){
 mycallback(val);

}

function getdata(){
 var d=document.getElementById("t");
 da=d.value;
 take(mycallback,da);
}


function mycallback(v){
  console.log("value from a callback function mycallbackexecuted ,value is");
  console.log(v);
  var pt=document.getElementById("pgt");
  pt.innerHTML="value from a callback function mycallbackexecuted ,value is : "+v;
}
