// console.log("weallcome");


let loadData=()=>{
    fetch("https://f24-1-mid-1.vercel.app/content")
    .then(res=>res.json())
    // .then(data=>console.log(data) )
    .then(data=>showData(data))
}


const showData=(values)=>{
    const mainDiv = document.getElementById("containers1")
    for(const value of values){
        const { image,category,author,title,description,comment_count,posted_time,isActive}= value;
        let name = value.author.name;
        const lites = name .split(" ")[0];
          // console.log(lites);

        
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="card card-side bg-base-100 shadow-xl gap-5 my-5">
  <figure>
    <img class="h-[200px] w-[300px]"
      src=${image}
      alt="Movie" />
  </figure>
  <div class="card-body">
    <div id=${lites} class="h-5 w-12 rounded-lg bg-lime-600 -mt-7 -ml-8"  onmousover>  </div>
     
    <div class="flex gap-5" > 
    <h2 class="card-title">${category}</h2>
    <h2 class="card-title">${author.name}</h2>
    </div>
     <h2 class="">${title}</h2>
     <h2 class="text-xs ">${description}</h2>

      <div class="flex gap-5" > 
         <h2 class="card-title">${comment_count}</h2>
         <h2 class="card-title">${posted_time}</h2>
    </div>

    <div class="card-actions justify-end">
      <button class="btn btn-primary "  onclick='add(${JSON.stringify(value)})'>Add</button>
    </div>
  </div>
</div>
        `
     
       
        mainDiv.appendChild(div)


        
        
        // const lites11 =document.getElementById("lites")
        // console.log(lites);
        // if(lites===true){
        //     console.log("i am nayem");
            
        //   lites.style.color = "red";
        // }
        // // if(lites===false){
          
        // //   lites.style.color = "green";

        // // }
       
       
      } 
     
    }
  //  function lite11() {
  //   const lites11 =document.getElementById("lights")
  //   console.log(lites11);
    
    
  //  }



const add=(clicked)=>{
    // console.log(clicked);
    // const totel1 =document.getElementById(totel1)
    const { image,category,author,title,description,comment_count,posted_time}= clicked;
    // let name = value.author.name;
    // // const lites = name .split(" ")[0];
    //   console.log(name .split(" ")[0]);

    const container2 =document.getElementById("container2")
    const div2 = document.createElement("div")
    div2.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-xl gap-5 my-5 ">
  <figure>
    <img
      src=${image}
      alt="Shoes" />
  </figure>
   <div class="flex gap-5 ml-12" > 
    <h2 class="card-title">${category}</h2>
    <h2 class="card-title">${author.name}</h2>
    </div>

     <h2 class="text-sm text-center">${title}</h2>
     <h2 class="text-sm text-center">${description}</h2>

       <div class="flex justify-center gap-5 mb-5" > 
         <h2 class="card-title">${comment_count}</h2>
         <h2 class="card-title">${posted_time}</h2>
    </div>
 
</div>

    `
   container2.appendChild(div2)
   const totel1 =document.getElementById("total1")
   const listCount =document.getElementById("container2").childElementCount;
//    console.log(listCount.childElementCount);
   totel1.innerText = listCount;
  


}
loadData()






let loadData2=()=>{
  fetch("https://f24-1-mid-1.vercel.app/blogs")
  .then(rese=>rese.json())
  // .then(datas=>console.log(datas) )
  .then(datas=>showData2(datas))
}


const showData2=(values1)=>{
  const mainDiv2 = document.getElementById("container3")
  for(const value1 of values1){
      const {  name,cover_image,profile_image,title,description,author,designation}= value1;
      // let name2 = value1.author.designation;
      // const lites2 = name2 .split(" ")[0];
      //   console.log(lites2);

      
      const div3 = document.createElement("div")
      div3.innerHTML=`
      
      <div class=" card bg-base-100 w-90 shadow-2xl ">
  <figure>
    <img class="h-[200px] w-[300px]"
      src=${cover_image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div>
    <h2 class="">${author.posted_date}</h2>
    <p>${title}</p>
    <p  class="text-xs">${description}</p>
       
    <div class="flex">
    <div class="mt-3">
    <img class="h-[80px] w-[80px] rounded-[50%]" src=${profile_image} alt="Shoes" />
    </div>

    <div class="flex-col  mt-5 ml-5 ">
    <p>${author.name}</p>
      <p>${author.designation}</p>
    </div>
   
    </div>
    
  </div>
</div>
      `
      mainDiv2.appendChild(div3)
     
  }
}

loadData2()