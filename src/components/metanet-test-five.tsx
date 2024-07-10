"use client";
import { useState } from "react";
import { Container, Button, List, ListItem, Typography, Box, Card, CardContent } from '@mui/material';

const competitors = Array.from({ length: 25 }, (_, i) => `Competitor ${i + 1}`);

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const findTopCompetitors = (competitors: string[]) => {
  const shuffled = shuffleArray([...competitors]);
  const groups = Array.from({ length: 5 }, (_, i) =>
    shuffled.slice(i * 5, i * 5 + 5)
  );
  const winners = groups.map((group) => shuffleArray(group)[0]);
  const finalRace = shuffleArray(winners);
  const top1 = finalRace[0];
  const top1Group = groups.find((group) => group.includes(top1))!;
  const remainingCompetitors = [
    ...finalRace.slice(1),
    ...top1Group.filter((comp) => comp !== top1),
  ];
  const shuffledRemaining = shuffleArray(remainingCompetitors);
  const top2 = shuffledRemaining[0];
  const top3 = shuffledRemaining[1];

  return [top1, top2, top3];
};

export default function MetanetTestFive() {
  const [result, setResult] = useState<string[]>([]);

  const handleClick = () => {
    const topCompetitors = findTopCompetitors(competitors);
    setResult(topCompetitors);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Top 3 Competitors
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{ mb: 3 }}
        >
          Find Top 3 Competitors
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {result.map((competitor, index) => (
            <Card key={index} sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5">{`Rank ${index + 1}`}</Typography>
                <Typography variant="body1">{competitor}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
