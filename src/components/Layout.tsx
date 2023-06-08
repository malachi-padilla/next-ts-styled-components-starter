import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;
