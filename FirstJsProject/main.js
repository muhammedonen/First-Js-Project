window.onload = () =>{

  var numbrs = [];

  document.getElementById('send').addEventListener('click', ()=> {
  var x = document.getElementById('nmbr').value;
  
    if (!x) {

      alert("empty");
    }else{

      var html = '';
      document.getElementById('nmbr').value = '';
      numbrs.push(x);

     for (let i = 0; i < numbrs.length; i++) {
        
         html += `<li>( ${numbrs[i]} )</li>`;
     }
     document.getElementById('h3').innerHTML = html;

     var bigNumber = Math.max(...numbrs);
     var smNumber = Math.min(...numbrs);

     document.getElementById('spanB').innerHTML = " bNumber : " + `<b style="color:green">${ bigNumber}</b>`;
     document.getElementById('spanS').innerHTML = " sNumber : "  +`<b style="color:red">${ smNumber}</b>`;


    }
});

}
