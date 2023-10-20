import React from 'react';
import './DetailsPanel.css';
import RelatedJobsButton from './RelatedJobsButton';
import EditInfoButton from './EditInfoButton';

const DetailsPanel = ({ customer }) => {
    return (
        <div className="details-panel">
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Address: {customer.address}</p>
            <RelatedJobsButton customerId={customer.id} />
            <EditInfoButton customerId={customer.id} />
        </div>
    );
}

export default DetailsPanel;
