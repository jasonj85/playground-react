import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const DataTable = (props) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Full name', width: 130 },
        { field: 'email', headerName: 'Contact email', width: 130 },
        {
            field: 'answer',
            headerName: 'Reason to win',
            width: 160,
        },
    ];

    const rows = props.rows;

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    );
}

export default DataTable;
