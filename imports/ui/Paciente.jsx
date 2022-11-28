import React from "react";
import { PacientesCollection } from "../api/PacientesCollection";





export const Paciente  = (paciente, onDeleteClick) =>{ 
    
    const handleClick = () => {}

    return(
        <tr>            
            <td>{paciente.name}</td>
            <td>{paciente.apellidom}</td>
            <td>{paciente.apellidof}</td>
            <td>{paciente.rut}</td>
            <td>{paciente.region}</td>
            <td>{paciente.comuna}</td>
            <td>{paciente.postal}</td>
            <td><button className="btn btn-danger" onClick={() => onDeleteClick}>Eliminar Paciente</button></td>
        </tr>
        
    )
    }
