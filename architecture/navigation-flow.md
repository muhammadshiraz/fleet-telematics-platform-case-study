# Navigation Flow

This document describes the public-safe navigation architecture confirmed from the local React Native project.

## Confirmed Navigation Stack

The app uses React Navigation with a stack navigator. The root navigator is defined in `src/navigation/AppNavigator.js`.

Confirmed behavior:

- A `NavigationContainer` wraps a stack navigator.
- Screens are registered centrally in the root stack.
- Headers are disabled for most screens.
- Horizontal iOS-style transitions are configured.
- Gesture navigation is disabled for many operational screens.

## Startup Flow

`App.js` performs startup checks before rendering the navigator:

1. Load Roboto fonts.
2. Prevent automatic splash screen hiding until initialization finishes.
3. Check whether the app is being launched for the first time.
4. Check local authentication/session state in AsyncStorage.
5. If a valid stored session is present, select the role-based initial route.
6. If no valid session is present, route to login.
7. Render `AppNavigator` with the resolved initial route.

## Role-Based Routing

`src/utils/navigationHandler.js` routes users after authentication.

Confirmed destinations:

- Administrative roles route to an admin menu.
- A standard user role routes to a user menu.
- A GSM role routes to a GSM menu.

The exact meaning of every role identifier is Not confirmed from codebase. Public docs should describe role groups by responsibility rather than exposing internal numeric role IDs.

## Main Navigation Areas

The root stack includes screens for:

- Onboarding and authentication.
- Admin, GSM, and user menus.
- Fleet and violation dashboards.
- LTO and approval workflows.
- Vehicle inspection and driver assessment.
- Profile and user management.
- Quiz and training workflows.
- Reports and report details.
- Entire fleet map, live tracking, and travel history.
- Tracker maintenance, transfer, removal, and pre-information workflows.
- Vehicle immobilization.

## Public-Safe Diagram

```text
App Launch
  |
  |-- First launch? -> Get Started
  |
  |-- Existing valid session?
  |       |
  |       |-- Admin group -> Admin Menu
  |       |-- GSM group -> GSM Menu
  |       |-- Standard user group -> User Menu
  |
  |-- No valid session -> Login

Role Menu
  |
  |-- Dashboards
  |-- Tracking
  |-- Reports
  |-- LTO / Compliance
  |-- Inspections / Assessments
  |-- Quiz / Training
  |-- Profile / Notifications
```

## Not Confirmed From Codebase

- Server-side authorization rules.
- Complete role permission matrix.
- Deep-linking behavior.
- Tab navigation or drawer navigation.
- Formal navigation analytics.
