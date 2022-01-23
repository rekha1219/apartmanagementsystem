import react from 'react';
import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
Paper,
Grid,
TextField,
Typography,
Button,
Card, CardContent
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://mediacdn.99acres.com/media1/15539/4/310784534M-1628168152999.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "20",

   },
  
  media: {
    height: 240
    },
   })); 

   //const classes = useStyles();

const Login = () => {
  const classes = useStyles();
const validationSchema = Yup.object().shape({
username: Yup.string()
.required('Username is required')
.min(6, 'Username must be at least 6 characters')
.max(20, 'Username must not exceed 20 characters'),



password: Yup.string()
.required('Password is required')
.min(6, 'Password must be at least 6 characters')
.max(40, 'Password must not exceed 40 characters')
});



const {
register,control,handleSubmit,
formState: { errors }} = useForm({
resolver: yupResolver(validationSchema)
});

let history = useHistory();


const onSubmit = data => {
console.log(JSON.stringify(data, null, 2));

history.push('/dropdown');
};




return (
         <Fragment>
           <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0  auto" }}>
              <CardContent>
               <Paper>
                  <Box px={3} py={2}>
                        <Typography variant="h6" align="center" margin="dense">LOGIN Page</Typography>

                      <Grid container spacing={1}>
                     <Grid item xs={12} sm={12}>
                         <TextField required
                                         id="username"
                                         name="username"
                                         label="Username"
                                         fullWidth
                                         margin="dense"
                                         {...register('username')}
                                         error={errors.username ? true : false}/>
                        <Typography variant="inherit" color="text-secondary">{errors.username?.message}</Typography>
                 </Grid>



                                <Grid item xs={12} sm={12}>
                                    <TextField
                                       required
                                       id="password"
                                       name="password"
                                       label="Password"
                                       type="password"
                                      fullWidth
                                       margin="dense"
                                      {...register('password')}error={errors.password ? true : false}/>
                            <Typography variant="inherit" color="textSecondary">{errors.password?.message}</Typography>
                       </Grid>
                </Grid>



                       <Box mt={3}>
                          <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>
                     </Box>


            </Box>
        </Paper>
        </CardContent>
            </Card>
          </Grid>
 </Fragment>
);
};



export default Login;

