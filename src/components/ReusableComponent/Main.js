import React, { useState, useEffect } from 'react';
import './Main.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from '../../TestData/data';
import {products} from '../../TestData/productsData';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



function Main({ showScreenOne, displayScreenOne, displayScreenTwo }) {
  
  const [tableOneData, setTableOneData] = useState([]);
  const [product, setProduct] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
 

  useEffect(() => {
    setTableOneData(data)
    setProduct(products)
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  }

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.balance);
  }

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  }

  const refreshPage = ()=>{
    window.location = '/' 
  }


  let header = (
    <div style={{ 'textAlign': 'left', 'display': 'flex', 'justifyContent': 'end' }}>
      <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50" />
    </div>
  );

  let header2 = (
    <div style={{ 'textAlign': 'left', 'display': 'flex', 'justifyContent': 'end' }}>
      <Button icon="pi pi-refresh" onClick={() => refreshPage()} />
    </div>
  );



  return (
    <div>

      <div className="options">
        <div onClick={() => displayScreenOne()} className={showScreenOne ? "screen-one screen-active" : "screen-one"}   >
          <span > Screen 1</span>
        </div>
        <div onClick={() => displayScreenTwo()} className={showScreenOne ? "screen-two" : "screen-two screen-active"}>
          <span> Screen 2</span>
        </div>
      </div>
      <div className="content">
        {showScreenOne ?

          <div className="card">
            <DataTable value={tableOneData} responsiveLayout="scroll" paginator rows={4} header={header} globalFilter={globalFilter}>
              <Column field="id" header="Id" filter></Column>
              <Column field="name" header="Name" filter></Column>
              <Column field="country.name" header="Country" filter></Column>
              <Column field="date" header="Date" filter></Column>
              <Column field="company" header="Company name" filter></Column>
              <Column field="balance" header="Balance" body={balanceBodyTemplate} filter></Column>
            </DataTable>
          </div>

          :

          <div className="card">
            <DataTable  value={product} header={header2} responsiveLayout="scroll" >
              <Column field="name" header="Name" sortable filter></Column>
              <Column field="category" header="Category" sortable filter></Column>
              <Column field="quantity" header="Quantity" sortable filter></Column>
              <Column field="price" header="Price" body={priceBodyTemplate} sortable filter></Column>
            </DataTable>
          </div>
        }
      </div>

    </div>
  )
}

export default Main
