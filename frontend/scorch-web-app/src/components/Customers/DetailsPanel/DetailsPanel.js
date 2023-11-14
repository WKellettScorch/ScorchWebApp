import React from 'react';
import './DetailsPanel.css';
import RelatedJobsButton from './RelatedJobsButton';
import EditInfoButton from './EditInfoButton';

const DetailsPanel = ({ customer, onEdit, onViewRelatedJobs }) => {
    return (
        <div className="details-panel">
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Address: {customer.address}</p>
            {/* Pass onViewRelatedJobs to the RelatedJobsButton */}
            <RelatedJobsButton customerId={customer.id} onViewRelatedJobs={onViewRelatedJobs} />
            <EditInfoButton customerId={customer.id} onEdit={() => onEdit(customer)}  />
       </div>
    );
};

export default DetailsPanel;
