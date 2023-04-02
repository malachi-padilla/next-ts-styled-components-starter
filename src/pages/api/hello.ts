// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ExtendedNextApiRequest, ICustomResponse, IHelloMessage, IYourAPIData } from './types/apiTypes';

export default function handler(req: ExtendedNextApiRequest<IYourAPIData>, res: ICustomResponse<IHelloMessage>) {
	res
		.status(200)
		.json({ message: 'Hello,  welcome to your next.js typescript + styled-components project. Happy hacking!!' });
}
