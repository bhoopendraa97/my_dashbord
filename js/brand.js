
document.getElementById("btnsave").addEventListener("click", bookSave);


async function bookSave(){
    let bnm=document.getElementById("bname").value;
    let cnm=document.getElementById("Companyname").value;
    let lyear=document.getElementById("Lyear").value;
    let price=document.getElementById("bprice").value;


    let api="http://localhost:3000/brand";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "brandname":bnm,
          "Companyname":cnm,
          "Launchyear":lyear,
          "price":price   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");

}