"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { extract } from "../utils/extract";

export default function MetanetTestThree() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleExtract = () => {
    setOutput(extract(input));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Extract Text Between `Hello` and `world`
      </Typography>
      <TextField
        label="Input Text"
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleExtract}>
        Extract
      </Button>
      {output && (
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Extracted Text: {output}
        </Typography>
      )}
    </Container>
  );
}
