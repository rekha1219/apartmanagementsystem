import react, { useState, useEffect } from 'react';
import { Table, TableHead,  Paper, TableRow, TableBody, Button, makeStyles,TableContainer } from '@material-ui/core'
import { getVisitorEntity, deleteVisitorEntityById } from '../Service/api';
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
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
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


const AllVisitors = () => {
    const [visitors, setVisitors] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllVisitors();
        //getVehicleEntity();
    }, []);

    const deleteVisitorData = async (id) => {
        await deleteVisitorEntityById(id);
        getAllVisitors();
    }

    const getAllVisitors = async () => {
        let response = await getVisitorEntity();
        setVisitors(response.data);
    }

    return (
       <TableContainer component={Paper}>
        {/*<Table className={classes.table}>*/}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow className={classes.thead}>
                    
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>CreatedBy</StyledTableCell>
                <StyledTableCell>Created Date Time</StyledTableCell>
                <StyledTableCell>ModifiedBy</StyledTableCell>
                <StyledTableCell>Modified Date Time</StyledTableCell>
                <StyledTableCell>Owner Name</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Flat Number</StyledTableCell>
                    <StyledTableCell>Arrival Time</StyledTableCell>
                    <StyledTableCell>Departure Time</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {visitors.map((visitor) => (
                    <StyledTableRow className={classes.row} key={visitor.id}>
                        <StyledTableCell align="right">{visitor.id}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.name}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.createdBy}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.createdDateTime}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.modifiedBy}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.modifiedDateTime}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.ownerName}</StyledTableCell>
                          <StyledTableCell align="right">{visitor.flatNo}</StyledTableCell>
                         <StyledTableCell align="right">{visitor.date}</StyledTableCell>
                        <StyledTableCell align="right">{visitor.arrivalTime}</StyledTableCell>
                        <StyledTableCell align="right">{visitor.departureTime}</StyledTableCell>
             
                        <StyledTableCell align="right" {...visitor.Action}>
                            {/* <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/modify/${visitor.id}`}>Modify</Button>
                            <Button color="secondary" variant="contained" onClick={() =>deleteVisitorData(visitor.id)}>Delete</Button>  */}


			<Grid container style={{marginTop:"20px"}} component={Link} to={`/update/${visitor.id}`} sx={{ color: 'blue' }}>
                                <Grid item xs={7}>       
                                </Grid>
                                <Grid item xs={8}>
                                 <BorderColorIcon />
                               </Grid>
                               </Grid>

                                <Grid container style={{marginLeft: "auto"}}onClick={() =>deleteVisitorData(visitor.id)} sx={{ color: 'red' }}>
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

export default AllVisitors;