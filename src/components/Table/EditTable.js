import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import UserContext from "../../context/UserContext"

export default function EditTable(props) {
  const { userData, setUserData } = useContext(UserContext);
  function committodatabase() {
    props.setButtonclicked(false);
    console.log(props.selectedID);
    console.log(props.expertComment);
    console.log(props.expertInterpretation);
    
    asynccommittodatabase();
  }

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
  


  function getimgpath() {
    if (props.selectedID > 17) return "17";
    else return props.selectedID;
  }

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
        variant="filled"
        value={props.selectedID}
      />
      <TextField
        onChange={(e) => props.setExpertComment(e.target.value)}
        value={props.expertComment}
        id="usercomment"
        label="Expert Comment"
        multiline
        rows={6}
        variant="filled"
      />
      <TextField
        onChange={(e) => props.setExpertInterpretation(e.target.value)}
        value={props.expertInterpretation}
        id="userinter"
        label="Expert Interpretation"
        multiline
        rows={6}
        variant="filled"
      />
      <Button variant="contained" color="primary" onClick={committodatabase}>
        Commit to Database
      </Button>
    </div>
  );
}
