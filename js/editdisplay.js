async function editSave(id){

    let brandname= document.getElementById("bname").value ;
    let Companyname=document.getElementById("Companyname").value ;
    let Lyear=document.getElementById("Launchyear").value ;
    let bprice=document.getElementById("bprice").value ;
  
    let api=`http://localhost:3000/brand/${id}`;
  
    fetch(api, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
          brandname: brandname,
          Companyname: Companyname,
          Launchyear: Lyear,
          price: bprice
        }
      )
    })
    .then(
      alert("Data updated!!!"))
  }
  
  async function editDisplay(myid)
  {
    let api=`http://localhost:3000/brand/${myid}`
  
    let Obj= await fetch(api);
    let Data=await Obj.json();
    
    myForm=`
            Edit Brand Name: <input type="text" id="bname" value="${Data.brandname}">
            <br><br>
             Edit Company Name: <input type="text" id="Companyname" value="${Data.Companyname}">
            <br><br>
             Edit Launch year: <input type="text" id="Launchyear" value="${Data.Launchyear}">
            <br><br>
             Edit Brand Price: <input type="text" id="bprice" value="${Data.price}">
            <br><br>
            <button onclick="editSave('${Data.id}' )"> Edit Save! </button>
    `
    document.getElementById("demo1").innerHTML=myForm;
  }
  
  
  
  
  async function dataDisplay()
  {
   let Table=`<table width="90%" border="1" bgcolor="green">
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
                     
                     <a href="#" onclick="editDisplay('${key.id}')">
                       <img src="images/edit.png" width="50" height="50">
                     </a>
                     </td>
                  </tr>  
              `
  
     })
   Table+="</table>"
   document.getElementById("demo").innerHTML=Table;
  
  }
  
  dataDisplay();