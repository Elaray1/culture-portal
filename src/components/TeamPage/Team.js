import React from 'react';
import './dis.css';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    content: {
        textAlign: 'center',
        '& h1': {
            color: '#f50057',
        }
    },
    all_team: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    teammateBlock: {
        width: '190px',
        height: '340px',
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px #fb8c00',
        backgroundColor: 'rgb(40, 63, 83)',
        margin: '20px 20px 0px 20px',
        transition: 'ease-out 0.3s',
        '&:hover': {
            boxShadow: '0px 0px 20px #f50057',
            width: '200px',
            margin: '10px 15px 0px 15px',
            height: '360px'
        }

    },
    name: {
        paddingTop: '-20px',
        color: '#fb8c00',
    },
    git: {
        display: 'block',
        marginTop: '10px',
        color: '#f50057',
    },
    iconColor: {
        color: '#fb8c00',
        transition: 'ease-in-out .2s',
        '&:hover': {
            color: '#f50057',
            cursor: 'pointer',
            transition: 'ease-in-out .2s',
        }
    },
    link: {
        display: 'block',
        marginTop: '20px',
    }
});

function Teammate(props) {
    const classes = useStyles();
    return (
        <div className={classes.teammateBlock}>
            <img src={props.photo} alt='photo'></img>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.git}>{props.git}</span>
            <a className={classes.link} href={props.link}>
                <GitHubIcon className={classes.iconColor} />
            </a>
        </div>
    )
}


function TeamPage() {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <h1>Our team:</h1>
            <div className={classes.all_team}>
                <Teammate photo={'https://sun9-40.userapi.com/c854124/v854124491/1fc568/Hybr74JKEC4.jpg'}
                    name='Emelyanov Egor'
                    git='elaray1'
                    link='https://github.com/elaray1'
                />
                <Teammate photo='https://sun9-67.userapi.com/c854124/v854124491/1fc588/7BKJOA6A5Vc.jpg'
                    name='Karbovskaya Anastasia'
                    git='anastasiakrbvsk'
                    link='https://github.com/anastasiakrbvsk'
                />
                <Teammate
                    photo='https://sun9-8.userapi.com/c858232/v858232726/191e11/H02x7xJaKH4.jpg'
                    name='Dekhand Nikita'
                    git='Dexnkt001'
                    link='https://github.com/Dexnkt001'
                />
                <Teammate
                    photo='https://sun9-33.userapi.com/c855128/v855128774/1ee910/VdOTPzUcMFA.jpg'
                    name='Kudenyuk Alexander'
                    git='Riasets'
                    link='https://github.com/Riasets'
                />
                <Teammate
                    photo='https://sun9-68.userapi.com/c854124/v854124100/200801/qhhRmwLrfX0.jpg'
                    name='Efremov Artyom'
                    git='aplefull'
                    link='https://github.com/aplefull'
                />
            </div>
        </div>
    )
}

export default TeamPage