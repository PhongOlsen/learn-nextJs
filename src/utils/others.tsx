import { ReactChild, ReactChildren } from 'react';

export type ChildrenType =
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[];
