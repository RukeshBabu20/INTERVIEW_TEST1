import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import * as api from "../../services/api-services";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { name: "", department: "", salary: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.department) {
      newErrors.department = "Department is required";
      isValid = false;
    }
    if (!formData.salary) {
      newErrors.salary = "Salary is required";
      isValid = false;
    } else if (isNaN(Number(formData.salary))) {
      newErrors.salary = "Salary must be a valid number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const result = await api.createData(formData as any, token);
          if (result) {
            alert("User Created Successfully!");
            navigate("/dashboard");
          } else {
            alert("User Creation Failed!");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go Back
      </Button>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom mb={2}>
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Department"
              name="department"
              variant="outlined"
              value={formData.department}
              onChange={handleChange}
              error={!!errors.department}
              helperText={errors.department}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Salary"
              name="salary"
              type="number"
              variant="outlined"
              value={formData.salary}
              onChange={handleChange}
              error={!!errors.salary}
              helperText={errors.salary}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Create User
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
