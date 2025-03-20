import React, { useState, useEffect, lazy} from "react";
import MemberForm from "../../../components/Forms/MemberForm";
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from "./member-jss";

import { createUseStyles } from "react-jss";
import { apiCreateMember } from "../../../api/member";
const useStyles = createUseStyles(styles);


const AddNewMember = ({ history, }) => {
    const classes = useStyles();
  const nav = useNavigate();

    const [formData, setFormData] = useState({});

    const StatusList = [
        {
          id: 1,
          name: "CDI (Contrat à durée indeterminé)",
          frequence: "Présentielle"
        },
        {
          id: 2,
          name: "CDD (Contrat à durée determiné)",
          frequence: "Présentielle"
        },
        {
          id: 3,
          name: "Alternant",
          frequence: "3 semainde en présentielle et 2 semaine d'absence"
        },
    ];

    const handleAddNew = async (e) => {
        e.preventDefault();

        const newMember = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          sex: formData.sex,
          birth_date: formData.age,
          status: formData.status,
        };
        console.log("resMember")

        const resMember = await apiCreateMember(newMember);

        if (resMember && !resMember.error) {
            nav('/admin/members');
        } else {
          resMember.error && setErrors(resMember.error);
        }
    };

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
                onSubmit={handleAddNew}
                onChange={setFormData}
                formData={formData}
                errors={"errors"}
                onCancel={() => nav('../members')}
                statusList={StatusList}
            />
        </Paper>
        </>
    );
};


export default AddNewMember;
