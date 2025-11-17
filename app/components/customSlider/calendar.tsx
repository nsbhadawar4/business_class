"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Tooltip,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import dayjs from "dayjs";

interface CalendarDay {
  date: dayjs.Dayjs;
  price?: string;
  unavailable?: boolean;
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);

  const unavailableDates = [
    "2025-11-15",
    "2025-11-18",
    "2025-11-22",
    "2025-11-25",
    "2025-11-30",
  ];

  const prices: Record<string, string> = {
    // "2025-11-05": "$585",
    // "2025-11-06": "$585",
  };

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const days: CalendarDay[] = [];
  let day = startDate;
  while (day.isBefore(endDate) || day.isSame(endDate)) {
    days.push({
      date: day,
      price: prices[day.format("YYYY-MM-DD")],
      unavailable: unavailableDates.includes(day.format("YYYY-MM-DD")),
    });
    day = day.add(1, "day");
  }

  const handlePrevMonth = () =>
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth((prev) => prev.add(1, "month"));

  const handleDateClick = (date: dayjs.Dayjs) => {
    if (date.month() !== currentMonth.month()) return; // ⛔ Disable out-of-month
    if (unavailableDates.includes(date.format("YYYY-MM-DD"))) return;

    if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      const [start] = selectedDates;
      if (date.isBefore(start)) {
        setSelectedDates([date, start]);
      } else {
        setSelectedDates([start, date]);
      }
    } else {
      setSelectedDates([date]);
    }
  };

  const isInRange = (date: dayjs.Dayjs) => {
    if (selectedDates.length !== 2) return false;
    const [start, end] = selectedDates;
    return date.isAfter(start) && date.isBefore(end);
  };

  const isSelected = (date: dayjs.Dayjs) =>
    selectedDates.some((d) => d.isSame(date, "day"));

  const isToday = (date: dayjs.Dayjs) => date.isSame(dayjs(), "day");

  return (
    <>
      <Typography variant="h2" mb={2}>
        Availability
      </Typography>

      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          p: 3,
          maxWidth: 600,
          backgroundColor: "#fff",
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography fontWeight="bold" fontSize="1.1rem">
            {currentMonth.format("MMMM YYYY")}
          </Typography>
          <Box>
            <IconButton onClick={handlePrevMonth} size="small">
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton onClick={handleNextMonth} size="small">
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Stack>

        {/* Weekday labels */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            mb: 1.5,
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <Typography
              key={d}
              variant="body2"
              fontWeight={600}
              color="text.secondary"
            >
              {d}
            </Typography>
          ))}
        </Box>

        {/* Dates Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px", // space between boxes
            justifyContent: "space-between",
          }}
        >
          {days.map(({ date, price, unavailable }) => {
            const selected = isSelected(date);
            const inRange = isInRange(date);
            const today = isToday(date);
            const isCurrentMonth = date.month() === currentMonth.month();

            return (
              <Tooltip
                title={unavailable ? "Unavailable" : ""}
                key={date.toString()}
              >
                <Box
                  onClick={() => handleDateClick(date)}
                  sx={{
                    flex: "1 0 calc(14.28% - 5px)",
                    maxWidth: "calc(14.28% - 5px)",
                    aspectRatio: "1 / 1",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: today ? "2px solid black" : "1px solid transparent",
                    backgroundColor: !isCurrentMonth
                      ? ""
                      : unavailable
                      ? "#F9FAFA"
                      : selected
                      ? "#030213"
                      : inRange
                      ? "#03021333"
                      : "transparent",
                    color: !isCurrentMonth
                      ? "#b0b0b0"
                      : selected
                      ? "#fff"
                      : "#000",
                    position: "relative",
                    cursor:
                      !isCurrentMonth || unavailable ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor:
                        !isCurrentMonth || unavailable || selected || inRange
                          ? undefined
                          : "#f0f0f0",
                    },
                  }}
                >
                  <Typography fontWeight={500}>
                    {isCurrentMonth ? date.date() : ""}
                  </Typography>

                  {/* Price */}
                  {price && isCurrentMonth && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        position: "absolute",
                        bottom: 4,
                        left: 0,
                        right: 0,
                      }}
                    >
                      {price}
                    </Typography>
                  )}

                  {/* Unavailable slash */}
                  {unavailable && isCurrentMonth && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotate(-25deg)",
                        width: "60%",
                        height: "2px",
                        bgcolor: "red",
                      }}
                    />
                  )}
                </Box>
              </Tooltip>
            );
          })}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Legend */}
        <Stack
          direction="row"
          spacing={3}
          flexWrap="wrap"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 14,
                height: 14,
                bgcolor: "#0a0a0a",
                borderRadius: "3px",
              }}
            />
            <Typography variant="caption">Selected</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 14,
                height: 14,
                bgcolor: "#c7c7c7",
                borderRadius: "3px",
              }}
            />
            <Typography variant="caption">In range</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 14,
                height: 14,
                border: "1px solid #ccc",
                position: "relative",
                borderRadius: "3px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-25deg)",
                  width: "80%",
                  height: "2px",
                  bgcolor: "red",
                }}
              />
            </Box>
            <Typography variant="caption">Unavailable</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 14,
                height: 14,
                border: "1px solid black",
                borderRadius: "3px",
              }}
            />
            <Typography variant="caption">Today</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Calendar;
