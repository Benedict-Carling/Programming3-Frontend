import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import UserContext from "../../context/UserContext";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default function EditTable(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 285,
      paddingLeft: -50,
    },
  }));
  const { userData, setUserData } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  function committodatabase() {
    props.setButtonclicked(false);
    console.log(props.selectedID);
    console.log(props.expertComment);
    console.log(props.expertInterpretation);
    
    asynccommittodatabase();
  }
  const classes = useStyles();
  const handleChange = (e) => {
    props.setExpertInterpretation(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const asynccommittodatabase = async (e) => {
    const jsonobj = {
      InputId: props.selectedID,
      InputComment: props.expertComment,
      InputValidation: props.expertInterpretation,
    };
    const resdb = await Axios.post(
      "http://localhost:5000/data/add-comment",
      jsonobj
    );
    if (resdb.status === 200) props.setButtonclicked(true);
    console.log("response", resdb);
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current 
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current
    var time = date + '/' + month + '/' + year 
    + ' ' + hours + ':' + min + ':' + sec;
    
      
    const log = {
      InEmail: userData.user.email,
      InU_PASSCODE: props.selectedU_PASSCODE,
      InType : userData.user.type,
      InDate : time,
      InId: props.selectedID,
      InComment: props.expertComment,
      InInterpretation: props.expertInterpretation,
    }
    console.log(log)

    const reslog = await Axios.post(
      "http://localhost:5000/log/add-log",
      log
    );
    
  };

  const darkergrey = grey[500]

  const useLabelStyles = makeStyles({
    root: {
      backgroundColor: darkergrey,
      "&.Mui-focused": {
        backgroundColor: darkergrey
      },
      "&:hover": {
        backgroundColor: darkergrey
      }
    }
  });


  function getimgpath() {
    if (props.selectedID > 17) return "17";
    if (!props.selectedID) return "NoImage";
    if(props.selectedFlag === "Corrupt") return "CorruptedImage";
    else return props.selectedID;

  }

  const labelClasses = useLabelStyles();

  return (
    <div>
      <TransformWrapper>
        <TransformComponent>
          <img
            src={process.env.PUBLIC_URL + "collection/" + getimgpath() + ".jpg"}
            height="300"
            alt="logo"
          />
        </TransformComponent>
      </TransformWrapper>
      <TextField
        id="idofclicked"
        label="ID"
        variant="outlined"
        fullWidth= '20ch' 
        value={props.selectedID}
        InputProps={{classes:labelClasses}}
      />
      <TextField
        onChange={(e) => props.setExpertComment(e.target.value)}
        value={props.expertComment}
        id="usercomment"
        label="Expert Comment"
        multiline
        rows={6}
        fullWidth= '20ch' 
        variant="outlined"
      />
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Expert interpretation</InputLabel>
        <Select
          labelId="Expert Interpretation"
          id="userinter"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          value={props.expertInterpretation}
          variant="outlined"
        >
          
          <MenuItem value={"Test: uR; Validity: -; IgG:-"}>Test: uR; Validity: -; IgG:-</MenuItem>
          <MenuItem value={"Test: R; Validity: I; IgG:-"}>Test: R; Validity: I; IgG:-</MenuItem>
          <MenuItem value={"Test: R; Validity: V; IgG: N"}>Test: R; Validity: V; IgG: N</MenuItem>
          <MenuItem value={"Test: R; Validity: V; IgG: P"}>Test: R; Validity: V; IgG: P</MenuItem>
        </Select>
      </FormControl>
        
      
      <Button variant="contained" color="primary" onClick={committodatabase}>
        Commit to Database
      </Button>
    </div>
  );
}
