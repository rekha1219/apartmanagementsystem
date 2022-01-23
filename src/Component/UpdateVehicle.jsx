import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getVehicleEntity } from '../Service/api';
import { updateVehicleEntity } from '../Service/api';


const initialValue = {
    id:'',
    createdBy:'',
    modifiedBy:'',
    createdDateTime:'',
    modifiedDateTime:'',
    name: '',
    parkingNo: '',
    arrivalTime: '',
    departureTime: '',
    date: '',
    vehicleNo: '',
    vehicleType: ''
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

const UpdateVehicle = () => {
    const [vehicle, setVehicle] = useState(initialValue);
    const {id,createdBy, modifiedBy, createdDateTime,modifiedDateTime, name, parkingNo, arrivalTime, departureTime,date,vehicleNo,vehicleType } = vehicle;
    //const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadVehicleDetails();
    }, []);

    const loadVehicleDetails = async() => {
        const response = await getVehicleEntity(id);
        setVehicle(response.data);
    }

    const updateVehicleDetails = async() => {
         const response=await updateVehicleEntity(vehicle);
         history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Update Information</Typography>

             
             <FormControl>
                <InputLabel htmlFor="my-input">Id</InputLabel>
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
                <InputLabel htmlFor="my-input">CreatedDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdDateTime'  id="my-input" />
            </FormControl>
             
            <FormControl>
                <InputLabel htmlFor="my-input">ModifiedDateTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='modifiedDateTime'  id="my-input" />
            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ParkingNo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='parkingNo'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ArrivalTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='arrivalTime'  id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">DepartureTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='departureTime'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">VehicleNo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='vehicleNo'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">VehicleType</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='vehicleType'  id="my-input" />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="secondary" onClick={() => updateVehicleDetails()}>Update Vehicle</Button>
            </FormControl>
        </FormGroup>
    )
}

export default UpdateVehicle;