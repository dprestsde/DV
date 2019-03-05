export function myMethod(Xdata,response,ColumnName,Type){
    var myPlot = document.getElementById('MainGraphView');
    console.log("Filter:",Xdata);
    console.log("Data",response);
    console.log("AZ-Phoenix:",response.json_field[ColumnName])
    var X = Object.keys(response.json_field[ColumnName]);
    var Y = Object.values(response.json_field[ColumnName]);
    console.log("X",X);
    console.log("Y",Y);
    
    var trace1 = {
        x:X,
        y:Y,
        type:Type
    }
    var data = [trace1];
    var layout={
        title : 'MyPlot',
        height:700,
        paper_bgcolor: 'rgb(0,0,0',
        plot_bgcolor: 'rgb(0,0,0)'
    }
Plotly.newPlot('MainGraphView', data, layout);

myPlot.on('plotly_relayout', function(data){
    console.log("Clicked",data);
    console.log(data['xaxis.range[0]'],data['xaxis.range[1]']);
   
    var  dataPlot = [];
    console.log("Values");
    console.log(Y[0]);
    console.log(typeof(data['yaxis.range[0]']));
    for(var j=0;j<Xdata.length;j++){
        console.log("###########",Xdata[j]);
        var InXElements = [];
        var InYElements = [];
        X = Object.keys(response.json_field[Xdata[j]]);
        //Y = Object.values(response.json_field[Xdata[j]]);
        var K = response.json_field[Xdata[j]];
                console.log("Xdata:",X);
        console.log("Xdata:",Y);

    for(var i=0;i<X.length;i++)
    {  if(X[i]>data['xaxis.range[0]'] && X[i]< data['xaxis.range[1]'] ){
        InXElements.push(X[i]);
        InYElements.push(K[X[i]]);
        
       }
    }
    // for(var i=0;i<Y.length;i++)
    // {  if(Y[i]>data['yaxis.range[0]'] && Y[i]< data['yaxis.range[1]'] ){
    //     InYElements.push(Y[i]);
    //     }
    // }
    console.log("InXELEMENTS",InXElements);
    console.log("InYELEMENTS",InYElements);
    if(Type=="bar"){
    trace1 = {
        x: InXElements,
        y: InYElements,
        type:'bar',
        name:Xdata[j]
    }}
    else{
        trace1 = {
            x: InXElements,
            y: InYElements,
            type:'scatter',
            mode:'markers+lines',
            name:Xdata[j]
        }
    }
    
    dataPlot.push(trace1);
   }
   layout={
       title : 'MyPlot',
       paper_bgcolor: 'rgb(0,0,0',
       plot_bgcolor: 'rgb(0,0,0)',
       height:700
   }
    Plotly.newPlot('MainGraphView',dataPlot, layout);

 // this.Xdata = this.Xdata.slice(i1,i2+1);


});
}


export function Draw(Xdata,Ydata){
    console.log(Xdata,Ydata);
}


