import React from 'react';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

function Contact(){
    return (
        <div > 
          
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0  auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Contact Us
              </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                  Fill up the form and our team will get back to you within 24 hours.
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>
                    {/* <Stack sx={{ width: '100%' }} spacing={2}>
     <Alert severity="success" color="info">
             Thank You! we'll get back to you soon..
          </Alert>
      </Stack> */}
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
    }

export default Contact;