document.getElementById("btn1").addEventListener("click", searchByAuthor);


async function  searchByAuthor()
{
    let Table=`<table border="1" width="70%" bgcolor="pink">
               <tr bgcolor="orange">
                 <td> Brand name  </td>
                 <td> Company name  </td>
                 <td> Launch Year  </td>
                 <td> Price  </td>
               </tr>  
                 `
    let txtval= document.getElementById("txt1").value;
    let api=`http://localhost:3000/brand/?authorname=${txtval}`;

    let Obj= await  fetch(api);
    let Data= await Obj.json();               
    console.log(Data);

    Data.map((key)=>{
        Table+=`<tr>
                    <td> ${key.brandname} </td>
                    <td> ${key.Companyname} </td>
                    <td> ${key.Launchyear} </td>
                    <td> ${key.price} </td>
                 </tr>         
               `
    })

     Table+="</table>";

     document.getElementById("demo").innerHTML=Table;
}