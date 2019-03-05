import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {
  visualize:boolean = true;
  constructor() { 
      this.sleepExample();
  }
  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private async sleepExample()
    {
  console.log("Beforep: " + new Date().toString());
  // Sleep thread for 3 seconds
  await this.delay(3000);
  console.log("Afterp:  " + new Date().toString());
  this.Visualize();
   }  
  ngOnInit() {
  }
  Visualize(){
    this.PLOT();
  }
  PLOT(){
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers+lines',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var trace2= {
      x: [1, 2, 3, 4],
      y: [15, 10, 18, 22],
      mode: 'markers+lines',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var trace3 = {
      x: [1, 2, 3, 4],
      y: [5, 12, 18, 8],
      mode: 'markers+lines',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var data = [ trace1, trace2, trace3 ];
    
    var layout = {
      autosize: false,
      width: 400,
      height: 400,
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




    // SECOND GRAPH
    var trace4 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type:'bar',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var trace5 = {
      x: [1, 2, 3, 4],
      y: [15, 10, 18, 22],
      type:'bar',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var trace6 = {
      x: [1, 2, 3, 4],
      y: [5, 12, 18, 8],
      type:'bar',
      marker:{
        color:'rgb(38, 183, 62)'
      }
    };
    
    var data1 = [ trace4, trace5, trace6 ];
    
    var layout = {
      autosize: false,
      width: 400,
      height: 400,
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
  }
 
}
