import React, { useState, useEffect, lazy} from "react";
import MemberForm from "../../../components/Forms/MemberForm";
import { Paper } from '@mui/material';
import styles from "./member-jss";

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);


const AddNewMember = ({ history, auth }) => {
    const classes = useStyles();

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState([]);
  const [profile, setProfile] = useState(null);
  const [havingStatus, setHavingStatus] = useState(false);


  return (
    <>
      <Paper square elevation={0} component="main" className={classes.section} style={{padding: "2em"}}>
        <p className={classes.commentText}>
        Veuillez entrer les informations de l'employé. Tous les champs sont à remplir.
        </p>
        <br/>
        <MemberForm
          okLabel="Ajouter l'employé"
          initialValues={{}}
          onSubmit={"handleAddNew"}
          errors={"errors"}
          emptyInitialValues
          onCancel={"history.goBack"}
          // noticeText={CREATE_NEW_PATIENT_INFORMATION}
          status={"status"}
          onChangeHaving={setHavingStatus}
          havingSystem={profile !== null && profile.having_system}
        />
      </Paper>
    </>
  );
};


export default AddNewMember;
