import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RoutProject';
  users:any;
  ngOnInit(){
    this.title='welcome..'
    //alert('Hi Swarna KARATTI');
    
    this.DelayTitle("good Nice");
  }

   DelayTitle(tit:any){
    setTimeout(() => {
      this.title=tit;
      //alert(this.title);
      //console.log('s');
    }, 1200);
  }
  
}
