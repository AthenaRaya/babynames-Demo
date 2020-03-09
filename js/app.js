 
 
   $(document).ready(function(){
    
     
      // call the searchfunction when button is clicked. 
      $("#searchBtn").on("click", function(){ 
       search()})
      
      $("#keyword").val("Mary"); // place holder
      search();
      
      function search(){
         $.ajax({
           method: "GET",
           url: "https://www.behindthename.com/api/lookup.json",
           data: { "name" : $("#keyword").val(), "key":"at171901241" },
           // https://www.behindthename.com/api/lookup.json?name=Mary&key=at171901241
          
           success(results, status) {
                console.table(results);
                
                let r = results[0]
             
               $("#babyname").html(r.name + " is your name  "); 
               $("#gender").html(r.name + " gender is:  " + r.gender);
               
            //   // #1
            //   for (let i = 0; i < r.usages.length; i++) {
            //       let usage = r.usages[i]
            //   }
               
               let usageHtml = ""
               
               // #2
               for (let usage of r.usages) {
                    console.table(usage) // result[0].usages[i]
                    
                    let { usage_full, usage_gender } = usage
                    // usageHtml += "<div>" + usage_full + ", " + usage_gender + "</div>"
                    usageHtml += `
                        <div>
                            ${usage_full}
                        </div>
                    `
                    
                    // ${} = template
                    // `` = template string
               }
               
               // result[0].usages[i].usage_full
               // result[0].usages[i].usage_gender
               // result[0]["usages"][i]["usage_full"]
               
               
               $("#usages").html("Behind the name is:\n " + usageHtml);
        
          } // success
      
      });//ajax  
}             
      
});  // document.ready
   