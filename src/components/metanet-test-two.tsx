"use client";
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const steps = [
  { step: "A และ B ข้ามสะพาน", time: 2 },
  { step: "A กลับมา", time: 1 },
  { step: "C และ D ข้ามสะพาน", time: 8 },
  { step: "B กลับมา", time: 2 },
  { step: "A และ B ข้ามสะพานอีกครั้ง", time: 2 }
];

export default function MetanetTestTwo() {
    const totalTime = steps.reduce((acc, step) => acc + step.time, 0);

    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Logic Puzzle Solution: Crossing the Bridge
          </Typography>
          <Typography variant="h6" gutterBottom>
            มีทั้งหมด 4 คน (A, B, C, D) และต้องการข้ามสะพานในเวลาที่น้อยที่สุด โดยใช้วิธีดังนี้:
          </Typography>
          <Grid container spacing={2}>
            {steps.map((step, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">{`ขั้นตอนที่ ${index + 1}: ${step.step}`}</Typography>
                    <Typography variant="body2">{`ใช้เวลา: ${step.time} นาที`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">เวลารวมทั้งหมด: {totalTime} นาที</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
}