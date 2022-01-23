import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addFlatRentEntity } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    id: '',
    createdBy: '',
    modifiedBy: '',
    createdDateTime:'',
    modifiedDateTime:'',
    ownerName: '',
    flatNo: '',
    amount: '',
    type: ''
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

const AddFlatRent = () => {
    const [flatrentEntity, setFlatRentEntity] = useState(initialValue);
    const {id,createdBy, modifiedBy, createdDateTime, modifiedDateTime, ownerName, flatNo, amount, type } = flatrentEntity;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setFlatRentEntity({...flatrentEntity, [e.target.name]: e.target.value})
    }

    const addFlatRentDetails = async() => {
        await addFlatRentEntity(flatrentEntity);
        history.push('./allFlat');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Flat Details</Typography>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Created By</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdBy'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Modified By</InputLabel>
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
                <InputLabel htmlFor="my-input">Owner Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ownerName'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">FlatNo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='flatNo'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Amount</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='amount'  id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type'  id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addFlatRentDetails()}>Add Flat Rent</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddFlatRent;