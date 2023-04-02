import { NextApiRequest, NextApiResponse } from 'next';

export interface ExtendedNextApiRequest<T> extends NextApiRequest {
	body: T;
}

export interface IYourAPIData {
	data: any;
}

export interface IHelloMessage {
	message: string;
}

export interface ResBody {
	message: string;
}

type Send<ResBody = any, T = NextApiResponse<ResBody>> = (body?: ResBody) => T;

export interface ICustomResponse<T> extends NextApiResponse {
	json: Send<T, this>;
}
