const API_URL = process.env.REACT_APP_API_URL;

export const getRelatedJobs = async (clientID, customerID) => {
    try {
        const response = await fetch(`${API_URL}/api/jobs/related/${clientID}/${customerID}`, {
            headers: {
                'ngrok-skip-browser-warning': 'any-value-works'
            }
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to fetch jobs');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching related jobs:', error);
        throw error;
    }
};
