# Data Flow

This document describes the public-safe data flow for the Pasban mobile app.

## Confirmed Client Flow

```text
User action or screen mount
  |
  |-- React Native screen
  |-- Redux Thunk action
  |-- Axios service function
  |-- Remote API
  |-- Response parsing / normalization
  |-- Redux reducer
  |-- Screen re-render
```

## API Layer

Confirmed from `src/utils/api.js`:

- Axios is used for API communication.
- A general application API client is configured.
- A separate tracking/telematics API client is configured.
- Authenticated requests attach a bearer token from AsyncStorage for non-public calls.
- Login and registration are treated as unauthenticated endpoints.
- Domain service functions are grouped in the API utility.

Production hostnames, credentials, auth headers, endpoint paths, and request/response payloads are intentionally omitted from this export.

## Domain Data Areas

The API utility and Redux modules cover:

- Authentication and signup.
- Fleet reports and vehicle status.
- Violation summaries.
- Black-points and high-risk driver summaries.
- LTO status, approvals, forms, authority letters, and compliance data.
- Profile and user management.
- Reports for trips, late-night exits, monthly mileage, vehicle status, inspections, and assessments.
- Live tracking and route history.
- Pre-information, secure parking, tracker transfer, and tracker removal workflows.
- Quiz, training, sessions, questions, answers, feedback, and result summaries.

## Tracking Data Flow

```text
Tracking screen
  |
  |-- dispatch tracking thunk
  |-- tracking API helper fetches last position or history
  |-- result is parsed or normalized
  |-- tracking reducer stores response
  |-- map renders markers, polylines, callouts, and playback state
```

Public case-study samples must use fake route points only. Never publish real vehicle movement, coordinates, route history, timestamps, or location labels.

## Error and Empty-State Handling

Confirmed patterns:

- Redux actions dispatch failure states.
- Screens display loading indicators, alerts, toasts, empty states, and validation messages.
- Some not-found responses are treated as empty data.

## Not Confirmed From Codebase

- Backend validation rules.
- Database schema.
- Server-side authorization behavior.
- Audit logging.
- Data retention policy.
- Data encryption at rest.
- Formal API schema such as OpenAPI.
