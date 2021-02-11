import { Component,OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'test1';
  id;
  li:any; 
  list=[]; 
  showData='No';
  msg;
  constructor(
  private http: HttpClient,

  ){}

  ngOnInit(){

  }
  
  myFunc(id){
	//alert(this.id);
	showloader();
	
	var array = this.id.split(',');
	
	
    console.log("function called, ID:", array);
	this.list = [];
	array.forEach((value, index) => {
	  console.log(value);
	  
	  this.http.get('http://www.omdbapi.com/?i='+value+'&apikey=e0c51fb') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(!Response['Error']){   
	  
        this.list.push(Response); 
        hideloader(); 
      } 
	  else
	  {
		  this.msg = 'List is empty. Please try another search.';
	  }
	 
      
	  this.showData = 'yes';
	  
	  
      //this.list=this.li.list; 
	  }); 
	}); 
	
	
	
	//this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=e0c51fb').subscribe(parameter)
	
	  
		function hideloader(){ 
		  document.getElementById('loading').style.display = 'none';
		}
		function showloader(){ 
		  document.getElementById('loading').style.display = 'block';
		}
	  
  }
}
