// Esta funcion escribe la query segun los parametros que ingresados en el form para los bonos con CodId 0
function escribir() {
    var escribe = document.getElementById("escribe");
    var vtaconvenio = " where NumActoVenta = " + NumActoVenta.value + " and CodIdVentaConvenio =" + CodIdVentaConvenio.value + " and CorrPrestacion =" + CorrPrestacion.value + ";" + "\n" + "\n";
    var bonoprestacion = " where NumActoVenta = " + NumActoVenta.value + " and CodIdVentaConvenio =" + CodIdVentaConvenio.value + " and FolioBono = " + FolioBono.value + " and CorrPrestacion =" + CorrPrestacion.value + ";";
    var prestacion = document.getElementById('prestaciones').value;
    var texto = 'texto';

    //dependiendo del codigo de prestacion seleccionado es el CodIdPrestacionCertificador que se escribe
    switch (prestacion) {
        case '0':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13893, CodPrestacionCertificador = '0306691',CodIdPrestacionHomologo = 47073,CodItemFinanciador = 0 " + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 13893" + bonoprestacion;
            break;

        case '1':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13899, CodPrestacionCertificador = '0306692',CodIdPrestacionHomologo = 47088,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 13899" + bonoprestacion;
            break;

        case '2':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16720, CodPrestacionCertificador = '0305691',CodIdPrestacionHomologo = 59224,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 16720" + bonoprestacion;
            break;

        case '3':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" + bonoprestacion;
            break;

        case '4':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" + bonoprestacion;
            break;

        case '5':
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13965, CodPrestacionCertificador = '0306682',CodIdPrestacionHomologo = 47136,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 13965" + bonoprestacion;
        break;

        default:
            texto = "Selecciona una Prestacion";
            break;

    }

    escribe.innerText = texto;

}

// Esta funcion escribe la query para eliminar la liquidacion erronea ingresada en el form
function eliminar() {
    var eliminar = document.getElementById("eliminar");


    var texto = "DELETE FROM trliquidacion WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM trdocumentosliquidacion WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM treventosliquidacion WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM trestadosliquidacion WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM trdistribucionpago WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM trliqbash WHERE NumLiquidacion = '000" + numLiquidacion.value + "';" + "\n" +
        "DELETE FROM trliquidacionerronea WHERE numliquidacion = '000" + numLiquidacion.value + "';";

    if (
        document.getElementById("numLiquidacion").validity.valueMissing) {
        texto = "Ingrese Numero de Liquidacion a eliminar";
    }

    eliminar.innerText = texto;

}

// Esta funcion escribe la query para el cambio de estado de CME
function estado() {
    var estado = document.getElementById("estado");

    // El estado 16(fuera de flujo) ademas deja la vigencia en 0
    if (Estado.value == "16") {
        var texto = "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
            CtaMedId.value + ", " + EstadoID.value + ", '" + Fecha.value + "', '" + Fecha.value + "', 'op'," + Estado.value + ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" + "\n" +
            "\n" + "UPDATE cfnctamedica SET ctavigente=0 ,EstCod = " + Estado.value + ", FecModEstado = '" + Fecha.value + "' WHERE CtaMedID = " + CtaMedId.value + "; ";
    }
    else {
        var texto = "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
            CtaMedId.value + ", " + EstadoID.value + ", '" + Fecha.value + "', '" + Fecha.value + "', 'op'," + Estado.value + ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" + "\n" +
            "\n" + "UPDATE cfnctamedica SET EstCod = " + Estado.value + ", FecModEstado = '" + Fecha.value + "' WHERE CtaMedID = " + CtaMedId.value + "; ";
    }

    estado.innerText = texto;

}

// Esta funcion escribe la query para cambiar el nombre de los convenios
function nombre() {
    var nombre = document.getElementById("nombre");

    var texto = "UPDATE cfconvenioventa SET NombredelConvenio = '" + nnombre.value + "' WHERE CodIdConvenioVenta = " + CodIdConvenioVenta.value + ";" + "\n" +
        "UPDATE cfconveniopago SET NombredelConvenio = '" + nnombre.value + "' WHERE CodIdConvenioPago = " + CodIdConvenioVenta.value + ";";

    nombre.innerText = texto;

}

// Esta funcion escribe la query para eliminar la LME ingresada en el form
function eliminarlme() {
    var eliminarlme = document.getElementById("eliminarlme");


    var texto = 
    "Para 'folio mal consumido'"+ "\n" +"\n" +
    "DELETE FROM licencia_estado WHERE id_licencia =" + IdLicencia.value + " AND codigo_estado_oficial = 11 ;" + "\n" +
        "DELETE FROM licencia_estado_traza WHERE id_licencia =" + IdLicencia.value + " AND codigo_estado_oficial = 11 ;" + "\n" +
        "DELETE FROM licencia_ccaf WHERE id_licencia =" + IdLicencia.value + ";" + "\n" +
        "UPDATE licencias  SET codigo_estado_oficial = 1 WHERE id_licencia =" + IdLicencia.value + ";"+ "\n" + "\n" + "\n" +
        "******************            solo para   '103|La Ocupacion es 19:OTRO'                       ********************"+ "\n" +"\n" +
        "UPDATE licencias SET ocupacion_otro = ' - ' WHERE id_licencia= "+ IdLicencia.value + ";"+"\n"  ;


    eliminarlme.innerText = texto;

}

//era una funcion simple para copiar todo el contenido del div
// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
// }




//encontre esta funcion que permite subir un archivo csv
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    //caracteres que se permitiran en el nombre del archivo
    var regex = /^([a-zA-Z0-9\s_\\.\-:()])+(.csv|.txt)$/;
    
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var table = document.createElement("table");
                var rows = e.target.result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(";");
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        for (var j = 0; j < cells.length; j++) {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];
                        }
                    }
                }
                var dvCSV = document.getElementById("dvCSV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);
                table.setAttribute('id', 'tabla')
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}


function escribirmass() {
    let escribe = document.getElementById("escribe");
    let texto = 'texto';
    let tabla = $("#tabla").find("tbody tr").text();

    for (i = 1; i < $("tbody tr").length; i++) {
        let NumActoVenta = $("#tabla").find("tbody tr").eq(i).children().first().text();
        let CodIdVentaConvenio = $("#tabla").find("tbody tr").eq(i).children().eq(1).text();
        let FolioBono = $("#tabla").find("tbody tr").eq(i).children().eq(2).text();
        let CorrPrestacion = $("#tabla").find("tbody tr").eq(i).children().eq(3).text();
        let prestacion = $("#tabla").find("tbody tr").eq(i).children().eq(5).text();
        const vtaconvenio = " where NumActoVenta = " + NumActoVenta + " and CodIdVentaConvenio =" + CodIdVentaConvenio + " and CorrPrestacion =" + CorrPrestacion + ";" + "\n" + "\n";
        const bonoprestacion = " where NumActoVenta = " + NumActoVenta + " and CodIdVentaConvenio =" + CodIdVentaConvenio + " and FolioBono = " + FolioBono + " and CorrPrestacion =" + CorrPrestacion + ";" + "\n" + "\n";

        //console.log(prestacion)
        //prestacion venia con espacios en blanco al final...
        switch (prestacion.trim()) {
            case "0306091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13893, CodPrestacionCertificador = '0306691',CodIdPrestacionHomologo = 47073,CodItemFinanciador = 0 " + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13893" + bonoprestacion;
                break;
            case "0306092":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13899, CodPrestacionCertificador = '0306692',CodIdPrestacionHomologo = 47088,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13899" + bonoprestacion;
                break;

            case "0308046":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" + bonoprestacion;
                break;
            case "0305091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16720, CodPrestacionCertificador = '0305691',CodIdPrestacionHomologo = 59224,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 16720" + bonoprestacion;
                break;

            case "0305092":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" + bonoprestacion;
                break;

            case "0306082":
                    texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13965, CodPrestacionCertificador = '0306682',CodIdPrestacionHomologo = 47136,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13965" + bonoprestacion;

            default:
                texto = "Prestacion no reconocida";
                break;
        }
        escribe.innerText += texto;
    }
}


//funcion para descargar el contenido de un div en txt, desafortunadamente, incluye los <br> y se escribe todo en una linea
function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

var fileName = 'cod.txt';

$('#downloadLink').click(function () {
    downloadInnerHtml(fileName, 'escribe', 'text/plain');
});



function CME() {
    var CME = document.getElementById("CME");

    var texto = "\n" + "\n"+"***** USAR SOLO LOS INSERT QUE NO ESTEN CREADOS DE ANTEMANO ***** "+"\n" + "\n"+"\n" + "\n"+
        "INSERT INTO prmlugarpam(CodFinanciador, CodLugar, RutConvenio, extHomLugarConvenio, extSucVenta) VALUES("+
        CodFin.value+ ", " +CodLugar.value+ ", '" +RutConvenio.value + "', '" +HomLugarConvenio.value+ "', '" +CodSucVenta.value+"');"+ "\n" + "\n"+
        "INSERT INTO cmefincnvxml(CodFinanciador, RutConvenio) VALUES("+CodFin.value+", '" +RutConvenio.value + "');"+ "\n" + "\n"+
        "INSERT INTO convenioctamedica(CedPrestador, CodFinanciador, CodLugar, CorrConvenio, NombredelConvenio, CodArancelInterface, HomNumeroConvenio, HomLugarConvenio, AtrCargaCuentas, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion)VALUES('"+
        RutConvenio.value+ "', "+ CodFin.value+ ", " +CodLugar.value+", 1 , '" +NombreConvenio.value+ "', '" +CodArancelInterface.value+ "', '" +HomNumeroConvenio.value+ "', '" +HomLugarConvenio.value+ "', 1 ,'" +FecInicio.value+  "', '" +FecFin.value +  "', 1, '0000000000-0', now() );"+ "\n" + "\n"+
        "INSERT INTO cmlugares(CodLugar, NombreLugar, AtrTiposDireccion, GloDireccion, DepNumero, Email, AtrCodigosRegion, CodComuna, AtrNombrePaises, CodAreaTelefono, NumTelefono, NumFax, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, AtrFinanciadorFull, AtrNombrePaisesCedMod, AtrTiposIdentificacionCedMod, CedModificacion, FecActualizacion) VALUES("+
        CodLugar.value+ ", '" +NombreConvenio.value+"', 1, 'NULL', 0, 'NULL', 0, 0, 56, 'NULL', 'NULL', 'NULL', '"+ FecInicio.value+  "', '" +FecFin.value +  "',1, 2, 56, 1, '0000000000-0', now() );"+"\n" + "\n"+
        "INSERT INTO cmprestadores(CedPrestador, NombrePrestador, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion) VALUES('"+
        RutConvenio.value + "', '" + NombreConvenio.value+ "', '" +FecInicio.value+  "', '" +FecFin.value +  "',1, '0000000000-0', now() );"+ "\n" + "\n"
            
    CME.innerText = texto;
}

function noExiste(){
    var noExiste = document.getElementById("noExiste");
    var ele = document.getElementsByName('entidad');
    for(i=0;i<ele.length; i++){
    if(ele[i].checked)
    var texto ="UPDATE trseguimiento SET AtrEstadoConciliacion =2 WHERE FolioBono = "+FolioBono.value + " and CodIdVentaConvenio =" + CodIdVentaConvenio.value + " and CodEntidad= " + codEntidad.value + " and AtrEntidadConciliar="+ ele[i].value +";"
    } 
    noExiste.innerText = texto;
}


$(function(){
    $("#nav-placeholder").load("nav.html");
  });