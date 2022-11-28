import React from 'react';
import { Paciente } from './Paciente.jsx';
import { PacientesCollection } from '../api/PacientesCollection.js';
import { useTracker } from 'meteor/react-meteor-data';
import Table from 'react-bootstrap/Table'

const onDeleteClick =({_id}) => PacientesCollection.deleteOne({_id});

export const TablaRegistros = () => {

  

  const pacientes = useTracker(() => PacientesCollection.find({},{ sort: { createdAt: -1 }}).fetch());
  
  return(
    <div className='mt-5'>
      <h1 className="text-center m-5">Listado de pacientes </h1>    
        <Table className='m-5' striped  size="sm" responsive="sm">
          <thead>
            <tr >
              <th>Nombres</th>
              <th>Apellido Materno</th>
              <th>Apellido Paterno</th>
              <th>Rut</th>
              <th>Region</th>
              <th>Comuna</th>
              <th>Codigo Postal</th>
              
            </tr>
          </thead>              
          <tbody>
            { pacientes.map(paciente => 
            <Paciente 
            
            key = {paciente._id}
            name={paciente.name} 
            apellidom={paciente.apellidom}
            apellidof={paciente.apellidof}
            rut={paciente.rut}
            region={paciente.region}
            comuna={paciente.comuna}
            postal={paciente.postal}
            onClick={onDeleteClick}
            />)}
          </tbody>
        </Table>
    </div>
    )}