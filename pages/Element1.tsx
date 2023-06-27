
import { ReactNode } from 'react';
type Element1 = {
    children:ReactNode;
};
const Element1: React.FC<Element1> = ({children}) => {
    return (
        <div>
            abc
        </div>
    )
}
export default Element1;