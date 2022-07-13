import React from 'react';
import Header from '../../components/Header/Header';
import styles from './ClientsAndPartners.module.scss';

const ClientsAndPartners = () => {
	return (
		<>
			<Header style={{ backgroundColor: '#191919' }} />
			<div className={styles.clients_wrapper}>ClientsAndPartners</div>
		</>
	);
};

export default ClientsAndPartners;
