# System Overview

This export is a public-safe case-study summary for the local Pasban / Fleet & Telematics React Native project. It is rewritten for portfolio use and intentionally avoids production files, endpoints, credentials, real identifiers, screenshots, GPS data, routes, and API responses.

## Confirmed Application Type

Pasban is a React Native / Expo mobile application for fleet operations, telematics, driver safety, compliance workflows, reporting, training, profile management, and field requests.

Confirmed from codebase:

- React Native app bootstrapped through Expo.
- Cross-platform mobile target with Android, iOS, and web scripts declared.
- `App.js` wraps the app in Redux and theme providers.
- React Navigation stack routing is defined in `src/navigation/AppNavigator.js`.
- Redux store is configured in `src/redux/store.js`.
- Axios service functions are centralized in `src/utils/api.js`.
- Screens are organized under `src/screens/`.
- Reusable UI components are organized under `src/components/`.

## High-Level Architecture

```text
App.js
  |
  |-- Provider from react-redux
  |-- ThemeProvider
  |-- AppNavigator
        |
        |-- Authentication screens
        |-- Role-specific menu screens
        |-- Fleet dashboard and tracking screens
        |-- Violation and black-points screens
        |-- LTO and vehicle compliance screens
        |-- Reports screens
        |-- Inspection and assessment screens
        |-- Quiz, training, profile, and notification workflows

src/redux/
  |
  |-- store.js
  |-- actions/
  |-- reducers/

src/utils/
  |
  |-- api.js
  |-- authStorage.js
  |-- navigationHandler.js
  |-- notifications.js
```

## Major Domains

- Authentication and onboarding.
- Role-based menus for administrative, GSM, and standard user experiences.
- Fleet dashboard features such as current status, violations, high-risk drivers, mileage, and operational summary cards.
- Live vehicle tracking with map markers, clustering, and route path rendering.
- Route playback for historical vehicle movement.
- Driver violations, black points, and safety workflows.
- LTO and compliance workflows, including approvals, status cards, and authority-letter display.
- Vehicle inspections and driver assessments.
- Reports for trips, mileage, late-night exits, vehicle status, inspections, and assessments.
- Quiz, training session, feedback, profile, and user-management workflows.
- Notifications through Expo Notifications.

## Boundaries

The mobile app implementation is confirmed. Backend implementation, database schema, deployment infrastructure, production scale, operational KPIs, and team ownership are Not confirmed from codebase.

## Public-Safe Notes

Do not publish the private source repository directly. This project handles sensitive fleet and identity data, including vehicle identifiers, route history, GPS coordinates, employee metadata, contact fields, license-related fields, and operational safety records.

This case-study export must remain separate from private production files.
