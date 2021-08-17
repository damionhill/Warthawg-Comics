import DataTable, {createTheme} from 'react-data-table-component';
import { data } from '../../Data/ArchieData.js';
import { columns } from '../../Data/Columns.js';
import React from 'react';
import DataTableExtensions from 'react-data-table-component-extensions';

const ArchieCatalog = () => {

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

  const tableData = {
    columns,
    data,
  };

  var x = window.matchMedia("(max-width: 700px)")

  function setStyle(){
    if (x.matches) { // if mobile 
      return mobileStyle;
    } else {
      return desktopStyle;
    }
  }

  x.addEventListener("change", setStyle())
  return (
    <DataTableExtensions {...tableData} filterPlaceholder = "Search catalog by series title... ex: &quot;Archie&quot;" export = {false} print = {false} >
        <DataTable className = 'Table'  responsive pagination paginationRowsPerPageOptions = {[10, 30, 50, 100, 200, 500]}customStyles = {setStyle()} theme = 'WHC' />
    </DataTableExtensions>
    
    );

};
export default ArchieCatalog;
