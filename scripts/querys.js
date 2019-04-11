function escribir() {
    var escribe = document.getElementById("escribe");
    var vtaconvenio = " where NumActoVenta = " + NumActoVenta.value + " and CodIdVentaConvenio =" + CodIdVentaConvenio.value + " and CorrPrestacion =" + CorrPrestacion.value + ";" + "\n" + "\n";
    var bonoprestacion = " where NumActoVenta = " + NumActoVenta.value + " and CodIdVentaConvenio =" + CodIdVentaConvenio.value + " and FolioBono = " + FolioBono.value + " and CorrPrestacion =" + CorrPrestacion.value + ";";
    var prestacion = document.getElementById('prestaciones').value;
    var texto = 'texto';

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
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" + bonoprestacion;
            break;

        case '3':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16720, CodPrestacionCertificador = '0305691',CodIdPrestacionHomologo = 59224,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 16720" + bonoprestacion;
            break;

        case '4':
            texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" + vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" + bonoprestacion;
            break;

        default:
            texto = "Selecciona una Prestacion";
            break;

    }

    escribe.innerText = texto;

}


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
        document.getElementById("numLiquidacion").validity.valueMissing){
        texto = "Ingrese Numero de Liquidacion a eliminar";
      }

    eliminar.innerText = texto;

}


function estado() {
    var estado = document.getElementById("estado");

    
    
    if(Estado.value =="16")
    {
        var texto= "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
         CtaMedId.value + ", " + EstadoID.value + ", '" + Fecha.value + "', '" + Fecha.value + "', 'op'," + Estado.value + ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" + "\n" +
         "\n" + "UPDATE cfnctamedica SET ctavigente=0 ,EstCod = " + Estado.value + ", FecModEstado = '" + Fecha.value + "' WHERE CtaMedID = " + CtaMedId.value + "; ";
    }
    else
    {
        var texto = "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
        CtaMedId.value + ", " + EstadoID.value + ", '" + Fecha.value + "', '" + Fecha.value + "', 'op'," + Estado.value + ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" + "\n" +
        "\n" + "UPDATE cfnctamedica SET EstCod = " + Estado.value + ", FecModEstado = '" + Fecha.value + "' WHERE CtaMedID = " + CtaMedId.value + "; ";
    }

    estado.innerText = texto;

}


function nombre() {
    var nombre = document.getElementById("nombre");

    
    var texto = "UPDATE cfconvenioventa SET NombredelConvenio = '" + nnombre.value + "' WHERE CodIdConvenioVenta = " + CodIdConvenioVenta.value + ";" + "\n" +
    "UPDATE cfconveniopago SET NombredelConvenio = '" + nnombre.value + "' WHERE CodIdConvenioPago = " + CodIdConvenioVenta.value + ";";


    nombre.innerText = texto;

}


function eliminarlme() {
    var eliminarlme = document.getElementById("eliminarlme");

    
    var texto = "DELETE FROM licencia_estado WHERE id_licencia =" + IdLicencia.value + " AND codigo_estado_oficial = 11 ;" + "\n" +
    "DELETE FROM licencia_estado_traza WHERE id_licencia =" + IdLicencia.value + " AND codigo_estado_oficial = 11 ;" + "\n" +
    "DELETE FROM licencia_ccaf WHERE id_licencia =" + IdLicencia.value + ";" + "\n" +
    "UPDATE licencias  SET codigo_estado_oficial = 1 WHERE id_licencia =" + IdLicencia.value + ";";
    

    eliminarlme.innerText = texto;

}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }