import React from 'react';
import './DetailsPanel.css';
import RelatedJobsButton from './RelatedJobsButton';
import EditInfoButton from './EditInfoButton';

const DetailsPanel = ({ customer, onEdit }) => {
    return (
        <div className="details-panel">
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Address: {customer.address}</p>
            <RelatedJobsButton customerId={customer.id} />
            <EditInfoButton customerId={customer.id} onEdit={() => onEdit(customer)}  />
       </div>
    );
}

export default DetailsPanel;
