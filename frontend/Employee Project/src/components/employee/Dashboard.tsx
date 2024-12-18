import { Edit, Delete } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../../services/api-services";
import { useNavigate } from "react-router-dom";
import { employeeType } from "../../types/type";

export default function Dashboard() {
  const [employees, setEmployees] = useState<employeeType[]>([
    {
      id: "",
      name: "",
      department: "",
      salary: 0,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const result = await api.showData(token);
          setEmployees(result);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        await api.deleteData(id, token);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          navigate("/add-employee");
        }}
      >
        Add Employee
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp: any, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.salary}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      navigate(`/update/${emp._id}`);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      handleDelete(emp._id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
