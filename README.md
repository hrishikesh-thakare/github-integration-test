# fleet-telemetry

Telemetry ingest and alerting for the Kestrel Robotics fleet.

- `src/telemetry` — uplink ingest, CAN-bus frame decoding, burst buffering
- `src/alerts` — rule evaluation and dispatch
- `src/store` — time-series writes, retention and downsampling
- `src/api` — fleet-facing HTTP surface
test
2
3
