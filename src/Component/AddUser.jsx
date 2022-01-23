import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    id:'',
    createdBy:'',
    modifiedBy:'',
    createdDateTime:'',
    modifiedDateTime:'',
    firstName: '',
    lastName: '',
    loginId: '',
    password: '',
    mobileNo: '',
    emailId: '',
    roleId: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const {id, createdBy, modifiedBy, createdDateTime,modifiedDateTime, firstName, lastName, loginId, password,mobileNo,emailId,roleId } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})  //changed
    }


    const addUserDetails = async() => 
    {
        const response=await addUser(user);
        history.push('./allUser');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>

            <FormControl>
                <InputLabel htmlFor="my-input">ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">CreatedBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdBy'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">ModifiedBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedBy'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Created Date Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdDateTime'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Modified Date Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedDateTime'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">FirstName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">LoginId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='loginId' id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">MobileNo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='mobileNo'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">EmailId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='emailId'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">RoleId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='roleId'  id="my-input" />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="secondary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;