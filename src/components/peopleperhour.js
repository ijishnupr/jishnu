import React, { useEffect } from 'react';

const PeoplePerHourWidget = () => {
  useEffect(() => {
    const useSSL = 'https:' === document.location.protocol;
    const script = document.createElement('script');
    const where = document.getElementsByTagName('script')[0];

    script.src = `${
      useSSL ? 'https:' : 'http:'
    }//www.peopleperhour.com/hire/2380964019/10584501.js?width=400&height=200&orientation=horizontal&theme=dark&rnd=${parseInt(
      Math.random() * 10000,
      10
    )}`;
    script.async = true;

    try {
      where.parentNode.insertBefore(script, where);
    } catch (error) {
      console.error('Error inserting script:', error);
    }

    return () => {
      // Cleanup - remove the script when the component unmounts
      script.parentNode.removeChild(script);
    };
  }, []);

  return <div id="pph-hireme"></div>;
};

export default PeoplePerHourWidget;
