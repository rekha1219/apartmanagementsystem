import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getDeliveryEntity, updateDeliveryEntity } from '../Service/api';

const initialValue = {
    id:'',
    createdBy: '',
    createdDateTime: '',
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

const EditDelivery = () => {
    const [deliveryEntity, setDeliveryEntity] = useState(initialValue);
    const { id,createdBy,createdDateTime,modifiedBy, modifiedDateTime, ownerName, time, date, status } = deliveryEntity;
    // const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadDeliveryDetails();
    },[] );

    const loadDeliveryDetails = async() => {
        const response = await getDeliveryEntity(id);
        setDeliveryEntity(response.data);
    }

    const editDeliveryDetails = async() => {
        const response = await updateDeliveryEntity(deliveryEntity);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setDeliveryEntity({...deliveryEntity, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
           
            <FormControl>
                <InputLabel htmlFor="my-input">createdBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdBy' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">modifiedBy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedBy' id="my-input"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">createdDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdDateTime' id="my-input"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">modifiedDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedDateTime' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">OwnerName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ownerName' id="my-input"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='time' id="my-input"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status'  id="my-input"  />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="secondary" onClick={() => editDeliveryDetails()}>Edit Delivery</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditDelivery;