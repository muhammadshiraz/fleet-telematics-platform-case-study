# Security and Redaction

This project should be treated as private unless a dedicated security review is completed.

## Do Not Publish

Do not publish:

- API endpoints.
- Tokens.
- Auth headers.
- API keys.
- Platform service configuration files.
- `.env` files.
- Secrets.
- API responses.
- Real GPS coordinates.
- Real routes.
- Driver names.
- Employee names.
- Vehicle IDs.
- Registration numbers.
- License numbers.
- Phone numbers.
- Customer data.
- Business regions.
- Production screenshots.
- Production logs.

## Source Review Warning

The private source contains production API configuration and sensitive service configuration. Values are intentionally omitted from this export.

Before any GitHub publication:

- Remove sensitive configuration from public materials.
- Rotate exposed credentials if they were ever committed.
- Review commit history for secrets.
- Run a secret scanner.
- Replace production data with synthetic examples.
- Confirm legal/customer approval for screenshots.
- Confirm no platform configuration files are included.
- Confirm screenshots do not show map labels, coordinates, or real routes.

## Safe Public Pattern

Use generic placeholders:

```text
https://api.example.invalid
<redacted-credential-placeholder>
Demo Vehicle
Synthetic Route Point
Sample Region
Sample Driver
```

Do not use realistic identifiers that resemble production records.

## Security Posture Notes

Confirmed from codebase:

- Axios adds bearer authentication for authenticated requests.
- AsyncStorage stores session and user metadata.
- Logout clears selected local authentication records.
- Expo Notifications is used for push-token workflows.

Not confirmed from codebase.

- Encrypted token storage.
- Token refresh lifecycle.
- Certificate pinning.
- Backend authorization enforcement.
- Audit logging.
- Data retention policy.
- Formal threat model.

## Manual Publishing Checklist

- Confirm every file in `case-study-export/` contains only public-safe text.
- Confirm code samples use fake data only.
- Confirm no copied private API helper code exists.
- Confirm no production screenshots are committed.
- Confirm no generated docs contain real endpoints, credentials, identifiers, locations, or customer details.
