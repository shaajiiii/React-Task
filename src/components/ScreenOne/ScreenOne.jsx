import React, { useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {data} from '../../TestData/data'

function ScreenOne() {
    console.log(data);
  return (
    <div>
      screen ONe
    </div>
  )
}

export default ScreenOne
