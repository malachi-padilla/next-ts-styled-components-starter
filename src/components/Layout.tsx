import { SuspenseProps } from 'react';

const Layout = ({ children }: SuspenseProps) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;
