import react, { useState, useEffect } from 'react';
import { Table, TableHead,  Paper, TableRow, TableBody, Button, makeStyles ,TableContainer} from '@material-ui/core'
import { getVehicleEntity, deleteVehicleEntityById } from '../Service/api';
import { Link } from 'react-router-dom';
import {styled} from '@mui/material/styles';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 20px 0px 60px'
    },
    thead: {
        '& > *': {
            fontSize: 15,
            background: 'lightblue',
            color: 'black'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllVehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllVehicles();
        //getVehicleEntity();
    }, []);

    const deleteVehicleData = async (id) => {
        await deleteVehicleEntityById(id);
        getAllVehicles();
    }

    const getAllVehicles = async () => {
        let response = await getVehicleEntity();
        setVehicles(response.data);
    }

    return (
        <TableContainer component={Paper}>
        {/*<Table className={classes.table}>*/}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow className={classes.thead}>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Created By</StyledTableCell>
                <StyledTableCell>Modified By</StyledTableCell>
                <StyledTableCell>Created Date Time</StyledTableCell>
                <StyledTableCell>Modified Date Time</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Parking No</StyledTableCell>
                    <StyledTableCell>Arrival Time</StyledTableCell>
                    <StyledTableCell>Departure Time</StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Vehicle No</StyledTableCell>
                    <StyledTableCell>Vehicle Type</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {vehicles.map((vehicle) => (
                    <StyledTableRow className={classes.row} key={vehicle.id}>
                        <StyledTableCell align="right">{vehicle.id}</StyledTableCell> 
                          <StyledTableCell align="right">{vehicle.createdBy}</StyledTableCell>
                          <StyledTableCell align="right">{vehicle.modifiedBy}</StyledTableCell>
                          <StyledTableCell align="right">{vehicle.createdDateTime}</StyledTableCell>
                         <StyledTableCell align="right">{vehicle.modifiedDateTime}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.name}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.parkingNo}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.arrivalTime}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.departureTime}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.date}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.vehicleNo}</StyledTableCell>
                        <StyledTableCell align="right">{vehicle.vehicleType}</StyledTableCell>
                            
                        <StyledTableCell align="right"{...vehicle.actions}>
                            {/* //<Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/update/${vehicle.id}`}>Update</Button>//
                           // <Button color="secondary" variant="contained" onClick={() => deleteVehicleData(vehicle.id)}>Delete</Button> // */}
                       		
				<Grid container component={Link} to={`/update/${vehicle.id}`} sx={{ color: 'blue' }}>
                                <Grid item xs={7}>       
                                </Grid>
                                <Grid item xs={8}>
                                 <BorderColorIcon />
                               </Grid>
                               </Grid>

                                <Grid container onClick={() =>deleteVehicleData(vehicle.id)} sx={{ color: 'red' }}>
                                <Grid item xs={7}>
                                </Grid>
                                <Grid item xs={8}>
                                 <DeleteIcon />
                                 {/* <DeleteForeverIcon /> */}
                               </Grid>
                               </Grid>











				 </StyledTableCell>
    
                    
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
</TableContainer>
    )
}

export default AllVehicles;