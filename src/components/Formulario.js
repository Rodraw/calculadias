import React, {Fragment, useState} from 'react';

const Formulario = () => {



    const[datos, setDatos] = useState({
        nombre:'',
        edad:'',
        fechaNacimiento:'',
        pasatiempo:'',
        dias:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        
        var cumpleaños =  String (datos.fechaNacimiento);
        console.log(cumpleaños);
        var hoy = new Date();
        var hoy2 = new String(hoy);
        var fechaInicio = new Date(cumpleaños).getTime();
        var fechaFin    = new Date(hoy2).getTime();
    
        var diff = fechaFin - fechaInicio;
        var años=diff/(1000*60*60*24*365)
        var dias=diff/(1000*60*60*24)-1
        var horas=diff/(1000*60*60)-24
        var minutos=diff/(1000*60)-1440
        console.log(años, dias, horas, minutos );

      

        var añosvividos = Math.trunc(años)+1
        var start=new Date(cumpleaños);
        start.setFullYear(start.getFullYear()+añosvividos);
        var startf = start.toISOString().slice(0,10).replace();
        console.log(startf );




        var fechaInicio2 = new Date(startf).getTime();
        var fechaFin2   = new Date(hoy2).getTime();
        var diff2 = fechaInicio2 -fechaFin2
        var años2=diff2/(1000*60*60*24)
        var horas2=diff2/(1000*60*60)-24


        document.getElementById('lbDias').innerHTML = dias + " Dias";
        document.getElementById('lbHoras').innerHTML = horas + " Horas";
        document.getElementById('lbMinutos').innerHTML = minutos + " Minutos";
        document.getElementById('lbDiascumple').innerHTML = años2;
        document.getElementById('lbHorascumple').innerHTML = horas2;


    }



    return (

        
        <Fragment>
        <h1>Formulario de información personal</h1>
        <form className="row">
            <div className="col-md-8"><h6>Nombre</h6>
                <input
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="col-md-8"><h6>Edad</h6>
                <input
                    className="form-control"
                    type="text"
                    name="edad"
                    onChange={handleInputChange}
                ></input>
                <div className="col-md-8"><h6>Fecha de nacimiento</h6>
                <input
                    className="form-control"
                    type="date"
                    name="fechaNacimiento"
                    onChange={handleInputChange}
                ></input>
                <div className="col-md-8"><h6>Pasatiempo</h6>
                <input
                    className="form-control"
                    type="text"
                    name="pasatiempo"
                    onChange={handleInputChange}
                ></input>
            </div>
            </div>
            </div>
        </form>
        
        <h3>El ser humano {datos.nombre} a vivido un total de:</h3>
        <h3 id="lbDias"></h3>
        <h3 id="lbHoras"></h3>
        <h3 id="lbMinutos"></h3>
        <h3>Su hobbie favorito es {datos.pasatiempo}</h3>
        <h3>Faltan  dias <a id="lbDiascumple"></a>, <a id="lbHorascumple"></a> horas para su cumpleaños</h3>
        </Fragment>
    );
}

export default Formulario;