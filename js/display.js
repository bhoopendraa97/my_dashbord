

async function dataDisplay()
{
 let Table=`<table width="90%" border="2" bgcolor="green"  height="200">
              <tr bgcolor="darkgoldenrod" height="50"  >
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
       Table+=` <tr>
                  <td> ${key.brandname} </td>
                  <td> ${key.Companyname} </td>
                  <td> ${key.Launchyear} </td>
                  <td> ${key.price} </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();