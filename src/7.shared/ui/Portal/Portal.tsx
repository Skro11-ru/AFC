import { ReactNode } from 'react';
import {createPortal} from "react-dom";

interface IPortalProps {
	children?: ReactNode;
    targetElement?: HTMLElement
}

export const Portal = ({  children, targetElement }: IPortalProps) => {
	return createPortal(children, targetElement ?? document.body);
};
