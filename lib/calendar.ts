import type { IBGEvent } from "@/data/events";

/**
 * Convert "2026-03-17" to "20260317" (all-day format for Google Calendar)
 */
function toGoogleDate(iso: string): string {
  return iso.replace(/-/g, "");
}

/**
 * For all-day Google Calendar events, end date must be the day AFTER the last day.
 */
function nextDay(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

/**
 * Build a Google Calendar "Add Event" URL.
 * Opens in a new tab with the event pre-filled.
 */
export function getGoogleCalendarUrl(event: IBGEvent): string {
  const start = toGoogleDate(event.startDate);
  const end = nextDay(event.endDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate ICS file content for Apple Calendar / Outlook.
 */
function getICSContent(event: IBGEvent): string {
  const start = event.startDate.replace(/-/g, "");
  const end = nextDay(event.endDate).replace(/(\d{4})(\d{2})(\d{2})/, "$1$2$3");
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//In Bound Gymnastics//Events//EN",
    "BEGIN:VEVENT",
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${end}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Download an .ics file for the given event.
 */
export function downloadICS(event: IBGEvent): void {
  const content = getICSContent(event);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
