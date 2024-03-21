import React, { useEffect, useState } from 'react';

function DataFetcher({ url, children }) {
  const [userData, setUserData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [servicesData, setServicesData] = useState(null); // Add state for services data
  const [timelineData, setTimelineData] = useState(null); // Add state for services data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData);
        setUserData(jsonData.user);
        setSkillsData(jsonData.user.skills);
        setServicesData(jsonData.user.services); // Set services data state
        setTimelineData(jsonData.user.timeline); // Set services data state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return <>{children(userData, skillsData, servicesData, timelineData)}</>; // Pass servicesData to children
}

export default DataFetcher;
