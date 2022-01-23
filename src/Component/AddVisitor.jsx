import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addVisitorEntity } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    id:'',
    name:'',
    ownerName:'',
    createdBy: '',
    createdDateTime: '',
    modifiedBy:'',
    modifiedDateTime: '',
    date:'',
    flatNo:'',
    arrivalTime: '',
    departureTime: ''
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

const AddVisitor = () => {
    const [visitor, setVisitor] = useState(initialValue);
    const {id,name,ownerName,createdBy,createdDateTime,modifiedBy,modifiedDateTime,flatNo,date, arrivalTime, departureTime} = visitor;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setVisitor({...visitor, [e.target.name]: e.target.value})  //changed
    }


    const addVisitorDetails = async() => 
    {
        await addVisitorEntity(visitor);
        history.push('./allVisitor');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Visitor Details</Typography>

<FormControl>
    <InputLabel htmlFor="my-input">createdBy</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='createdBy' id="my-input" />
</FormControl>

<FormControl><InputLabel htmlFor="my-input">modifiedBy</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='modifiedBy' id="my-input" />
</FormControl> 

<FormControl><InputLabel htmlFor="my-input">createdDateTime</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='createdDateTime' id="my-input" />
 </FormControl>

<FormControl>
<InputLabel htmlFor="my-input">modifiedDateTime</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='modifiedDateTime' id="my-input" />
</FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'  id="my-input" />
            </FormControl>

             
            <FormControl>
                <InputLabel htmlFor="my-input">Owner name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ownerName'  id="my-input" />
            </FormControl>

             
            <FormControl>
                <InputLabel htmlFor="my-input">Flat No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='flatNo'  id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date'  id="my-input" />
            </FormControl>

                <FormControl>
                <InputLabel htmlFor="my-input">Arrival Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='arrivalTime'  id="my-input"/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Departure Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='departureTime'  id="my-input" />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="primary"  onClick={() => addVisitorDetails()}>Add Visitor</Button>
               {/* <Button variant="contained" color="secondary" onClick={() => addVisitor()}>cancel</Button> */}
            </FormControl>

        </FormGroup>
    )
}

export default AddVisitor;