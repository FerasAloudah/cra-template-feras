import { ReportHandler } from 'web-vitals';

const reportWebVitals: (onPerfEntry?: ReportHandler) => void = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry) {
    import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
