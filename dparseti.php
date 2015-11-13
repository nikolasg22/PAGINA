<?php
//Define transmition schema of  commands and data
//string_data={"tipo":"2","comando":"2","dato":"12.96_0.00_00.00_SO_962.19_00.0_01/01/01_00:00:00","estado":"5.14"}

if(isset($_POST['dsdsaffgfgffgfgfflkldfklfkdlkfdldpaaap']))
{
$opcion=$_POST['dsdsaffgfgffgfgfflkldfklfkdlkfdldpaaap'];
 // connect to mongodb
   $conexion = new MongoClient();
   // select a database
   $consulta = $conexion->datos_meteorologicos;
   // select a collection
   $variables = $consulta->variables;
   // query standart for return all registers
   $cursor=$variables->find();
   //obtiene cantidad documentos
   $cantidad_documentos=$cursor->count();
   //se recorre el cursor segun se requiera
   $i=0;
   foreach($cursor as $doc)
	{
	    $i=$i+1;
     	$dato=(array)$doc;	
		if($i==$cantidad_documentos)break;
	}
			$arr_variables=split('_',$dato['datos']);
			
			//se crea un arreglo con cada uno de los valores de las variables
			
			$arr_variables=array("temperatura"=>$arr_variables[0],"humedad"=>$arr_variables[1],"velocidad_viento"=>$arr_variables[2],"direccion_viento"=>$arr_variables[3],"presion"=>$arr_variables[4],"lluvia"=>$arr_variables[5],"fecha"=>$arr_variables[6],"hora"=>$arr_variables[7]);
					
			//se retorna segun la opcion recibida
			
			if(strcmp($opcion,'dsdsaffgfgffgfgfflkldfklfkdlkcvbdpaaap')==0)echo $arr_variables["temperatura"];
			if(strcmp($opcion,'dsdsaffgfgfqsrgfflkldfklfkdlkfdldpaaap')==0)echo $arr_variables["humedad"];
			if(strcmp($opcion,'dsdsaffgfgffgfgfflkldfklfkdlkfdldpaiop')==0)echo $arr_variables["velocidad_viento"];
			if(strcmp($opcion,'dsdsaffgfgffgfgsdfkldfklfkdlkfdldpaaap')==0)echo $arr_variables["direccion_viento"];
			if(strcmp($opcion,'dsdsaffgfgffgfgfflkldwerfkdlkfdldpaaap')==0)echo $arr_variables["presion"];
			if(strcmp($opcion,'dsdsaffgfgffgfgfflkldfklfkdlkfdtyhdpaa')==0)echo $arr_variables["lluvia"];
			if(strcmp($opcion,'dsdsafmlogffgfgfflkldfklfkdlkfdtyhdpaa')==0)echo $arr_variables["fecha"];
			if(strcmp($opcion,'dsdsaffgfgfrtfgfflkldfklfkdlkfdtyhdpaa')==0)echo $arr_variables["hora"];

}										
?>