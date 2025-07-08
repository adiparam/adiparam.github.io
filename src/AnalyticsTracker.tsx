import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with a custom title including the hash
    // For example, if the path is /blog#my-section, the title will be /blog#my-section
    // This helps differentiate between sections of the same page if you use hash routing or fragments
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash, title: location.pathname + location.search + location.hash });
    console.log(`Pageview sent for: ${location.pathname + location.search + location.hash}`);
  }, [location]);

  return null; // This component does not render anything
};

export default AnalyticsTracker;
