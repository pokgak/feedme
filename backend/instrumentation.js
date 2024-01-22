/*instrumentation.js*/
const opentelemetry = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-proto');
// const {
//   OTLPMetricExporter,
// } = require('@opentelemetry/exporter-metrics-otlp-proto');
// const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');

const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: 'http://tempo.monitoring:4318/v1/traces',
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
  }),
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new OTLPMetricExporter({
  //     url: '<your-otlp-endpoint>/v1/metrics', // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
  //     headers: {}, // an optional object containing custom headers to be sent with each request
  //     concurrencyLimit: 1, // an optional limit on pending requests
  //   }),
  // }),
  instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();
