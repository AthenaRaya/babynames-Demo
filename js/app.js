 
 
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
             
               $("#babyname").html("Your beautiful name is " + r.name ); 
               $("#gender").html(" The name " + r.name + " gender is:  " + r.gender);
            
               
               let usageHtml = ""
               
               // #2
               for (let usage of r.usages) {
                    console.table(usage) // result[0].usages[i]
                    
                    let { usage_full, usage_gender } = usage
                    
                    usageHtml += `
                        <div>
                            ${usage_full}
                        </div>
                    `
                    
                  
               }
               
               
               $("#usages").html("Behind the name of " + r.name + " is" + usageHtml);
        
          } // success
      
      });//ajax  
}             
      
});  // document.ready
   