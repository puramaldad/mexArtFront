import React from 'react';
import Button from './Components/elements/Button';
import Wraper from './Components/elements/Wraper';

const uikit = ()=>(
   <>
   <Wraper>
   <Button>Boton primario</Button>
   <Button secondary >Boton secundario</Button>
   <Button rounded> Boton Redondo</Button>
   </Wraper>
   

   </>
)

export default uikit