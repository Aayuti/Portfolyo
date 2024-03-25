import React, { useEffect, useState } from 'react';
// import UserAvatar from './UserAvatar';

function DataFetcher({ url, children }) {
  const [userData, setUserData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [servicesData, setServicesData] = useState(null); // Add state for services data
  const [timelineData, setTimelineData] = useState(null); 
  const [avatarUrl, setAvatarUrl] = useState(null);

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
        setAvatarUrl(jsonData.user.about.avatar.url);
        console.log('Avatar API is fetched:', jsonData.user.about.avatar.url);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return<>
    {/* {userData && avatarUrl && children(userData, avatarUrl)} */}
    {children(userData, skillsData, servicesData, timelineData, avatarUrl)}</>; // Pass servicesData to children
}

export default DataFetcher;
