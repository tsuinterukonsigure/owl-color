import {
    compose,
    keys,
    prop,
    propOr,
    path,
    ifElse,
    isEmpty,
    identity,
    toUpper,
    __,
} from 'ramda';

import OwlColors from './colors';

const getColorKeys = compose(
    keys,
    prop('colors')
);

const checkEmpty = ifElse(isEmpty(), () => undefined, identity())

const getSpecialColorByKey = key =>
    compose(
        team => {
            const colorKey = prop(key, team)
            return path(['colors', colorKey], team)
        },
        propOr({}, __, OwlColors),
        toUpper
    );

export const getAllColors = () => OwlColors;

export const getMaincolor = getSpecialColorByKey('maincolor');

export const getSeconcolor = getSpecialColorByKey('seconcolor');

export const getColors = compose(
    prop('colors'),
    propOr({}, __, OwlColors),
    toUpper
);

export const getFullName = compose(
    prop('fullName'),
    propOr({}, __, OwlColors),
    toUpper
);

export const getColorList = compose(
    compose(
        checkEmpty,
        getColorKeys
    ),
    propOr({}, __, OwlColors),
    toUpper
);
