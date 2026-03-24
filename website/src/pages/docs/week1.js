import {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

export default function Week1Redirect() {
  const location = useLocation();

  useEffect(() => {
    window.location.replace(
      `${location.pathname.replace(/\/docs\/week1$/, '/docs/week01-understanding-value')}${location.search}${location.hash}`,
    );
  }, [location]);

  return null;
}