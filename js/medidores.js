//para obtener los datos medidos
function obtenerDatos(que)
{
	
	   var data_file = "http://localhost/dparseti.php";
	   var http_request = new XMLHttpRequest();
	   var response;
	   var variable_pedida;
	   try{
		  // Opera 8.0+, Firefox, Chrome, Safari
		  http_request = new XMLHttpRequest();
	   }catch (e){
		  // Internet Explorer Browsers
		  try{
			 http_request = new ActiveXObject("Msxml2.XMLHTTP");
		  }catch (e) {
			 try{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			 }catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			 }
		  }
	   }
	   http_request.onreadystatechange  = function(){
		  if (http_request.readyState == 4  )
		  {
			response=http_request.responseText;
			//retorna la variable pedida segun el valor de que
			variable_pedida=devolverDatos(que,response);
			//muestra segun el valor de que
			mostrar(que,variable_pedida);
		   } 
	   }
	   //de acuerdo a la variable que se genera la opcion
	   if(que==1)var opcion="dsdsaffgfgffgfgfflkldfklfkdlkcvbdpaaap";
	   if(que==2)var opcion="dsdsaffgfgfqsrgfflkldfklfkdlkfdldpaaap";
	   if(que==3)var opcion="dsdsaffgfgffgfgfflkldfklfkdlkfdldpaiop";
       if(que==4)var opcion="dsdsaffgfgffgfgsdfkldfklfkdlkfdldpaaap";
       if(que==5)var opcion="dsdsaffgfgffgfgfflkldwerfkdlkfdldpaaap"; 
	   if(que==6)var opcion="dsdsaffgfgffgfgfflkldfklfkdlkfdtyhdpaa";
	   if(que==7)var opcion="dsdsafmlogffgfgfflkldfklfkdlkfdtyhdpaa";
	   if(que==8)var opcion="dsdsaffgfgfrtfgfflkldfklfkdlkfdtyhdpaa";
	 
	 http_request.open("POST", data_file, true);
     http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     http_request.send("dsdsaffgfgffgfgfflkldfklfkdlkfdldpaaap="+opcion);
}

//funcion auxiliar para retornar datos en base a los datos de obtenerDatos
function devolverDatos(que,valor)
{
	if(que==1)
	{
	var temperatura=valor;
	return temperatura;
	}
	if(que==2)
	{
	var humedad=valor;
	return humedad;
	}
	if(que==3)
	{
	var velocidadViento=valor;
	return velocidadViento;
	}
	if(que==4)
	{
	var direccionViento=valor;
	return direccionViento;
	}
	if(que==5)
	{
	var presion=valor;
	return presion;
	}
	if(que==6)
	{
	var lluvia=valor;
	return lluvia
	}
	if(que==7)
	{
	var fecha=valor;
	return fecha;
	}
	if(que==8)
	{
	var hora=valor;
	return hora;
	}
}

//para las animaciones de la presion direccion del viento y las demas variables en la seccion monitoreo
function mostrar_leyenda_lluvia(val)
{

var leyenda=document.getElementById("leyenda_lluvia");
leyenda.innerHTML= val + " mm";
}
function mostrar_lluvia(v) {
  var canvas = document.getElementById('lluvia');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
	
	ctx.font = "bold 12px sans-serif";
	
	
	ctx.fillStyle = "#FFF";
    ctx.fillRect(25,25,100,600);
	ctx.fillStyle= "#3247E8";
    ctx.fillRect(25,25,100,260);
	
	//para variar la lluvia para arriva max 260 llv - y para abajo llv + max 5
	var aux=(v/3);
	var cantidad_lluvia=(240-v-aux);
    ctx.fillStyle = "#1C1C1C";
	ctx.fillRect(25,25,100,cantidad_lluvia);
	
	ctx.strokeStyle= "#FFF";
    ctx.strokeRect(25,25,100,600);
	ctx.fillStyle= "#FFF";
    ctx.fillText("15",1,250);
	ctx.fillRect(25,45,10,5);
    ctx.fillText("30",1,230);
	ctx.fillRect(25,65,10,5);
	ctx.fillText("45",1,210);
    ctx.fillRect(25,85,10,5);
	ctx.fillText("60",1,190);
    ctx.fillRect(25,105,10,5);
	ctx.fillText("75",1,170);
    ctx.fillRect(25,125,10,5);
	ctx.fillText("90",1,150);
    ctx.fillRect(25,145,10,5);
	ctx.fillText("105",1,130);
	ctx.fillRect(25,165,10,5);
	ctx.fillText("120",1,110);
	ctx.fillRect(25,185,10,5);
	ctx.fillText("135",1,90);
	ctx.fillRect(25,205,10,5);
	ctx.fillText("150",1,70);
	ctx.fillRect(25,225,10,5);
	ctx.fillText("165",1,50);
	ctx.fillRect(25,245,10,5);
  }
}
function mostrar_leyenda_temperatura(val)
{

var leyenda=document.getElementById("leyenda_temperatura");
leyenda.innerHTML= val + " ºC";
}
function mostrar_temperatura(v) {
  var canvas = document.getElementById('temperatura');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
	
	ctx.font = "bold 12px sans-serif";

	/*
	ctx.fillStyle = "#FFF";
    ctx.fillRect(25,25,100,600);
	ctx.fillStyle= "#3247E8";//Color del valor de la temperatura de acuerdo a la misma
    ctx.fillRect(25,25,100,260);
	*/
	
   //para variar la temperatura para arriva max 260 tmp - y para abajo tmp + max 5 
	var aux=(v/0.333);
	var temp=(180-v-aux);
	//ctx.fillStyle = "#1C1C1C";
    //ctx.fillRect(25,25,100,temp);//Valores
	
	
	
	if (v>12)
		{
		if (v>32) 
			{
			ctx.fillStyle = "#FFF";
			ctx.fillRect(25,25,100,600);
			ctx.fillStyle = "#E60404";//Color del valor de la temperatura de acuerdo a la misma
			ctx.fillRect(25,25,100,260);
			ctx.fillStyle = "#1C1C1C";
			ctx.fillRect(25,25,100,temp);//Valores
			document.getElementById("rango_temperatura").innerHTML= "Caliente";
			}
		else 
			{
			ctx.fillStyle = "#FFF";
			ctx.fillRect(25,25,100,600);
			ctx.fillStyle = "#FF9B03";//Color del valor de la temperatura de acuerdo a la misma
			ctx.fillRect(25,25,100,260);
			ctx.fillStyle = "#1C1C1C";
			ctx.fillRect(25,25,100,temp);//Valores
			document.getElementById("rango_temperatura").innerHTML= "Normal";	
			}
		 }
	
	if (v<12) 
		{
		ctx.fillStyle = "#FFF";
		ctx.fillRect(25,25,100,600);
		ctx.fillStyle = "#3247E8";//Color del valor de la temperatura de acuerdo a la misma
		ctx.fillRect(25,25,100,260);
		ctx.fillStyle = "#1C1C1C";
		ctx.fillRect(25,25,100,temp);//Valores
		document.getElementById("rango_temperatura").innerHTML= "Frio";
		
		}

 
	
	
	ctx.strokeStyle= "#FFF";
    ctx.strokeRect(25,25,100,600);
	ctx.fillStyle= "#FFF";
	ctx.fillText("-10",1,250);
    ctx.fillRect(25,45,10,5);
	ctx.fillText("-5",1,230);
    ctx.fillRect(25,65,10,5);
	ctx.fillText(" 0",1,210);
    ctx.fillRect(25,85,10,5);
	ctx.fillText(" 5",1,190);
    ctx.fillRect(25,105,10,5);
	ctx.fillText("10",1,170);
    ctx.fillRect(25,125,10,5);
	ctx.fillText("15",1,150);
    ctx.fillRect(25,145,10,5);
	ctx.fillText("20",1,130);
	ctx.fillRect(25,165,10,5);
	ctx.fillText("25",1,110);
	ctx.fillRect(25,185,10,5);
	ctx.fillText("30",1,90);
	ctx.fillRect(25,205,10,5);
	ctx.fillText("35",1,70);
	ctx.fillRect(25,225,10,5);
	ctx.fillText("40",1,50);
	ctx.fillRect(25,245,10,5);
  }
}
function mostrar_leyenda_velocidad_viento(val)
{

var leyenda=document.getElementById("leyenda_velocidad_viento");
leyenda.innerHTML= val + " Km/h";
}
function mostrar_velocidadviento(v)
{
var canvas = document.getElementById('velocidadViento');
  if (canvas.getContext){
    var cxt = canvas.getContext('2d');
   cxt.beginPath() //Círculo de la esfera: iniciar ruta:
   cxt.arc(100,105,90,0,2*Math.PI,false); //círculo de la esfera
   cxt.strokeStyle='#66E0F5'; //color de línea
   cxt.fillStyle="#1C1C1C"; //color de fondo
   cxt.lineWidth=3; //grosor de línea
   cxt.stroke(); //dibuja línea
   cxt.fill(); //rellena figura
    //para dibujar la manesilla
	cxt.beginPath();
	cxt.moveTo(100,105);//Valores determinados 100,105
	cxt.lineTo(75,175);//Valores determinados 130,155
	cxt.stroke();  	
	//para dibujar unidades media
	cxt.beginPath();
	cxt.moveTo(100,15);
	cxt.lineTo(100,20);
	cxt.stroke();
    cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("80",95,35);
	cxt.beginPath();
	cxt.moveTo(100,195);
	cxt.lineTo(100,190);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("0",95,185);
	cxt.beginPath();
	cxt.moveTo(10,105);
	cxt.lineTo(15,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("40",20,110);
	cxt.beginPath();
	cxt.moveTo(190,105);
	cxt.lineTo(185,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("120",170,110);		
	cxt.beginPath();
	cxt.moveTo(170,45);
	cxt.lineTo(165,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("100",145,60);		
	cxt.beginPath();
	cxt.moveTo(35,55);
	cxt.lineTo(30,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("60",40,60);		
	cxt.beginPath();
	cxt.moveTo(40,165);
	cxt.lineTo(35,170);
	cxt.stroke();
    cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("20",45,160);		
	cxt.beginPath();
	cxt.moveTo(160,165);
	cxt.lineTo(165,170);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("140",150,160);	
				}
}
function mostrar_leyenda_direccion_viento(val)
{

var leyenda=document.getElementById("leyenda_direccion_viento");
leyenda.innerHTML= val;
}
function mostrar_direccionviento(val)
{
var manesilla_x,manesilla_y;
/*
valores val  valor para manesilla
N    100,20
S    100,190
E	  185,105	
O    15,105
NO  30,50 
NE  165,50
SO   35,170
SE   165,170
*/
//para convertir val a las coordenadas para ubicar la manesilla
switch(val)
{
case "N":
manesilla_x=100;
manesilla_y=20;
break;
case "S":
manesilla_x=100;
manesilla_y=190;
break;
case "E":
manesilla_x=185;
manesilla_y=105;
break;
case "O":
manesilla_x=15;
manesilla_y=105;
break;
case "NO":
manesilla_x=30;
manesilla_y=50;
break;
case "NE":
manesilla_x=165;
manesilla_y=50;
break;
case "SO":
manesilla_x=35;
manesilla_y=170;
break;
case "SE":
manesilla_x=165;
manesilla_y=170;
break;
}
var canvas = document.getElementById('direccionViento');
  if (canvas.getContext){
    var cxt = canvas.getContext('2d');
   cxt.beginPath() //Círculo de la esfera: iniciar ruta:
   cxt.arc(100,105,90,0,2*Math.PI,false); //círculo de la esfera
   cxt.strokeStyle='#66E0F5'; //color de línea
   cxt.fillStyle="#1C1C1C"; //color de fondo
   cxt.lineWidth=3; //grosor de línea
   cxt.stroke(); //dibuja línea
   cxt.fill(); //rellena figura
   
   
   //para dibujar la manesilla
	cxt.beginPath();
	cxt.moveTo(100,105);
	//para orientar la manesilla a la posicion segun val
	cxt.lineTo(manesilla_x,manesilla_y);
	cxt.stroke();  	
	
	
	//para dibujar unidades media
	cxt.beginPath();
	cxt.moveTo(100,15);
	cxt.lineTo(100,20);
	cxt.stroke();
    cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("N",95,35);
	cxt.beginPath();
	cxt.moveTo(100,195);
	cxt.lineTo(100,190);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("S",95,185);
	cxt.beginPath();
	cxt.moveTo(10,105);
	cxt.lineTo(15,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("O",20,110);
	cxt.beginPath();
	cxt.moveTo(190,105);
	cxt.lineTo(185,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("E",170,110);		
	cxt.beginPath();
	cxt.moveTo(170,45);
	cxt.lineTo(165,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("NE",145,60);		
	cxt.beginPath();
	cxt.moveTo(35,55);
	cxt.lineTo(30,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("NO",40,60);		
	cxt.beginPath();
	cxt.moveTo(40,165);
	cxt.lineTo(35,170);
	cxt.stroke();
    cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("SO",45,160);		
	cxt.beginPath();
	cxt.moveTo(160,165);
	cxt.lineTo(165,170);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("SE",150,160);		
							}
}
function mostrar_leyenda_presion(val)
{

var leyenda=document.getElementById("leyenda_presion");
leyenda.innerHTML= val + " hPA";
}
function mostrar_presionatmosferica(v)
{
var canvas = document.getElementById('presionAtmosferica');
      var cxt = canvas.getContext('2d');
      cxt.beginPath();
      cxt.arc(100, 115, 98, 0, Math.PI, true);
      cxt.closePath();
      cxt.lineWidth = 2;
      cxt.strokeStyle= '#66E0F5';
      cxt.stroke();
	  cxt.fillStyle = '#1C1C1C';
      cxt.fill();
   //para dibujar la manesilla
	cxt.beginPath();
	cxt.moveTo(100,105);
	//cxt.lineTo(30,95);
	//cxt.stroke();  	
	
	
	//0%->line.to(35,105)
	//25%->line.to(35,50)
	//50%->line.to(100,50)
	//75%->line.to(150,50)
	//100%->line.to(150,105)
	//var valor=1040;
	
	
	if (v<=980)
		{
		var va=v-960;
		var aux=va*2.7;
		cxt.lineTo(35,105-aux);
		cxt.stroke();
		}
	
	if (v>=1020)
		{
		var va=v-1020;
		var aux=va*2.7;
		cxt.lineTo(150,50+aux);
		cxt.stroke();		
		}
	
	if (v>980 && v<1020)
		{
		var va=v-980;
		var aux=va*3.2;
		cxt.lineTo(35+aux,50);
		cxt.stroke();
		}
	
	
	
	//para dibujar unidades media
	cxt.beginPath();
	cxt.moveTo(100,20);
	cxt.lineTo(100,30);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("1000",90,45);
	cxt.beginPath();
	cxt.moveTo(10,105);
	cxt.lineTo(20,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("960",35,105);
	cxt.beginPath();
	cxt.moveTo(190,105);
	cxt.lineTo(180,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("1040",145,110);	
	cxt.beginPath();
	cxt.moveTo(160,45);
	cxt.lineTo(155,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("1020",130,60);
	cxt.beginPath();
	cxt.moveTo(40,55);
	cxt.lineTo(35,50);
	cxt.stroke();	
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("980",45,60);
}
function mostrar_leyenda_humedad(val)
{

var leyenda=document.getElementById("leyenda_humedad");
leyenda.innerHTML= val + " %";
}
function mostrar_humedad(v)
{
var canvas = document.getElementById('humedad');
    var cxt = canvas.getContext('2d');
    cxt.beginPath();
    cxt.arc(100, 115, 98, 0, Math.PI, true);
    cxt.closePath();
    cxt.lineWidth = 2;
    cxt.strokeStyle = '#66E0F5';
    cxt.stroke();
	cxt.fillStyle = '#1C1C1C';
    cxt.fill();
	
	//para dibujar la manesilla
	cxt.beginPath();
	cxt.moveTo(100,105);
	//cxt.lineTo(35,105-aux);
	//cxt.stroke();
	
	//0%->line.to(35,105)
	//25%->line.to(35,50)
	//50%->line.to(100,50)
	//75%->line.to(150,50)
	//100%->line.to(150,105)
	
	if (v<=25)
		{
		var aux=v*2.2;
		cxt.lineTo(35,105-aux);
		cxt.stroke();
		}
	if (v>=75)
		{
		var aux=v*2.2;
		cxt.lineTo(150,50+aux-165);
		cxt.stroke();		
		}
	if (v>25 && v<75)
		{
		var aux=v*1.3;
		cxt.lineTo(35+aux,50);
		cxt.stroke();
		}


  	
	//para dibujar unidades media
	cxt.beginPath();
	cxt.moveTo(100,20);
	cxt.lineTo(100,30);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("50",90,45);
	cxt.beginPath();
	cxt.moveTo(10,105);
	cxt.lineTo(20,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("0",35,105);
	cxt.beginPath();
	cxt.moveTo(190,105);
	cxt.lineTo(180,105);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("100",150,110);	
	cxt.beginPath();
	cxt.moveTo(160,45);
	cxt.lineTo(155,50);
	cxt.stroke();
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("75",135,60);
	cxt.beginPath();
	cxt.moveTo(40,55);
	cxt.lineTo(35,50);
	cxt.stroke();	
	cxt.fillStyle="#FFF";
    cxt.font = "bold 14px sans-serif";
    cxt.fillText("25",45,60);
}
function mostrar_leyenda_fecha(val)
{
var leyenda=document.getElementById("leyenda_fecha");
leyenda.innerHTML= val;
}
function mostrar_leyenda_hora(val)
{
var leyenda=document.getElementById("leyenda_hora");
leyenda.innerHTML= val + " Hrs";
}
//Funcion highcharts velocidad del viento
function mostrar_grafico_velocidad_viento(vel_viento) 
	{
var velocidad_viento=vel_viento;

//debug

//var valor=parseInt("vel_viento");
var valor=Number(vel_viento);

   
   $('#container-velocidad').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
		
		
        title: {
            text: 'Velocidad del viento'
        },
		
		
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },
		
        series: [{
            name: 'Velocidad',
            data: [valor],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    }
    );
};
//Funcion highcharts humedad
function mostrar_grafico_humedad(hum) 
	{
	var valor=Number(hum);

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            /*title: {
                text: '%'
            }*/
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Speed',
            data: [valor],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:white' + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">%</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    }));
	
	/*
    // The RPM gauge
    $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5,
            title: {
                text: 'RPM'
            }
        },

        series: [{
            name: 'RPM',
            data: [1],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
	*/


};
//Funcion highcharts presion
function mostrar_grafico_presion(pre) 
	{
	var valor=Number(pre);

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 960,
            max: 1040,
            /*title: {
                text: '%'
            }*/
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Speed',
            data: [valor],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:white' + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">hPA</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    }));
	
	/*
    // The RPM gauge
    $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5,
            title: {
                text: 'RPM'
            }
        },

        series: [{
            name: 'RPM',
            data: [1],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
	*/


};
function mostrar(que,val_variable)
{
	switch(que)
	{
	case 1:
	mostrar_leyenda_temperatura(val_variable);
	mostrar_temperatura(val_variable);
	break;
	case 2:
	mostrar_leyenda_humedad(val_variable);
	//mostrar_humedad(val_variable);
	mostrar_grafico_humedad(val_variable);
	break;
	case 3:
	mostrar_leyenda_velocidad_viento(val_variable);
	mostrar_grafico_velocidad_viento(val_variable);
	//mostrar_velocidadviento(val_variable);
	break;
	case 4:
	mostrar_leyenda_direccion_viento(val_variable);
	mostrar_direccionviento(val_variable);
	break;
	case 5:
	mostrar_leyenda_presion(val_variable);
	//mostrar_presionatmosferica(val_variable);
	mostrar_grafico_presion(val_variable);
	break;
	case 6:
	mostrar_leyenda_lluvia(val_variable);
	mostrar_lluvia(val_variable);
	break;
	case 7:
	mostrar_leyenda_fecha(val_variable);
	break;
	case 8:
	mostrar_leyenda_hora(val_variable);
	break;
	}
}
//para que inicie las funciones al cargar la pagina			
			window.onload = function(){
			obtenerDatos(1);
			obtenerDatos(2);
			obtenerDatos(3);
			obtenerDatos(4);
			obtenerDatos(5);
			obtenerDatos(6);
			obtenerDatos(7);
			obtenerDatos(8);
			};
				
