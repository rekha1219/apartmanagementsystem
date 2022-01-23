import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getFlatRentEntity, updateFlatRentEntity } from '../Service/api';

const initialValue = {
    createdBy: '',
    id:'',
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

const EditFlatRent = () => {
    const [flatrentEntity, setFlatRentEntity] = useState(initialValue);
    const { id, createdBy, modifiedBy, createdDateTime, modifiedDateTime,ownerName, flatNo, amount, type } = flatrentEntity;
    //const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadFlatRentDetails();
    }, []); 

    const loadFlatRentDetails = async() => {
        const response = await getFlatRentEntity(id);
        setFlatRentEntity(response.data);
    }

    const editFlatRentDetails = async() => {
        const response = await updateFlatRentEntity(flatrentEntity);
        history.push('/allFlat');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setFlatRentEntity({...flatrentEntity, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Created By</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdBy'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Modified By</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedBy'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Created Date Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdDateTime'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Modified Date Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedDateTime'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Owner Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ownerName'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Flat No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='flatNo'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Amount</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='amount'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type'  id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editFlatRentDetails()}>Alter </Button>
            </FormControl>
            
        </FormGroup>
    )
}

export default EditFlatRent;