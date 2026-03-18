# Pastel Pomodoro Timer

A modern, minimal Pomodoro timer web app built with React (CDN), TailwindCSS (CDN), and smooth CSS transitions.

## Features

- Pomodoro timer with presets: 25/5, 50/10, 45/15
- Manual session duration settings
- Circular animated progress UI
- Live clock mode
- Countdown to midnight mode
- Todoist integration (fetch tasks and mark complete)
- Daily Pomodoro completion tracker (last 7 days)
- Local persistence for settings, theme, and progress history
- Light/dark theme toggle
- Auto-start next session option
- Subtle audio cue on session transitions
- Responsive layout

## Run

No build step is required.

1. Open `index.html` in a browser.
2. For Todoist, add your API token in Settings, then click Sync.

## Notes

- Data is stored in localStorage under keys prefixed with `pp_`.
- Since this environment does not have Node.js/npm installed, the app is provided as a zero-build React implementation.

## Todoist On Vercel

If you deploy to Vercel, set this environment variable in your project settings:

- `TODOIST_API_TOKEN` = your Todoist API token

This project includes serverless endpoints:

- `/api/todoist/tasks`
- `/api/todoist/close`

The frontend calls these endpoints to avoid browser CORS issues with direct Todoist requests.
