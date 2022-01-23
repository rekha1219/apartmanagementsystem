import react, { useState, useEffect } from 'react';
import { Table, TableHead,  Paper, TableRow, TableBody, Button, makeStyles ,TableContainer} from '@material-ui/core'
import { getUser, deleteUserById } from '../Service/api';
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


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
        //getVehicleEntity();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUserById(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUser();
        setUsers(response.data);
    }

    return (
          <TableContainer component={Paper}>
        
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow className={classes.thead}>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Created By</StyledTableCell>
                <StyledTableCell>Modified By</StyledTableCell>
                <StyledTableCell>Created Date Time</StyledTableCell>
                <StyledTableCell>Modified Date Time</StyledTableCell>
                
                    <StyledTableCell>FirstName</StyledTableCell>
                    <StyledTableCell>LastName</StyledTableCell>
                    <StyledTableCell>LoginId</StyledTableCell>
                    <StyledTableCell>Password</StyledTableCell>
                    <StyledTableCell>MobileNo</StyledTableCell>
                    <StyledTableCell>EmailId</StyledTableCell>
                    <StyledTableCell>RoleId</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        <StyledTableCell align="right">{user.id}</StyledTableCell> 
                          <StyledTableCell align="right">{user.createdBy}</StyledTableCell>
                          <StyledTableCell align="right">{user.modifiedBy}</StyledTableCell>
                          <StyledTableCell align="right">{user.createdDateTime}</StyledTableCell>
                         <StyledTableCell align="right">{user.modifiedDateTime}</StyledTableCell>
                        <StyledTableCell align="right">{user.firstName}</StyledTableCell>
                        <StyledTableCell align="right">{user.lastName}</StyledTableCell>
                        <StyledTableCell align="right">{user.loginId}</StyledTableCell>
                        <StyledTableCell align="right">{user.password}</StyledTableCell>
                        <StyledTableCell align="right">{user.mobileNo}</StyledTableCell>
                        <StyledTableCell align="right">{user.emailId}</StyledTableCell>
                        <StyledTableCell align="right">{user.roleId}</StyledTableCell>
                        
                        
                           
                        <StyledTableCell align="right" {...user.actions}>
                            {/* <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/updateUser/${user.id}`}>Update</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUser(user.id)}>Delete</Button>  */}

                    
                            {/* <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/modify/${visitor.id}`}>Modify</Button>
                            <Button color="secondary" variant="contained" onClick={() =>deleteVisitorData(visitor.id)}>Delete</Button> 
 */}

			<Grid container component={Link} to={`/update/${user.id}`} sx={{ color: 'blue' }}>
                                <Grid item xs={7}>       
                                </Grid>
                                <Grid item xs={8}>
                                 <BorderColorIcon />
                               </Grid>
                               </Grid>

                                <Grid container onClick={() =>deleteUserData(user.id)} sx={{ color: 'red' }}>
                                <Grid item xs={7}>
                                </Grid>
                                <Grid item xs={8}>
                                 <DeleteIcon />
                                 {/* <DeleteForeverIcon /> */}
                               </Grid>
                               </Grid>

                        </StyledTableCell>
    
                    
                    </TableRow>
                ))}
            </TableBody>
        </Table>
</TableContainer>
    )
}

export default AllUsers;     