import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addDeliveryEntity } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    createdBy: '',
    createdDateTime: '',
    id:'',
    modifiedBy:'',
    modifiedDateTime: '',
    ownerName: '',
    time: '',
    date: '',
    status:''
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

const AddDelivery = () => {
    const [deliveryEntity, setDeliveryEntity] = useState(initialValue);
    const { createdBy,createdDateTime,id,modifiedBy, modifiedDateTime,ownerName, time, date, status } = deliveryEntity;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setDeliveryEntity({...deliveryEntity, [e.target.name]: e.target.value})
        
    }

    const addDeliveryDetails = async() => {
        await addDeliveryEntity(deliveryEntity);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Delivery</Typography>
            
            <FormControl>
                <InputLabel htmlFor="my-input">createdBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdBy' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">modifiedBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedBy' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">createdDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdDateTime' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">modifiedDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedDateTime' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ownerName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ownerName' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='time' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date' id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addDeliveryDetails()}>Add Delivery</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddDelivery;