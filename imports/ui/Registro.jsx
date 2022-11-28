
import React,{useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { cleanRut,validateRut,formatRut } from 'rutlib';
import Regiones from "../api/comunas-regiones.json";
import { PacientesCollection } from '../api/PacientesCollection';
import {Button,Form,Row,Col} from 'react-bootstrap';

const onSubmit= (data,e) =>{
  
      PacientesCollection.insert({
      name: data.name,
      apellidof: data.apellidof,
      apellidom: data.apellidom,
      rut: data.rut,
      region: data.region,
      comuna: data.comuna,
      postal: data.postal,
      createdAt: new Date(),
  });
  e.target.reset(); 
}


export const Registro= () => { 
    const { register,handleSubmit, formState: { isDirty,dirtyFields,errors } } = useForm();
    
    
    const [comuna,setComuna]=useState([]);
    const handledregion=(e)=>{
    const getregionName= e.target.value;
      
    const getComunadata= Regiones.regiones.find(regiones=> regiones.region === getregionName).comunas;
    setComuna(getComunadata);
    }
    
    
    return(
    <div>
      <h1 className="text-center p-4">Registre a un nuevo paciente</h1>
      
    <Form className='' onSubmit={handleSubmit(onSubmit)} >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Nombres Paciente</Form.Label>
            <Form.Control className='w-50 ms-5 shadow-lg p-2 bg-body rounded '{...register('name', { required: true, maxLength: 50 })} placeholder="Ingrese los o el nombre del paciente" />
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>      
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Apellido Materno</Form.Label>
            <Form.Control  className='w-50 ms-5 shadow-lg p-2 bg-body rounded'{...register('apellidom', { required: true, maxLength: 30 })} placeholder="Ingresa apellido materno" />
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Apellido Paterno</Form.Label>
            <Form.Control  className='w-50 ms-5 shadow-lg p-2 bg-body rounded' {...register('apellidof', { required: true, maxLength: 30 })} placeholder="Ingresa apellido paterno" />
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className='ps-5'>Rut</Form.Label>
                <Form.Control  className='w-50 ms-5 shadow-lg p-2 bg-body rounded'{...register('rut', { required: true, maxLength: 12, minLength: 12, validate: validateRut })} placeholder="Ingresa rut" />
                  <Form.Text className="text-muted">
                    {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
                  </Form.Text>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Region</Form.Label>
            <Form.Select className='w-50 ms-5 shadow-lg p-2 bg-body rounded' {...register('region', { required: true })} onChange={handledregion}>
              <option>Seleccione una region</option>
                {Regiones.regiones.map((regiones,index)=>(
              <option key={index}>{regiones.region}</option>
              ))}
            </Form.Select>
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Comuna</Form.Label>
            <Form.Select  className='w-50 ms-5 shadow-lg p-2 bg-body rounded' {...register('comuna', { required: true })}>
              <option>Seleccione una comuna</option>
                {comuna.map((comunas,index)=>(
              <option key={index}>{comunas}</option>
            ))}
            </Form.Select>
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label className='ps-5'>Codigo Postal</Form.Label>
            <Form.Control  className='w-50 ms-5 shadow-lg p-2 bg-body rounded'{...register('postal', { required: true})} placeholder="Ingresa codigo postal" />
              <Form.Text className="text-muted">
                {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
              </Form.Text>
        </Form.Group>
        <Form.Group as={Col}>
          <Button className='mt-4 ms-5' variant="outline-secondary" type="submit" >
            Registrar
          </Button>
        </Form.Group>
      </Row>
      
      
        
    
  </Form>
  </div>
  

  )
    }
