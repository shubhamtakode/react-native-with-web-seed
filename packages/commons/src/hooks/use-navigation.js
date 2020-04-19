import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'

const useQuery = (search) => {
    return new URLSearchParams(search);
}

const getRouteUrl = (path, params) => {
    return Object.keys(params).reduce((acc, eParamKey) => {
        const regex = new RegExp(":" + eParamKey);
        const output = acc.replace(regex, params[eParamKey]);
        return output;
    }, path);
}


export const useNavigation = () => {
    const { push, goBack, replace } = useHistory();
    const location = useLocation();
    const params = useParams();
    const query = useQuery(location.search);

    const navigateTo = (url, state = {}, queryParams = null, remove = false) => {
        if (queryParams) {
            if (typeof queryParams === 'string') {
                queryParams = Object.fromEntries(useQuery(queryParams))
            }
            queryParams = Object.keys(queryParams).map(qPKey => `${qPKey}=${queryParams[qPKey]}`).join('&')
        }
        const locationDescriptor = {
            pathname: getRouteUrl(url, state),
            ...(queryParams && {
                search: queryParams
            }),
            state,
            params: state
        }
        if (remove) {
            replace(locationDescriptor)
        } else {
            push(locationDescriptor);
        }
    };

    const navigateBack = () => {
        goBack();
    };

    return {
        navigateTo,
        navigateBack,
        getState: location.state || {},
        getStateByKey: (key) => (location.state || {})[key],
        routeDetails: location,
        isWeb: true,
        getRouteParam: (key) => params[key],
        getRouteParams: params,
        getQueryParam: (key) => query.get(key),
        getQueryParams: Object.fromEntries(query)
    }
};
