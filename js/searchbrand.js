document.getElementById("bname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let bname=document.getElementById("bname").value;
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th> Brand name </th>
                <th> Company Name </th>
                <th> Launch Year </th>
                <th> Price </th>
               </tr> 
           `

  let api="http://localhost:3000/brand";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
     let str=key.brandname;
     let myval=str.includes(bname);
     
             
     if (myval==true)
     {
       Table+=` <tr>
                  <td> ${key.brandname} </td>
                  <td> ${key.Companyname} </td>
                  <td> ${key.Launchyear} </td>
                  <td> ${key.price} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}