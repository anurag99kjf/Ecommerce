let currentvalue=1;

function addtoCart(id){
    alert('Item is added to the cart');
    console.log("inside the Eventlistener of cart and its id:",id);
    console.log('click is performed');
    // let parent=document.getElementById(id);
    // parent.style.backgroundColor='red';
    let a={
        Id:id
    };
    let request=new XMLHttpRequest();
    request.open('POST','/addcart');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(a));
    request.addEventListener('load',function(event){
       if(request.status===200)
       {
        console.log("Item is added to the cart from script.js");
       }
     else {
        console.error("Request failed: " + request.status); // handle error
      }
       
    })
}




// console.log(product);
let btn=document.getElementById('load-more');
btn.addEventListener('click',function(){
    console.log('loadmore button is clicked');
    let data={
        currentvalue1:currentvalue
    }
    let request=new XMLHttpRequest();
    request.open('POST','/datarequired');
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify(data));
    request.addEventListener('load',function(){
        if(request.status===200)
        {
            
            let data=JSON.parse(request.responseText);
           if(data.length>0){
            let parent=document.getElementById('main-second-container');
            for(let j=0;j<data.length&&j<5;j++)
            {
                console.log(data[j].productid);
                parent.innerHTML+=`<div class="div-data-container" id=${data[j].productid}>
        <div class="div-img-container">
         <img src=${data[j].imgurl} alt="image1">
        </div>
        <p class="product-name">${data[j].productname}</p>
        <p class="product-price">₹${data[j].price}</p>
     
        <button class="btn btn-primary" onclick="detailsHere('${data[j].productname}','${data[j].imgurl}','${data[j].price}','${data[j].productdetails}')" type="button">View Details</button>
        

        <button class="btn btn-primary" onclick="addtoCart(${data[j].productid})" type="button">Add to cart</button>
    </div>`
    
            }
        }
            currentvalue++;
        }
    })
   
})


// function for showing the details
function detailsHere(name,img,price,details)
{
    console.log('details button is clicked');
    let ele88=document.getElementById('main-second-container');
    ele88.style.display='none';
    let ele=document.getElementById('parent1');
    ele.children[0].style.display='block';
    let ele1=document.getElementById('para');
    ele1.innerHTML=`${name}`;
    let ele2=document.getElementById('child2');
    ele2.children[0].setAttribute('src',img);

    let ele3=document.getElementById('child3');
    ele3.children[0].innerHTML=`${price}`;

    let ele4=document.getElementById('child4');
    ele4.children[0].innerHTML=`${details}`;

}

let btnforclose=document.getElementById('openclose');
btnforclose.addEventListener('click',function(){
    let ele=document.getElementById('parent');
    ele.style.display='none';
    let ele77=document.getElementById('main-second-container');
    ele77.style.display='flex';
})