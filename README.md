# Pastel Pomodoro

A premium-feel focus timer built for deep work.

No install. No build. Just open and lock in.

## Why This App Hits Different

Pastel Pomodoro blends productivity with atmosphere: smooth motion, rich theme swaps, focused task flow, and a clean timer experience that stays out of your way.

It is designed to feel intentional at every touchpoint, from the animated load screen to the circular timer and weekly streak view.

## Core Features

### Focus Timer Engine

- Pomodoro presets: 25/5, 50/10, 45/15
- Start, pause, reset, skip controls
- Circular animated progress ring
- Work/break phase switching with optional auto-start
- Soft transition sound cue between phases
- Timer continues running even when you switch tabs inside the app

### Built-In Task Workflow

- Paste tasks in bulk from More Controls
- Automatic line-to-task parsing
- Mark tasks done/undo in one tap
- Completed tasks section with quick clear action
- Local task persistence

### Multi-Mode Dashboard

- Pomodoro Mode: immersive timer + controls + task panel
- Live Clock Mode: centered 12-hour clock with AM/PM
- Next Day Mode: countdown to midnight with progress bar
- Progress Mode: weekly session streak view (Sun to Sat)

### Theme System

- One-tap theme cycling from the top-right emoji button
- Full palette swaps (not just accent recolors)
- Theme-matched dynamic tab icon (favicon)
- Distinct visual identities, including:
	- Dark Mint
	- Light Blue
	- Heart Pink
	- Sunset Pastel
	- Plus additional creative palettes

### Luxury UI Details

- Delayed animated loading intro
- Rotating loading messages with easter-egg lines
- Glassmorphism cards, drifting ambient blobs, smooth transitions
- Responsive layout optimized for desktop and mobile

## Persistence

Everything important is saved locally using browser localStorage, including:

- Theme selection
- Timer settings
- Session history
- Tasks
- Loader message rotation state

## Stack

- React 18 (UMD via CDN)
- TailwindCSS (CDN)
- Babel Standalone (browser transpile)
- Single-file app architecture in index.html

## Run Locally

No dependency install required.

1. Open index.html in your browser.
2. Start a session and lock in.

## Project Structure

- index.html: full app (UI, logic, styles)
- README.md: project overview
- api/: legacy backend experimentation (not required for current local app flow)

## Best Use Flow

1. Pick your preferred visual theme (emoji button).
2. Choose a timer preset.
3. Paste your task list in More Controls.
4. Run focused cycles.
5. Track your consistency in Progress mode.

## Vision

This project is built around one idea:

Make focus feel good enough to come back to every day.
