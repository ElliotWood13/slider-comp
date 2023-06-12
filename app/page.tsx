"use client";
import { Box, Slider } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [amount, setAmount] = useState<number>(250000);
  const [time, setTime] = useState<number>(6);

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
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount)}
          </p>
        </Box>
        <Slider
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmount}
          defaultValue={50}
          min={250000}
          max={25000000}
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
            {time} months
          </p>
        </Box>
        <Slider
          id="time"
          name="time"
          value={time}
          onChange={handleTime}
          defaultValue={6}
          min={6}
          max={18}
          aria-label="Time"
          sx={{ marginBottom: 4 }}
        />

        <p style={{ fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.2" }}>
          Total:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount + amount * ((time * 1) / 100))}
        </p>
      </Box>
    </main>
  );
}
