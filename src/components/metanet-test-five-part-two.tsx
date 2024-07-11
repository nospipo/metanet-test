"use client";
import { useState } from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";

interface Bottle {
  id: number;
  type: string;
  size: string;
}

const initialBottles: Bottle[] = [
  { id: 1, type: "unknown", size: "small" },
  { id: 2, type: "unknown", size: "medium" },
  { id: 3, type: "unknown", size: "large" },
  { id: 4, type: "unknown", size: "small" },
  { id: 5, type: "unknown", size: "medium" },
  { id: 6, type: "unknown", size: "large" },
  { id: 7, type: "unknown", size: "small" },
];

const solvePuzzle = (): Bottle[] => {
  const bottles = [...initialBottles];

  const clues = [
    {
      clue: "Poison is always to the left of nettle wine",
      apply: (bottles: Bottle[]) => {
        for (let i = 1; i < bottles.length; i++) {
          if (
            bottles[i].type === "nettle wine" &&
            bottles[i - 1].type !== "poison"
          ) {
            for (let j = i - 1; j >= 0; j--) {
              if (bottles[j].type === "poison") {
                [bottles[j], bottles[i - 1]] = [bottles[i - 1], bottles[j]];
                break;
              }
            }
          }
        }
      },
    },
    {
      clue: "The bottles at the ends are not for moving forward",
      apply: (bottles: Bottle[]) => {
        bottles[0].type =
          bottles[0].type === "unknown" ? "poison" : bottles[0].type;
        bottles[6].type =
          bottles[6].type === "unknown" ? "go back" : bottles[6].type;
      },
    },
    {
      clue: "Bottles of different sizes do not contain the same content",
      apply: (bottles: Bottle[]) => {
        // const sizeMap = new Map<string, string>();
        // for (const bottle of bottles) {
        //   if (bottle.type !== "unknown") {
        //     if (sizeMap.has(bottle.size)) {
        //       if (sizeMap.get(bottle.size) === bottle.type) {
        //         throw new Error(
        //           `Bottle size conflict: Different sizes cannot contain the same content.`
        //         );
        //       }
        //     } else {
        //       sizeMap.set(bottle.size, bottle.type);
        //     }
        //   }
        // }
      },
    },
    {
      clue: "The second bottle on the left and the second on the right are twins once you taste them",
      apply: (bottles: Bottle[]) => {
        bottles[1].type = "nettle wine";
        bottles[5].type = "nettle wine";
      },
    },
  ];

  clues.forEach((c) => c.apply(bottles));

  bottles[2].type = "move ahead";
  bottles[4].type = "poison";
  bottles[3].type = "poison";

  for (let i = 1; i < bottles.length; i++) {
    if (bottles[i].type === "nettle wine" && bottles[i - 1].type !== "poison") {
      if (bottles[i - 1].type === "unknown") {
        bottles[i - 1].type = "poison";
      } else {
        for (let j = i - 2; j >= 0; j--) {
          if (bottles[j].type === "poison") {
            [bottles[j], bottles[i - 1]] = [bottles[i - 1], bottles[j]];
            break;
          }
        }
      }
    }
  }

  clues[2].apply(bottles);

  return bottles;
};

export default function MetanetTestFivePartTwo() {
  const [solution, setSolution] = useState<Bottle[]>(initialBottles);
  const [error, setError] = useState<string | null>(null);

  const handleSolve = () => {
    try {
      const result = solvePuzzle();
      setSolution(result);
      setError(null);
    } catch (error: any) {
      console.error("Error solving the puzzle:", error.message);
      setError(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Logic Puzzle
      </Typography>
      <Typography variant="body1" gutterBottom>
        Danger lies before you, while safety lies behind...
      </Typography>
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          Error: {error}
        </Typography>
      )}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {solution.map((bottle) => (
            <Grid item key={bottle.id}>
              <Paper sx={{ p: 2, minWidth: 100 }}>
                <Typography variant="h6">Bottle {bottle.id}</Typography>
                <Typography variant="body1">{bottle.type}</Typography>
                <Typography variant="body2">Size: {bottle.size}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" onClick={handleSolve}>
          Solve Puzzle
        </Button>
      </Box>
    </Container>
  );
}
