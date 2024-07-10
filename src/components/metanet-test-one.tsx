"use client";
import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const calculateHeights = () => {
  const combinedHeightCat = 170;
  const combinedHeightTurtle = 130;

  const tableHeight = (combinedHeightCat + combinedHeightTurtle - 40) / 2;
  const catHeight = combinedHeightCat - tableHeight;
  const turtleHeight = combinedHeightTurtle - tableHeight;

  return { tableHeight, catHeight, turtleHeight };
};

export default function MetanetTestOne() {
  const [heights, setHeights] = useState<{
    tableHeight: number;
    catHeight: number;
    turtleHeight: number;
  } | null>(null);

  const handleCalculate = () => {
    const calculatedHeights = calculateHeights();
    setHeights(calculatedHeights);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Logic Puzzle Solution : Calculate Heights
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate
      </Button>
      {heights && (
        <Box mt={5} p={3} bgcolor="white" boxShadow={3} borderRadius={2}>
          <Typography variant="h6">Results:</Typography>
          <Typography>Table Height: {heights.tableHeight} cm</Typography>
          <Typography>Cat Height: {heights.catHeight} cm</Typography>
          <Typography>Turtle Height: {heights.turtleHeight} cm</Typography>
        </Box>
      )}
    </Container>
  );
}
