import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { myMethod,Draw } from './test';

class CustomHTMLElement extends HTMLElement{
  constructor(){
    super();
  }
  on(event_type,cb){

  }
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})


export class DemoComponent implements OnInit {
  value: boolean= true;
  response :any = null;
  resVal : boolean = false;
  Search : string = "";
  selectedFile :File = null
  visualize: boolean = false;
  initial: any;
  visVal: boolean;
  list: any;
  filter: any;
  title: string;
  Xdata: any;
  Ydata: any;
  res: any;
  MainView : string = null;
  height:number=400;
  width: number=400;
  myPlot: any = document.getElementById('myTestDiv');
  MainGraph: boolean =false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    this.resVal = true;
    this.http.get('http://localhost:8000/api/?search='+ this.Search)
    .subscribe((response) => {
    this.response = response;
    console.log(this.response)
  })
   } 
   onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
   }
  
   onUpload(){
    
    const fd = new FormData();
    fd.append("datafile",this.selectedFile);
    fd.append("name","Deepak");
    console.log("Upload clicked")
    this.http.post<any>('http://localhost:8000/postdata',
         fd
        //  ,
        //  {
        //       headers: new HttpHeaders().set('Content-Type','multipart/form-data')
        //   }
          ).subscribe(response => {
            this.response=response;
          });
  }
  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private async sleepExample()
    {
  console.log("Beforep: " + new Date().toString());
  // Sleep thread for 3 seconds
  await this.delay(500);
  console.log("Afterp:  " + new Date().toString());
  this.PLOT();
  this.BarPlot();
  console.log("Filter", this.filter);
  console.log("Response:",this.res);


   }  


   private async sleepExample1(res)
   {
 
 await this.delay(500);
 
 myMethod(this.filter,this.res,this.title,res);


  }  
  Reset(){
    this.value=true;
    this.visualize=false;
  }
  Visualize(res){
    this.res = res;
    console.log("RESPONSE:",res.name);
    this.visualize= true;
    this.value=false;
    this.initial = res;
    this.visVal=true;
    this.list = res.json_field;
    this.filter =Object.keys(this.list);
    console.log(this.filter);
    const datax = this.filter[0];

    this.title = datax;
    console.log("res",this.title);
    console.log("datax",datax);
    this.Xdata = Object.keys(res.json_field[datax]);
    this.Ydata = Object.values(res.json_field[datax]);
    console.log("XDATA:",this.Xdata);
    console.log("YDATA:",this.Ydata);
    this.sleepExample();

  }

  Reset1(){
    this.visualize = true;
    this.MainGraph = false;
    this.Visualize(this.res);
  }
  FilterAdded(res){
    console.log(res);
    this.title = res;
  const datax: any = res;
  console.log(datax);
  console.log(this.list)
  this.Xdata = Object.keys(this.list[datax]);
  
  this.Ydata= Object.values(this.list[datax]);
  this.PLOT();
  this.BarPlot();
  

  }
  PLOT(){
    var trace1 = {
      x: this.Xdata,
      y: this.Ydata,
      mode: 'markers+lines',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
 
    var data = [ trace1];
    
    var layout = {
      title: this.title,
      xaxis:{title:"Your Unique Id"},
      yaxis:{title: this.title},
      autosize: false,
      width: this.width,
      height: this.height,
      margin: {
        l: 50,
        r: 50,
        b: 100,
        t: 100,
        pad: 4
      },
      paper_bgcolor: 'rgb(0,0,0',
      plot_bgcolor: 'rgb(0,0,0)'
    };
    Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});
    if(this.MainView === "mainDiv"){
    Plotly.newPlot(this.MainView, data, layout, {displayModeBar: false});
    }
    this.height = 400;
    this.width = 400;

  }
  ScatterPlot(res){
    this.MainView=res;
    this.height = 650;
    this.width = 650;
    this.PLOT();
  }
   barPlot(res){
    // this.MainView=res;
    // this.height = 650;
    // this.width = 650;
    // this.BarPlot();
    this.visualize = false;
    this.MainGraph = true;
    this.sleepExample1(res);


  }
  BarPlot(){
    // SECOND GRAPH
    var trace4 = {
      x: this.Xdata,
      y:this.Ydata,
      type:'bar',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
   
    var data1 = [ trace4];
    
    var layout = {
      title: this.title,
      xaxis:{title:"Your Unique Id"},
      yaxis:{title: this.title},
      autosize: false,
      width: this.width,
      height: this.height,
      margin: {
        l: 50,
        r: 50,
        b: 100,
        t: 100,
        pad: 4
      },
      paper_bgcolor: 'rgb(0,0,0',
      plot_bgcolor: 'rgb(0,0,0)'
    };
    Plotly.newPlot('myDiv2', data1, layout, {displayModeBar: false});
    if(this.MainView === "mainDiv"){
      Plotly.newPlot(this.MainView, data1, layout, {displayModeBar: false});
      }
      this.height = 400;
      this.width = 400;
  }

  ViewPlot(){
    myMethod(this.filter,this.res,this.title,"bar");
  }  

}
