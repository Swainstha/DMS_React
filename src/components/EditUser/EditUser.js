import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router'
import  { createUser1, createUser2, getUsers } from '../../store/actions/users'
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Topbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/Sidebar';

const EditUser = ({history, createUser1, createUser2, location}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',

        },
        users: {
            backgroundColor: '#E7E7E7',
            minHeight: '93.5vh',
            padding: '3rem',
            display:'flex',
            flexDirection: 'column',
            width: '88%'
        },
      }));

    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        institution: '',
        level: '',
        image: ''
    })

   

    useEffect(() => {
            setFormData({
                username: location.state.user.username,
                fullname: location.state.user.fullname,
                institution: location.state.user.institution,
                level: location.state.user.level,
                image: location.state.user.image
            }) 


    }, [getUsers])

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();


        formData.level==='Level 1'
        ? createUser1(formData, history, true) 
        : createUser2(formData, history, true);
        
    };

    const { username, fullname, institution, level, image} = formData;

    const classes = useStyles();
    return (
        <div>
            <Topbar /> 
            <div className = {classes.root}>
                 <SideBar />

                {/* Main Create User Component */}
        
                <form className={classes.users} onSubmit={onSubmit}>
                <h1>Edit User</h1>

                     <TextField onChange={onChange} name='username' value={username} id="standard-basic" label="User Name" required />
                     <TextField onChange={onChange} name='fullname' value={fullname} id="standard-basic" label="Full Name" required/>
                     <TextField onChange={onChange} name='institution' value={institution} id="standard-basic" label="Institution"  required/>
                    
                     <FormControl className={classes.formControl} required>
                        <InputLabel id="demo-simple-select-label" required >Level</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={onChange} name= 'level' value = {level}
                        >
                            <MenuItem value='Level 1'>Level 1</MenuItem>
                            <MenuItem value='Level 2'>Level 2</MenuItem>
                        </Select>
                     </FormControl>
                
                     <TextField onChange={onChange} name= 'image' value= {image} id="standard-basic" label="Image" />

                     <Button type='submit' variant="contained" color="primary">
                        SUBMIT
                    </Button>
                    
                </form>
                 
            </div>
           
           

        </div>
    )
}

EditUser.propTypes = {

}

    


export default connect(null, {createUser1, createUser2})(withRouter(EditUser))
