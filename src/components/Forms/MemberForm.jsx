import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RadioGroup, FormControlLabel, Radio, Tooltip, TextField,
  Button,
  ButtonGroup,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./forms-jss";

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

const MemberForm = ({
  handleSubmit,
  errors,
  formValues,
  okLabel,
  cancelLabel,
  havingSystemValue,
  onCancel,
  noticeText,
  havingSystem,
  onChangeHaving,
  dispatch,
}) => {
  const classes = useStyles();
  const [showHaving, setShowHaving] = useState(
    parseFloat(havingSystemValue) ? true : false
  );
  const [exceedError, setExceedError] = useState(false);

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
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item size={{ xl:3, md:4, sm:6, xs:12 }}>
          <FormLabel component="legend">Prénom *</FormLabel>
          <TextField
            labelId="firstname-label"
            fullWidth
            name="first_name"
            variant="outlined"
            placeholder="Entrer prénom"
            error={!!errors.first_name}
            helperText={errors.first_name}
            validate={true}
            className={classes.formControl}
          />
        </Grid>
        <Grid item size={{ xl:3, md:4, sm:6, xs:12 }}>
          <FormLabel component="legend">Nom *</FormLabel>
          <TextField
            labelId="name-label"
            fullWidth
            // label="Nom"
            name="last_name"
            variant="outlined"
            placeholder="Entrer nom"
            error={!!errors.last_name}
            helperText={errors.last_name}
            validate={true}
            className={classes.formControl}
          />
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
        <Grid item size={{ xl:3, md:4, sm:6, xs:12 }}>
          <FormLabel component="legend">Âge de l'employé *</FormLabel>
          <FormControl fullWidth className={classes.formControl} error={!!errors.age}>
          <Select
            name="age"
            // value={values.age || ""}
            // onChange={handleChange}
            displayEmpty
            renderValue={(selected) => selected || "Choisir l'âge"}
          >
            <MenuItem value="" disabled>
              Choisir l'âge
            </MenuItem>
            {Array.from({ length: 46 }, (_, i) => 15 + i).map((age) => (
              <MenuItem key={age} value={age}>
                {age}
              </MenuItem>
            ))}
          </Select>
          {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
        </FormControl>

        </Grid>
      </Grid>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Grid item size={{ xs:12 }}>
          <Grid container spacing={3} style={{marginTop: "15px"}}>
            <Grid item size={{ xl:3, md:4, sm:6, xs:12 }}>
            <FormControl component="fieldset" className={classes.formControl} error={!!errors.sex}>
              <FormLabel component="legend">Genre *</FormLabel>
              <RadioGroup
                name="sex"
                // value={values.sex}
                // onChange={handleChange} 
              >
                <FormControlLabel value="male" control={<Radio />} label="Homme" />
                <FormControlLabel value="female" control={<Radio />} label="Femme" />
              </RadioGroup>
              {errors.sex && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.sex}</p>}
            </FormControl>
            </Grid>
            <Grid item size={{ xl:3, md:4, sm:6, xs:12 }}>
              <FormLabel component="legend">Status *</FormLabel>
              <RadioGroup
                  name="status"
                  // value={selectedstatus}
                  // onChange={(e) => setSelectedstatus(e.target.value)}
              >
                {StatusList.map((status) => (
                  <Tooltip
                    key={status.id}
                    title={
                      <div>
                        <strong>Staus</strong>
                        <br />
                        Fréquence : {status.frequence}
                      </div>
                    }
                    arrow
                    placement="right"
                  >
                    <FormControlLabel
                      value={status.id.toString()}
                      control={<Radio />}
                      label={status.name}
                    />
                  </Tooltip>
                ))}
              </RadioGroup>
            </Grid>
          </Grid> 
          <Grid container spacing={3} style={{marginTop: "15px"}}>
            <Grid item size={{ xs:12 }}>
              <ButtonGroup
                component="footer"
                style={{ marginTop: 20, gap: 40 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  type={exceedError ? "button" : "submit"}
                >
                  {okLabel}
                </Button>
                <Button
                  variant="contained"
                  className={classes.cancelButton}
                  onClick={onCancel}
                >
                  Annuler
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item size={{ xs:12 }}>
          {noticeText && (
            <Paper square elevation={0} className={classes.noticePaper}>
              <Typography variant="body2">
                {ReactHtmlParser(noticeText)}
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default MemberForm;
