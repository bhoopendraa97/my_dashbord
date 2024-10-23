function mydel(myid)
{
  let api=`http://localhost:3000/brand/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}



async function Display()
{


 let Table=`<table width="90%" border="1" bgcolor="green" height="50">
              <tr bgcolor="darkgoldenrod" height="50">
                <th> Brand name </th>
                <th> Company Name </th>
                <th> Launch Year </th>
                <th> Price </th>
                <th></th>
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
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">

                    <img src="images/delete_icon.png" width="50" height="50">
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();