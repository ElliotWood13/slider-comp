"use client";
import { Box, Slider } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [amount, setAmount] = useState<number>(30);
  const [time, setTime] = useState<number>(1);

  const handleAmount = (event: Event, newValue: number | number[]) => {
    setAmount(newValue as number);
  };

  const handleTime = (event: Event, newValue: number | number[]) => {
    setTime(newValue as number);
  };

  return (
    <main className={styles.main}>
      <Box
        width={300}
        sx={{
          width: "100%",
          maxWidth: "48rem",
          backgroundColor: "#fff",
          borderRadius: "0.75rem",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          padding: "2rem",
          boxShadow: "0 16px 28px rgba(0, 0, 0, .1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label id="amount" style={{ fontSize: "1.25rem", lineHeight: "2" }}>
            Amount:
          </label>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.2" }}
          >
            {amount} APE
          </p>
        </Box>
        <Slider
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmount}
          defaultValue={50}
          min={0}
          max={100}
          aria-label="Amount"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label id="time" style={{ fontSize: "1.25rem", lineHeight: "2" }}>
            Time:
          </label>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.2" }}
          >
            {time} {time < 2 ? "month" : "months"}
          </p>
        </Box>
        <Slider
          id="time"
          name="time"
          value={time}
          onChange={handleTime}
          defaultValue={6}
          min={1}
          max={12}
          aria-label="Time"
          sx={{ marginBottom: 4 }}
        />

        <p style={{ fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.2" }}>
          Available amount: {amount + amount * ((time * 0.9) / 100)}
        </p>
      </Box>
    </main>
  );
}
