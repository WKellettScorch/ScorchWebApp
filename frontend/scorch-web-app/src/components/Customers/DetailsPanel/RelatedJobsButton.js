import React from 'react';
import './RelatedJobsButton.css';

const RelatedJobsButton = ({ customerId, onViewRelatedJobs }) => {
    // Add onClick handler to call the provided function
    return (
        <button 
            className="related-jobs-button" 
            onClick={() => onViewRelatedJobs(customerId)}
        >
            View Related Jobs
        </button>
    );
};

export default RelatedJobsButton;
