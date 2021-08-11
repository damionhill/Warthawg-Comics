import DataTable, {createTheme} from 'react-data-table-component';
import React, {useState} from 'react';
import DataTableExtensions from 'react-data-table-component-extensions';
import { data } from '../../Data/Misc60PresData.js';
import { columns } from '../../Data/Columns.js';


const Misc60PresCatalog = () => {

  const mobileStyle = {
    rows: {
      style: {
        dense: true, 
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: '4vw',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '3.5vw',
      },
    },
  };

  const desktopStyle = {
    rows: {
      style: {
        dense: false, 
      }
    },
    headCells: {
      style: {
        fontSize: '20px',
      },
    },
    cells: {
      style: {        
        fontSize: '18px',
      },
    },
  };
  
  
  createTheme('WHC', {
        text: {
          primary: 'rgb(0, 0, 128)',
          secondary: 'rgb(0, 0, 128)',          
        },
        background: {
          default: 'rgb(227, 234, 255)',
        },
        context: {
          background: 'rgb(227, 234, 255)',
        },
        divider: {
          default: '#000000',

        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

  var x = window.matchMedia("(max-width: 700px)")

  function setStyle(){
    if (x.matches) { // if mobile 
      return mobileStyle;
    } else {
      return desktopStyle;
    }
  }

  x.addEventListener("change", setStyle())

  const tableData = {
    columns,
    data,
  };

  return (
    <DataTableExtensions {...tableData} filterPlaceholder = "Search catalog by series title... ex: &quot;Archie&quot;" export = {false} print = {false} >
        <DataTable className = 'Table'  responsive pagination customStyles = {setStyle()} theme = 'WHC' />
    </DataTableExtensions>
  );

};
export default Misc60PresCatalog;
