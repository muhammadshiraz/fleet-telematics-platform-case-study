# Feature Inventory

This inventory is public-safe and avoids production records, screenshots, identifiers, routes, and endpoints.

## Authentication and Session

- First-launch routing.
- Login, signup, forgot-password, and reset-password screens.
- Local session metadata through AsyncStorage.
- Role-based routing after login.
- Logout flow and notification-token cleanup behavior.

## Role-Based Menus

- Admin menu.
- GSM menu.
- Standard user menu.
- Role-specific access to dashboards, reports, tracking, LTO, quiz/training, profile, and vehicle-management areas.

The complete permission matrix is Not confirmed from codebase.

## Fleet Dashboard

Confirmed feature areas:

- Fleet status summary.
- Vehicle-status reporting.
- Moving, stopped, responding, and non-responding vehicle concepts.
- Violation summaries.
- High-risk driver summaries.
- Mileage/traveler summaries.
- Cards, charts, filters, and detail screens.

Production fleet size and business impact are Not confirmed from codebase.

## Live Tracking and Route Playback

Confirmed feature areas:

- Entire-fleet map.
- Clustered map markers.
- Vehicle search/selection.
- Last-position tracking.
- Historical route/travel playback.
- Animated vehicle marker movement.
- Marker rotation based on direction.
- Route polylines.
- Play, pause, and stop controls.

Public examples must use fake coordinates and synthetic route points only.

## Driver Violations and Safety

Confirmed feature areas:

- Violation dashboard.
- Vehicle-wise, day-wise, time-wise, and speed-violation reports.
- Black-points screen and detail workflow.
- High-risk driver summaries.
- Filters by dates and organizational dimensions.

Real driver names, employee IDs, vehicle identifiers, and safety records must never be published.

## LTO and Compliance

Confirmed feature areas:

- LTO dashboard.
- LTO lists and detail screens.
- Cancelled LTO workflow.
- LTO initiation form.
- Authority-letter viewing.
- Vehicle, DDC, training, license, and document status summaries.

The full expansion of DDC is Not confirmed from codebase.

## Inspections and Assessments

Confirmed feature areas:

- Vehicle inspection form.
- Driver assessment form.
- Vehicle inspection reports.
- Road driving assessment reports.
- Detail screens for inspection and assessment history.

## Reports

Confirmed report areas:

- Vehicle last-update status.
- Late-night exits.
- Vehicle traveling / trip report.
- Vehicle inspection.
- Road driving assessment.
- Monthly mileage.
- Search and date filters.
- List and detail navigation.

## Quiz, Training, Feedback, and Profile

Confirmed feature areas:

- Active quiz sessions.
- Past quiz sessions.
- Session questions and answer submission.
- Quiz result display.
- Optional feedback workflow.
- Quiz management.
- Profile management and edit workflows.
- User-management screens.
- Push notification setup.

## Tracker and Field Requests

Confirmed feature areas:

- Tracker maintenance menu.
- Tracker transfer workflow.
- Tracker removal workflow.
- Tracker checkup/request workflow.
- Pre-information creation.
- Pre-information history.
- Vehicle immobilization / secure parking workflow.

## Not Confirmed From Codebase

- Production user count.
- Production fleet size.
- Measured safety impact.
- Measured cost savings.
- Backend architecture.
- Database schema.
- Deployment process.
- Automated test coverage.
