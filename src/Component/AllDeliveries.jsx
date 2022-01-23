import react, { useState, useEffect } from 'react';
import { Table, TableHead, Paper, TableRow, TableBody, Button, makeStyles, TableContainer } from '@material-ui/core'
import { getDeliveryEntity, deleteDeliveryEntityById} from '../Service/api';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
        width: '30%',
        margin: '50px 0 0 30px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})
//changed...............
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
//upto..........................
    const AllDeliveries = () => {
    const [deliveryEntities, setDeliveryEntities] = useState([]);
    const classes = useStyles();

    useEffect(() => {
      //  getDeliveryEntities();
      getAllDeliveries();
    }, []);

    const deleteDeliveryData = async (id) => {
        await deleteDeliveryEntityById(id);
        //getDeliveryEntities();
        getAllDeliveries();
    }

    const getAllDeliveries = async () => {
        let response =  await getDeliveryEntity();
        setDeliveryEntities(response.data);
    }

    return (
        <TableContainer component={Paper}>
        {/* <Table className={classes.table}> */}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow className={classes.thead}>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>CreatedBy</StyledTableCell>
                <StyledTableCell>ModifiedBy</StyledTableCell>
                <StyledTableCell>CreatedDateTime</StyledTableCell>
                <StyledTableCell>ModifiedDateTime</StyledTableCell>
                <StyledTableCell>OwnerName</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {deliveryEntities.map((deliveryEntity) => (
                    <StyledTableRow className={classes.row}
                     key={deliveryEntity.id}>
                    <StyledTableCell align="right">{deliveryEntity.id}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.createdBy}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.modifiedBy}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.createdDateTime}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.modifiedDateTime}</StyledTableCell>
                       
                    <StyledTableCell align="right">{deliveryEntity.ownerName}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.time}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.date}</StyledTableCell>
                    <StyledTableCell align="right">{deliveryEntity.status}</StyledTableCell>
                    <StyledTableCell align="right"{...deliveryEntity.Action}>
                          {/* // <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${deliveryEntity.id}`}>Edit</Button>//
                          //  <Button color="secondary" variant="contained" onClick={() => deleteDeliveryData(deliveryEntity.id)}>Delete</Button> // */}
                   
				<Grid container component={Link} to={`/update/${deliveryEntity.id}`} sx={{ color: 'blue' }}>
                                <Grid item xs={7}>       
                                </Grid>
                                <Grid item xs={8}>
                                 <BorderColorIcon />
                               </Grid>
                               </Grid>

                                <Grid container onClick={() =>deleteDeliveryData(deliveryEntity.id)} sx={{ color: 'red' }}>
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

export default AllDeliveries;