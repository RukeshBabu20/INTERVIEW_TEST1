import { Edit, Delete, Add } from "@mui/icons-material";
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
  console.log(employees);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.showData();
        setEmployees(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.deleteData(id);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(employees);
  return (
    <>
      <Button style={{ display: "flex", justifyContent: "center" }}>
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
                  <IconButton color="primary">
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
