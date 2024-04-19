function githubFilelist(){
				
		var htmlString = "";
	
	  // this creates JS object 'data' with a list of files  
          // change "aptokash/SD330" to your github id and repository name 
		(async () => {
			const response = await fetch("https://api.github.com/repos/paulbergeron1/SD330/contents/");
			const data = await response.json();
    	
	  // loop through the list of files, set "file" to each file name
    		for (let file of data) {
				
				fname = file.name;           
				fpath = "https://paulbergeron1.github.io/SD330/" + fname;  
				
				htmlString += "<p><a href= '" + fpath + "'>" + fname + "</a></p>";
			}
        
		document.getElementById('files').innerHTML = htmlString;
		})()
	
	}