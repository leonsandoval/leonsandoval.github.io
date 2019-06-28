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
        document.getElementById("numLiquidacion").validity.valueMissing) {
        texto = "Ingrese Numero de Liquidacion a eliminar";
    }

    eliminar.innerText = texto;

}


function estado() {
    var estado = document.getElementById("estado");



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

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
// }

// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('button', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

function Upload() {
    var fileUpload = document.getElementById("fileUpload");
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

        switch (prestacion.trim()) {
            case "0306091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13893, CodPrestacionCertificador = '0306691',CodIdPrestacionHomologo = 47073,CodItemFinanciador = 0 " + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13893" + bonoprestacion;
                break;
            case "306091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13893, CodPrestacionCertificador = '0306691',CodIdPrestacionHomologo = 47073,CodItemFinanciador = 0 " + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13893" + bonoprestacion;
                break;
            case "0306092":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13899, CodPrestacionCertificador = '0306692',CodIdPrestacionHomologo = 47088,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13899" + bonoprestacion;
                break;
            case "306092":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13899, CodPrestacionCertificador = '0306692',CodIdPrestacionHomologo = 47088,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13899" + bonoprestacion;
                break;
            case "0305091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" + bonoprestacion;
                break;
            case "305091":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" + bonoprestacion;
                break;
            case "0305092":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16720, CodPrestacionCertificador = '0305691',CodIdPrestacionHomologo = 59224,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 16720" + bonoprestacion;
                break;

            case "0308046":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" + bonoprestacion;
                break;
            case "308046":
                texto = "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" + vtaconvenio +
                    "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" + bonoprestacion;
                break;
            default:
                texto = "Prestacion no reconocida";
                break;
        }
        escribe.innerText += texto;
    }
}


