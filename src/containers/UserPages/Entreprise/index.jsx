import React, { useState } from 'react';
import { Search, Users, MessageSquare, Briefcase } from 'lucide-react';
import { getImageUrl } from "../../../utils/images";
import Grid from "@mui/material/Grid2";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { apiCreateEntreprise } from "../../../api/entreprise";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from './entreprise-jss'; 
const useStyles = createUseStyles(styles);

const Entreprise = () => {
    const classes = useStyles();

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({ name: "", nombreEmployes: "" });

    const steps = [
        {
            title: "Bienvenue sur KeepCalm",
            description: "KeepCalm est conçu pour optimiser la gestion d'équipe en entreprise. Cet outil, développé par FARALAHY Julio, vous accompagne dans l'organisation et la collaboration au sein de votre structure.",
            icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
            img: "note.png"
        },
        {
            title: "Optimisez votre organisation",
            description: "KeepCalm centralise la gestion des projets, des équipes et des ressources en un seul espace. Profitez de ses fonctionnalités avancées pour structurer efficacement votre entreprise.",
            icon: <Users className="w-10 h-10 text-green-600" />,
            img: "manage.png"
        },
        {
            title: "Créer mon entreprise.",
            icon: <Briefcase className="w-10 h-10 text-purple-600" />,
            img: "note.png"
        }
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCreate = async () => {
        const newEntreprise = { name: formData.name, nombreEmployes: formData.nombreEmployes };
        const resEntreprise = await apiCreateEntreprise(newEntreprise);
        if (resEntreprise && resEntreprise.entreprise) {
            navigate("/admin/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className={classes.entrepriseContainer}>
                <div className="flex mb-8">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentStep ? 'bg-purple-600' : 'bg-gray-200'}`}
                        />
                    ))}
                </div>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <div className="flex-grow flex flex-col justify-center">
                            {steps[currentStep].icon}
                            <h1 className="text-2xl font-bold mt-6 mb-4">
                                {steps[currentStep].title}
                            </h1>
                            {steps[currentStep].description ? (
                                <p className="text-gray-600 text-lg">
                                    {steps[currentStep].description}
                                </p>
                            ) : (
                                <CreateEntreprise formData={formData} handleChange={handleChange} />
                            )}
                        </div>
                    </Grid>
                    <Grid item size={{ xs: 12, md:6 }} className={classes.representationImg}>
                        <img className="w-full max-w-xs max-w-md" src={getImageUrl(steps[currentStep].img)} alt="" />
                    </Grid>
                </Grid>
                
                <div className="flex justify-between mt-auto">
                    <button
                        onClick={handleBack}
                        className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors ${
                            currentStep === 0 ? 'invisible' : ''
                        }`}
                    >
                        Retour
                    </button>
                    {currentStep === steps.length - 1 ? (
                        <button
                            onClick={handleCreate}
                            className="px-6 py-2 rounded-lg text-white transition-colors bg-purple-500 hover:bg-purple-600"
                        >
                            Enregistrer
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 rounded-lg text-white transition-colors bg-green-600 hover:bg-green-700"
                        >
                            Suivant
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const CreateEntreprise = ({ formData, handleChange }) => {
    return (
        <form className='mt-3'>
            <InputLabel id="select-employes-label">Nom de l'entreprise *</InputLabel>
            <input
                type="text"
                name="name"
                placeholder="Nom de l'entreprise"
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-black border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                value={formData.name}
                onChange={handleChange} 
            />
            <div className='mt-3'>
                <InputLabel id="select-employes-label">Nombre d'employés *</InputLabel>
                <Select
                    labelId="select-employes-label"
                    name="nombreEmployes"
                    sx={{ height: "50px" }}
                    className="w-full bg-gray-100 text-black border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                    value={formData.nombreEmployes}
                    onChange={handleChange}
                >
                    <MenuItem value="1_5">1 à 5</MenuItem>
                    <MenuItem value="5_10">5 à 10</MenuItem>
                    <MenuItem value="10+">Plus de 10</MenuItem>
                </Select>
            </div>
        </form>
    );
};

export default Entreprise;
