import react, { useState, useEffect } from 'react';
import { Table, TableHead, Paper, TableRow, TableBody, Button, makeStyles,TableContainer } from '@material-ui/core'
import { getFlatRentEntity, deleteFlatRentEntityById } from '../Service/api';
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


const AllFlatRents = () => {
    const [flatrentEntities, setFlatRentEntities] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllFlatRents();
        //getFlatRentEntities();
    }, []);

    const deleteFlatRentData = async (id) => {
        await deleteFlatRentEntityById(id);
        //getFlatRentEntities();
        getAllFlatRents();
    }

    const getAllFlatRents = async () => {
        let response = await getFlatRentEntity();
        setFlatRentEntities(response.data);
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
                        <StyledTableCell>OwnerName</StyledTableCell>
                        <StyledTableCell>Flat No</StyledTableCell>
                        <StyledTableCell>Amount</StyledTableCell>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {flatrentEntities.map((flatrentEntity) => (
                    <StyledTableRow className={classes.row} key={flatrentEntity.id}>
                        <StyledTableCell align="right">{flatrentEntity.id}</StyledTableCell> 
                        <StyledTableCell align="right">{flatrentEntity.createdBy}</StyledTableCell>
                        <StyledTableCell align="right">{flatrentEntity.modifiedBy}</StyledTableCell>
                        <StyledTableCell align="right">{flatrentEntity.createdDateTime}</StyledTableCell>
                        <StyledTableCell align="right">{flatrentEntity.modifiedDateTime}</StyledTableCell> 
                            <StyledTableCell align="right">{flatrentEntity.ownerName}</StyledTableCell>
                            <StyledTableCell align="right">{flatrentEntity.flatNo}</StyledTableCell>
                            <StyledTableCell align="right">{flatrentEntity.amount}</StyledTableCell>
                            <StyledTableCell align="right">{flatrentEntity.type}</StyledTableCell>
                            <StyledTableCell align="right" {...flatrentEntity.Action}>
                      //     <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/alter/${flatrentEntity.id}`}>Alter</Button>//
                          //  <Button color="secondary" variant="contained" onClick={() => deleteFlatRentData(flatrentEntity.id)}>Delete</Button> //
                        
				<Grid container component={Link} to={`/update/${flatrentEntity.id}`} sx={{ color: 'blue' }}>
                                <Grid item xs={7}>       
                                </Grid>
                                <Grid item xs={8}>
                                 <BorderColorIcon />
                               </Grid>
                               </Grid>

                                <Grid container onClick={() =>deleteFlatRentData(flatrentEntity.id)} sx={{ color: 'red' }}>
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

export default AllFlatRents;