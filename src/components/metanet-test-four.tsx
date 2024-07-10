"use client";
import { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { primeAt } from "../utils/prime";

export default function MetanetTestFour() {
  const [index, setIndex] = useState<number>(1);
  const [prime, setPrime] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(event.target.value));
  };

  const findPrime = () => {
    setPrime(primeAt(index));
  };

  return (
    <Container>
      <Box textAlign="center" marginTop={4}>
        <Typography variant="h4" gutterBottom>
          Prime Number Finder
        </Typography>
        <TextField
          type="number"
          label="Enter Index"
          value={index}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          inputProps={{ min: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={findPrime}
          style={{ marginLeft: "20px" }}
        >
          Find Prime
        </Button>
        {prime !== null && (
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Prime number at index {index} is {prime}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
